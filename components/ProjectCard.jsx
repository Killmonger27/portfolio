import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative h-[520px] flex flex-col">
      <CardContent className="p-0 flex-1">
        {/* Image */}
        <div className="relative w-full h-[350px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          {project.image && (
            <Image
              className="absolute bottom-0 shadow-2xl object-contain"
              src={project.image}
              width={320}
              height={300}
              alt={project.name}
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
          )}
          {/* Links buttons */}
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              target="_blank"
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" size={22} />
            </Link>
            <Link
              href={project.github}
              target="_blank"
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
            >
              <Github className="text-white" size={22} />
            </Link>
          </div>
        </div>
      </CardContent>
      <div className="px-8 py-6 h-[170px] flex flex-col">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="text-xl font-bold mb-3">{project.name}</h4>
        <p className="text-muted-foreground text-base leading-relaxed line-clamp-4 overflow-hidden">
          {project.description}
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
