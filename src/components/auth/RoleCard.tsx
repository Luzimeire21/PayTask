import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface RoleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export function RoleCard({ icon: Icon, title, description, onClick }: RoleCardProps) {
  return (
    <Card 
      onClick={onClick}
      className={cn(
        "w-72 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        "group relative overflow-hidden"
      )}
    >
      <CardHeader className="flex items-center text-center pb-2">
        <div className="mb-4 p-4 rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
          <Icon size={48} className="text-red-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Card>
  );
}