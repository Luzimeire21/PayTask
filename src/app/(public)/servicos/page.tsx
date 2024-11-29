import ServicesCategories from "@/components/ServicesCategories";
import React from "react";
import { db } from "@/drizzle/db";
import { AlertTriangle } from "lucide-react";

export const revalidate = 0;

export default async function ServicePage() {
  const servicos = await db.query.servicesTable.findMany();

  return (
    <>
      {servicos.length > 0 ? (
        <ServicesCategories services={servicos} />
      ) : (
        <div className="min-h-screen flex flex-col items-center text-center pt-28">
          <AlertTriangle className="w-16 h-16 text-gray-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Nenhum serviço disponível!
          </h1>
          <p className="text-gray-600 mb-4">
            Parece que ainda não temos nenhum serviço cadastrado no momento.
          </p>
          <p className="text-gray-600">
            Volte mais tarde ou confira outras categorias. Estamos trabalhando
            para oferecer mais opções para você!
          </p>
        </div>
      )}
    </>
  );
}
