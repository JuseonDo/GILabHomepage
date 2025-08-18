import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Download, Brain, Bot, Dna } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Publication } from "@shared/schema";

export default function ResearchPage() {
  const { data: publications = [], isLoading } = useQuery<Publication[]>({
    queryKey: ["/api/publications"],
  });

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-8"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto mb-16"></div>
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-48 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20" data-testid="research-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-testid="text-page-title">
            Research & Publications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-page-description">
            Explore our comprehensive research portfolio spanning artificial intelligence, robotics, and biotechnology.
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center" data-testid="text-research-areas">
            Research Areas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow" data-testid="card-ai-research">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="text-ai-title">
                  Artificial Intelligence
                </h3>
                <p className="text-gray-700 mb-6" data-testid="text-ai-description">
                  Deep learning, natural language processing, computer vision, and neural networks for healthcare and automation.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li data-testid="text-ai-focus-1">• Medical Image Analysis</li>
                  <li data-testid="text-ai-focus-2">• Predictive Healthcare Models</li>
                  <li data-testid="text-ai-focus-3">• Autonomous Systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow" data-testid="card-robotics-research">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="text-robotics-title">
                  Robotics
                </h3>
                <p className="text-gray-700 mb-6" data-testid="text-robotics-description">
                  Advanced robotic systems for surgical applications, industrial automation, and human-robot interaction.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li data-testid="text-robotics-focus-1">• Surgical Robotics</li>
                  <li data-testid="text-robotics-focus-2">• Haptic Feedback Systems</li>
                  <li data-testid="text-robotics-focus-3">• Collaborative Robots</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow" data-testid="card-biotech-research">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Dna className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="text-biotech-title">
                  Biotechnology
                </h3>
                <p className="text-gray-700 mb-6" data-testid="text-biotech-description">
                  Gene editing, molecular biology, and computational biology for therapeutic applications and drug discovery.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li data-testid="text-biotech-focus-1">• CRISPR Technologies</li>
                  <li data-testid="text-biotech-focus-2">• Protein Engineering</li>
                  <li data-testid="text-biotech-focus-3">• Drug Discovery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Publications */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center" data-testid="text-publications">
            Recent Publications
          </h2>
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <Card
                key={publication.id}
                className="hover:shadow-xl transition-shadow border border-gray-100"
                data-testid={`card-publication-${index}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Badge
                        variant="secondary"
                        className={`${
                          publication.type === "journal"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        } text-xs font-semibold`}
                        data-testid={`badge-publication-type-${index}`}
                      >
                        {publication.type === "journal" ? "Journal Article" : "Conference"}
                      </Badge>
                      <span className="text-gray-500 text-sm" data-testid={`text-publication-year-${index}`}>
                        {publication.year}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" data-testid={`button-publication-link-${index}`}>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" data-testid={`button-publication-download-${index}`}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3 hover:text-lab-blue transition-colors cursor-pointer"
                    data-testid={`text-publication-title-${index}`}
                  >
                    {publication.title}
                  </h3>
                  <p className="text-gray-600 mb-4" data-testid={`text-publication-authors-${index}`}>
                    {publication.authors}
                  </p>
                  <p className="text-gray-700 mb-4" data-testid={`text-publication-venue-${index}`}>
                    <strong>
                      {publication.journal || publication.conference}
                    </strong>
                  </p>
                  <p className="text-gray-600 text-sm" data-testid={`text-publication-abstract-${index}`}>
                    {publication.abstract}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              className="bg-lab-blue text-white hover:bg-blue-700 transition-colors"
              data-testid="button-view-all-publications"
            >
              View All Publications
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
