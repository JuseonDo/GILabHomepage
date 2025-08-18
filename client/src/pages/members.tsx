import { useQuery } from "@tanstack/react-query";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { TeamMember } from "@shared/schema";

export default function MembersPage() {
  const { data: allMembers = [], isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team-members"],
  });

  const director = allMembers.find(member => member.type === "director");
  const researchers = allMembers.filter(member => member.type === "researcher");
  const students = allMembers.filter(member => member.type === "student");

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-8"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto mb-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20" data-testid="members-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-testid="text-page-title">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-page-description">
            Meet our distinguished researchers and scientists who are driving innovation and advancing scientific knowledge.
          </p>
        </div>

        {/* Principal Investigator */}
        {director && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" data-testid="text-director-section">
              Principal Investigator
            </h2>
            <Card className="max-w-4xl mx-auto shadow-xl" data-testid="card-director">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <img
                    src={director.imageUrl || "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"}
                    alt={director.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-gray-100"
                    data-testid="img-director"
                  />
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2" data-testid="text-director-name">
                      {director.name}
                    </h3>
                    <p className="text-xl text-lab-blue mb-4" data-testid="text-director-position">
                      {director.position}
                    </p>
                    {director.bio && (
                      <p className="text-gray-600 mb-6 leading-relaxed" data-testid="text-director-bio">
                        {director.bio}
                      </p>
                    )}
                    <div className="flex justify-center lg:justify-start space-x-4">
                      <Button variant="ghost" size="sm" data-testid="button-director-linkedin">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" data-testid="button-director-email">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Research Team */}
        {researchers.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" data-testid="text-researchers-section">
              Research Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchers.map((member, index) => (
                <Card
                  key={member.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow"
                  data-testid={`card-researcher-${index}`}
                >
                  <img
                    src={member.imageUrl || "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    data-testid={`img-researcher-${index}`}
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1" data-testid={`text-researcher-name-${index}`}>
                      {member.name}
                    </h3>
                    <p className="text-lab-blue mb-3" data-testid={`text-researcher-position-${index}`}>
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm mb-4" data-testid={`text-researcher-specialization-${index}`}>
                      {member.specialization}
                    </p>
                    <div className="flex space-x-3">
                      <Button variant="ghost" size="sm" data-testid={`button-researcher-linkedin-${index}`}>
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" data-testid={`button-researcher-email-${index}`}>
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Graduate Students */}
        {students.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" data-testid="text-students-section">
              Graduate Students
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {students.map((student, index) => (
                <div key={student.id} className="text-center" data-testid={`card-student-${index}`}>
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-3" data-testid={`img-student-${index}`}></div>
                  <h4 className="font-medium text-gray-900" data-testid={`text-student-name-${index}`}>
                    {student.name}
                  </h4>
                  <p className="text-sm text-gray-600" data-testid={`text-student-position-${index}`}>
                    {student.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
