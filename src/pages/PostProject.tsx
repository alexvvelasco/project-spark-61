import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PostProject = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Post a Project</h1>
            <p className="text-muted-foreground text-lg">Tell us about your project and find the perfect freelancer</p>
          </div>

          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Provide detailed information to attract the right talent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title *</Label>
                <Input id="title" placeholder="e.g., Build a modern e-commerce website" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="writing">Writing</SelectItem>
                    <SelectItem value="data">Data Science</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="video">Video Production</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your project in detail. Include requirements, deliverables, and any specific preferences..."
                  rows={6}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget-min">Budget Range *</Label>
                  <div className="flex items-center space-x-2">
                    <Input id="budget-min" placeholder="Min" type="number" />
                    <span className="text-muted-foreground">-</span>
                    <Input id="budget-max" placeholder="Max" type="number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Required Skills</Label>
                <Input id="skills" placeholder="e.g., React, TypeScript, Node.js (comma separated)" />
                <p className="text-sm text-muted-foreground">Add skills that freelancers should have</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="attachments">Attachments</Label>
                <Input id="attachments" type="file" multiple />
                <p className="text-sm text-muted-foreground">Upload any relevant files (designs, documents, etc.)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="links">Additional Links</Label>
                <Input id="links" placeholder="Add relevant URLs (optional)" />
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="hero" size="lg" className="flex-1">
                  Post Project
                </Button>
                <Button variant="outline" size="lg">
                  Save Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PostProject;
