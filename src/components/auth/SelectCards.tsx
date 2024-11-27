"use client";
import React from "react";
import { RoleCard } from "./RoleCard";
import { ShoppingBag, Store } from "lucide-react";

interface SelectCardsProps {
  onSelect: (role: string) => void;
}

const SelectCards: React.FC<SelectCardsProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha Seu Perfil
          </h1>
          <p className="text-xl text-gray-600">
            Selecione como você prefere usar nossa plataforma
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <RoleCard
            icon={Store}
            title="Vendedor"
            description="Exiba e venda seu trabalho. Defina seus próprios preços e condições."
            onClick={() => {
              onSelect("seller");
            }}
          />

          <RoleCard
            icon={ShoppingBag}
            title="Comprador"
            description="Descubra e adquira trabalhos incríveis de criadores talentosos."
            onClick={() => {
              onSelect("buyer");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectCards;
