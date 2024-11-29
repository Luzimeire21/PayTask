import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { CircleDollarSignIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { ServiceTable } from "@/drizzle/schema";

const ProjectCard = ({
  project,
  isServiceCard,
}: {
  project: ServiceTable;
  isServiceCard: boolean;
}) => {
  return (
    <Card className="group overflow-hidden relative h-[400px]">
      <CardHeader className="p-0">
        <div className="relative w-full h-[280px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute pt-4 rounded-lg"
            src={`/serviceSvg/${project.category}.svg`}
            width={isServiceCard ? 180 : 320}
            height={isServiceCard ? 180 : 320}
            alt="project_image"
            priority
          />
          <div>
            {!isServiceCard && (
              <div>
                <Link
                  href={`/servicos/${project.id}`}
                  className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                >
                  <CircleDollarSignIcon />
                </Link>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-3 xl:py-5 flex flex-col">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 text-center mb-1">{project.name}</h4>
        {isServiceCard ? (
          <Link
            href={`/servicos/${project.id}`}
            className="flex gap-5 justify-center text-primary underline text-center"
          >
            Solicitar Orçamento <CircleDollarSignIcon />
          </Link>
        ) : (
          <p className="text-muted-foreground text-md line-clamp-2 flex-grow">
            {project.description}
          </p>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
