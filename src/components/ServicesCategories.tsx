"use client";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import ProjectCard from "@/components/ProjectCard";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type Service = {
  id: string;
  name: string;
  description: string | null;
  durationInMinutes: number;
  price: number;
  category: string;
  clerkUserId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type ServicesCategoriesProps = {
  services: Service[];
};

export default function ServicesCategories({
  services,
}: ServicesCategoriesProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("categoria") || "all";
  const [category, setCategory] = useState<string>(initialCategory);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);

  useEffect(() => {
    const filtered =
      category === "all"
        ? services
        : services.filter(
            (item) => item.category.toLowerCase() === category.toLowerCase()
          );
    setFilteredServices(filtered);
  }, [category, services]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("categoria", category);
    router.replace(`${window.location.pathname}?${params.toString()}`);
  }, [category, router]);

  return (
    <section className="min-h-[1200px] py-10 mb-28">
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-4">
          {/* Sidebar */}
          <aside className="w-full xl:w-[300px] flex-shrink-0 p-4 mb-8 xl:h-[84vh]">
            <RadioGroup
              value={category}
              onValueChange={setCategory}
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">Todos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="limpeza" id="limpeza" />
                <Label htmlFor="limpeza">Diarista</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Reparo Automotivo"
                  id="Reparo Automotivo"
                />
                <Label htmlFor="Reparo Automotivo">Mecânica</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Pintura" id="Pintura" />
                <Label htmlFor="Pintura">Pintura</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Encanamento" id="Encanamento" />
                <Label htmlFor="Encanamento">Encanamento</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Aulas Particular"
                  id="Aulas Particular"
                />
                <Label htmlFor="Aulas Particular">Aulas Particulares</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Desenvolvimento Web"
                  id="Desenvolvimento Web"
                />
                <Label htmlFor="Desenvolvimento Web">Desenvolvimento Web</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Saúde" id="Saúde" />
                <Label htmlFor="Saúde">Saúde</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Consultoria" id="Consultoria" />
                <Label htmlFor="Consultoria">Consultoria</Label>
              </div>
            </RadioGroup>
          </aside>

          {/* Service List */}
          <div className="flex-grow w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ProjectCard
                  key={service.id}
                  isServiceCard={true}
                  project={service}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
