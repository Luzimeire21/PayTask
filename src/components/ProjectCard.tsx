import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDaysIcon, CircleDollarSignIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { ServiceTable } from "@/drizzle/schema";
import { formatPriceToReais } from "@/lib/formatters";

const ProjectCard = ({
  project,
  isServiceCard,
}: {
  project: ServiceTable;
  isServiceCard: boolean;
}) => {
  return (
    <Card className="group overflow-hidden relative flex flex-col h-[350px]">
      {/* Header */}
      <CardHeader className="p-0 relative">
        <Badge className="absolute top-4 left-4 z-10 bg-primary text-white px-3 py-1 text-xs font-semibold shadow-md">
          {project.category}
        </Badge>

        <div className="relative w-full h-[200px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute pt-4 rounded-lg"
            src={`/serviceSvg/${project.category}.svg`}
            width={isServiceCard ? 180 : 320}
            height={isServiceCard ? 180 : 320}
            alt="project_image"
            priority
          />
          {!isServiceCard && (
            <Link
              href={`/servicos/${project.id}`}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <CircleDollarSignIcon />
            </Link>
          )}
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex-1 h-full px-6 py-3 xl:py-5 flex flex-col">
        <CardTitle className="text-base font-bold text-center mb-2">
          {project.name}
        </CardTitle>
        {isServiceCard ? (
          <div className="flex flex-col gap-2 h-full justify-center items-center">
            <div className="font-semibold">
              {formatPriceToReais(project.price)}
            </div>
            <Link
              href={`/servicos/${project.id}`}
              className="flex gap-2 w-full h-full justify-end text-primary items-end text-sm"
            >
              <CalendarDaysIcon />
            </Link>
          </div>
        ) : (
          <CardDescription className="text-muted-foreground text-md line-clamp-2 flex-grow text-center">
            {project.description}
          </CardDescription>
        )}
      </CardContent>

      {/* Footer */}
      {!isServiceCard && (
        <CardFooter className="flex justify-center py-3">
          <Link
            href={`/servicos/${project.id}`}
            className="text-primary font-medium hover:underline"
          >
            Ver detalhes
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
