"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ServiceTable } from "@/drizzle/schema";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  CircleCheckIcon,
  CircleXIcon,
  MoreHorizontal,
  UserRoundPen,
  UserRoundX,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useState, startTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteServiceById } from "@/server/actions/servicos";
import { formatPriceToReais } from "@/lib/formatters";

interface ActionCellProps {
  service: ServiceTable;
}

const ActionCell: React.FC<ActionCellProps> = ({ service }) => {
  const [isDeletePending, setIsDeletePending] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const router = useRouter();


  const deleteService = async (id: string) => {
    try {
      setIsDeletePending(true);
      await deleteServiceById(id);
      router.refresh();
    } catch (error) {
      console.error("Failed to delete patient:", error);
    } finally {
      setIsDeletePending(false);
      setOpenAlert(false);
    }
  };


  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => router.push(`/seller/edit/${service.id}`)}
            className="flex justify-between"
          >
            Editar <UserRoundPen />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setOpenAlert(true)}
            className="flex justify-between"
          >
            Deletar
            <UserRoundX />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogTrigger asChild>
          <span />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. Isso excluirá permanentemente o
              serviço.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={isDeletePending}
              onClick={() => {
                startTransition(() => deleteService(service.id));
              }}
            >
              Deletar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export const columns: ColumnDef<ServiceTable>[] = [
  {
    accessorKey: "name",
    header: "Serviço",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "price",
    header: "Preço",
    cell: ({ row }) => {
      const formattedPrice = formatPriceToReais(row.original.price);
      return <span>{formattedPrice}</span>;
    },
  },
  {
    accessorKey: "isActive",
    header: "Ativo",
    cell: ({ row }) => {
      const isActive = row.original.isActive;
      return (
        <div className="flex items-center space-x-2">
          {isActive ? (
            <CircleCheckIcon className="text-green-500" />
          ) : (
            <CircleXIcon className="text-red-500" />
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionCell service={row.original} />,
  },
];
