import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  budget: string;
  category: string;
  postedDate: string;
  deadline?: string;
}

const ProjectCard = ({ id, title, description, budget, category, postedDate, deadline }: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-card-hover transition-all duration-200 hover:scale-[1.02] animate-fade-in">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-xs text-muted-foreground">{postedDate}</span>
        </div>
        <CardTitle className="text-xl hover:text-primary transition-colors">
          <Link to={`/projects/${id}`}>{title}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <DollarSign size={16} />
            <span className="font-semibold text-foreground">{budget}</span>
          </div>
          {deadline && (
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>{deadline}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link to={`/projects/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
