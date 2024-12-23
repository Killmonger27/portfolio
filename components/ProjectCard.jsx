import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import Badge from "./Badge";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <Card>
      <CardHeader>Card Header</CardHeader>
      <div className="h-full px-8 py-60">
        <Badge
          containerStyles={`text-sm font-medium mb-2 absolute top-2 left-5`}
          badgeText={project.category}
        ></Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
