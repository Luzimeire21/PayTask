import {
  Book,
  Briefcase,
  Car,
  Code,
  Heart,
  Home,
  Paintbrush,
  Wrench,
} from "lucide-react";
import { Card } from "../ui/card";

export default function Services() {
  const categories = [
    {
      icon: Paintbrush,
      name: "Pintura Residencial",
      description: "Serviços de pintura interna e externa",
      link: "/servicos?categoria=diarista",
    },
    {
      icon: Wrench,
      name: "Encanamento",
      description: "Soluções profissionais de encanamento",
      link: "/servicos?categoria=reparos",
    },
    {
      icon: Book,
      name: "Aulas Particular",
      description: "Orientação acadêmica especializada",
      link: "/servicos?categoria=mecanica",
    },
    {
      icon: Home,
      name: "Limpeza",
      description: "Serviços de limpeza residencial e comercial",
      link: "/servicos?categoria=eventos",
    },
    {
      icon: Car,
      name: "Reparo Automotivo",
      description: "Manutenção e reparo de veículos",
      link: "/servicos?categoria=tecnologia",
    },
    {
      icon: Code,
      name: "Desenvolvimento Web",
      description: "Desenvolvimento de sites personalizados",
      link: "/servicos?categoria=aulas",
    },
    {
      icon: Heart,
      name: "Cuidados Com Saúde",
      description: "Serviços de assistência domiciliar",
      link: "/servicos?categoria=saúde",
    },
    {
      icon: Briefcase,
      name: "Empresas",
      description: "Serviços de Consultoria",
      link: "/servicos?categoria=beleza",
    },
  ];

  return (
    <section className="py-12 bg-muted/50 mb-28">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary h2">
            Serviços PayTask
          </h2>
          <p className="text-muted-foreground mt-4">
            Explore nossa ampla gama de serviços profissionais
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a href={category.link} key={index}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer min-h-48">
                <category.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
