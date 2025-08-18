import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Microscope, Users, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import PublicationSlider from "@/components/publication-slider";
import type { Publication, Author } from "@shared/schema";

export default function HomePage() {
  const { data: publications = [], isLoading } = useQuery<(Publication & { authors: Author[] })[]>({
    queryKey: ["/api/publications"],
  });

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-lab-blue to-lab-sky py-20 lg:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-slide-in"
            data-testid="text-hero-title"
          >
            Advancing Scientific Discovery
          </h1>
          <p
            className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in"
            data-testid="text-hero-description"
          >
            Pioneering research in artificial intelligence, machine learning, and computational sciences to shape the future of technology.
          </p>
          <Link href="/research">
            <Button
              size="lg"
              className="bg-white text-lab-blue hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
              data-testid="button-explore-research"
            >
              Explore Our Research
            </Button>
          </Link>
        </div>
      </div>

      {/* Publications Showcase Slider */}
      {isLoading ? (
        <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
                <div className="h-96 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PublicationSlider publications={publications} />
      )}

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" data-testid="feature-research">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-lab-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="text-feature-research-title">
                Advanced Research
              </h3>
              <p className="text-gray-600" data-testid="text-feature-research-description">
                Cutting-edge facilities and equipment for groundbreaking scientific discoveries.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" data-testid="feature-team">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="text-feature-team-title">
                Expert Team
              </h3>
              <p className="text-gray-600" data-testid="text-feature-team-description">
                World-class researchers and scientists leading innovation in their fields.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" data-testid="feature-education">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="text-feature-education-title">
                Education
              </h3>
              <p className="text-gray-600" data-testid="text-feature-education-description">
                Training the next generation of scientists and researchers through hands-on experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
