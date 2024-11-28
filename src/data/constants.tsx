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

export const DAYS_OF_WEEK_IN_ORDER = [
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
  "domingo",
] as const;

export const CATEGORY = [
  { id: 1, name: "Pintura", icon: <Paintbrush /> },
  { id: 2, name: "Encanamento", icon: <Wrench /> },
  { id: 3, name: "Aulas Particular", icon: <Book /> },
  { id: 4, name: "Limpeza", icon: <Home /> },
  { id: 5, name: "Reparo Automotivo", icon: <Car /> },
  { id: 6, name: "Desenvolvimento Web", icon: <Code /> },
  { id: 7, name: "Saúde", icon: <Heart /> },
  { id: 8, name: "Consultoria", icon: <Briefcase /> },
];
