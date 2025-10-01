import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { mockProjects } from "@/data/mockProjects";
import { DollarSign, Clock, Star, Briefcase, ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = mockProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project not found</h1>
            <Button asChild>
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2" size={20} />
              Back to Projects
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="text-sm">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.postedDate}</span>
                  </div>
                  <CardTitle className="text-3xl mb-4">{project.title}</CardTitle>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <DollarSign size={18} className="text-primary" />
                      <span className="font-semibold">{project.budget}</span>
                    </div>
                    {project.deadline && (
                      <div className="flex items-center space-x-2">
                        <Clock size={18} className="text-primary" />
                        <span>{project.deadline}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Project Description</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                    <ul className="space-y-2">
                      {project.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Skills Required</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="animate-fade-in sticky top-24">
                <CardHeader>
                  <CardTitle>Client Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                        {project.client.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{project.client.name}</p>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span>{project.client.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Briefcase size={16} />
                    <span>{project.client.projectsCompleted} projects completed</span>
                  </div>

                  <Button variant="hero" className="w-full" size="lg">
                    Submit Proposal
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    Save Project
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
