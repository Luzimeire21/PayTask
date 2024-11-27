"use client";

import { motion } from "framer-motion";
import { Shield, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Profissionais Verificados",
    description:
      "Todos os prestadores de serviços são cuidadosamente avaliados e verificados",
  },
  {
    icon: Users,
    title: "Comunidade Confiável",
    description:
      "Junte-se a milhares de clientes e prestadores de serviços satisfeitos",
  },
  {
    icon: Clock,
    title: "Agendamento Flexível",
    description: "Agende serviços conforme sua conveniência, 24/7",
  },
];

export default function About() {
  return (
    <section className="py-16 pb-28 bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-primary h2"
          >
            Por que escolher o PayTask?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-4"
          >
            Conectamos profissionais qualificados com clientes, facilitando a
            busca e a contratação de serviços.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
