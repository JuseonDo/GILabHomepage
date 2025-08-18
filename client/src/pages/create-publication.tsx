import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useLocation } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, ArrowLeft } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const publicationSchema = z.object({
  title: z.string().min(1, "제목을 입력해주세요"),
  journal: z.string().optional(),
  conference: z.string().optional(),
  year: z.string().min(4, "연도를 입력해주세요"),
  type: z.enum(["journal", "conference"], {
    errorMap: () => ({ message: "논문 타입을 선택해주세요" }),
  }),
  abstract: z.string().min(1, "초록을 입력해주세요"),
  pdfUrl: z.string().url("올바른 PDF URL을 입력해주세요").optional(),
  authors: z.array(z.object({
    name: z.string().min(1, "저자명을 입력해주세요"),
    homepage: z.string().url("올바른 URL을 입력해주세요").optional().or(z.literal("")),
  })).min(1, "최소 한 명의 저자를 추가해주세요"),
});

type PublicationFormData = z.infer<typeof publicationSchema>;

export default function CreatePublication() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<PublicationFormData>({
    resolver: zodResolver(publicationSchema),
    defaultValues: {
      title: "",
      journal: "",
      conference: "",
      year: new Date().getFullYear().toString(),
      type: "journal",
      abstract: "",
      pdfUrl: "",
      authors: [{ name: "", homepage: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "authors",
  });

  const publicationType = form.watch("type");

  const createPublicationMutation = useMutation({
    mutationFn: (data: PublicationFormData) => {
      const { authors, ...publicationData } = data;
      return apiRequest("/api/publications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          publication: publicationData,
          authors: authors.map(author => ({
            name: author.name,
            homepage: author.homepage || undefined,
          })),
        }),
      });
    },
    onSuccess: () => {
      toast({
        title: "논문 게시 완료",
        description: "논문이 성공적으로 게시되었습니다.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/publications"] });
      setLocation("/research");
    },
    onError: (error: any) => {
      toast({
        title: "논문 게시 실패",
        description: error.message || "논문 게시 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: PublicationFormData) => {
    createPublicationMutation.mutate(data);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">로그인 필요</h2>
            <p className="text-slate-600 mb-6">논문을 게시하려면 로그인이 필요합니다.</p>
            <Link href="/login">
              <Button className="w-full">로그인</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/research" className="inline-flex items-center text-white hover:text-blue-200 transition-colors" data-testid="link-back">
            <ArrowLeft className="h-4 w-4 mr-2" />
            연구 페이지로 돌아가기
          </Link>
        </div>

        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800">
              새 논문 게시
            </CardTitle>
            <p className="text-slate-600">
              연구 결과를 공유하고 학술 커뮤니티에 기여하세요
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="publication-form">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>논문 제목</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="논문의 제목을 입력하세요"
                          data-testid="input-title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>논문 타입</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-type">
                            <SelectValue placeholder="논문 타입을 선택하세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="journal">저널 논문</SelectItem>
                          <SelectItem value="conference">학회 논문</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {publicationType === "journal" ? (
                  <FormField
                    control={form.control}
                    name="journal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>저널명</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="예: Nature, Science, Cell"
                            data-testid="input-journal"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  <FormField
                    control={form.control}
                    name="conference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>학회명</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="예: ICML, NeurIPS, ICLR"
                            data-testid="input-conference"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>발표 연도</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="1900"
                          max="2030"
                          placeholder="2024"
                          data-testid="input-year"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="abstract"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>초록</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="논문의 초록을 입력하세요..."
                          className="min-h-[120px]"
                          data-testid="input-abstract"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pdfUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PDF URL (선택사항)</FormLabel>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="https://example.com/paper.pdf"
                          data-testid="input-pdfUrl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <FormLabel>저자</FormLabel>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => append({ name: "", homepage: "" })}
                      data-testid="button-add-author"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      저자 추가
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {fields.map((field, index) => (
                      <Card key={field.id} className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-1 space-y-4">
                            <FormField
                              control={form.control}
                              name={`authors.${index}.name`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>저자명</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="홍길동"
                                      data-testid={`input-author-name-${index}`}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name={`authors.${index}.homepage`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>홈페이지 (선택사항)</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="url"
                                      placeholder="https://example.com"
                                      data-testid={`input-author-homepage-${index}`}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          {fields.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => remove(index)}
                              data-testid={`button-remove-author-${index}`}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={createPublicationMutation.isPending}
                    data-testid="button-submit"
                  >
                    {createPublicationMutation.isPending ? "게시 중..." : "논문 게시"}
                  </Button>
                  
                  <Link href="/research">
                    <Button type="button" variant="outline" data-testid="button-cancel">
                      취소
                    </Button>
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}