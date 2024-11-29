import { ServicoForm } from "@/components/forms/ServicoForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/drizzle/db";
import { auth } from "@clerk/nextjs/server";
import { formatCentsToReais } from "@/lib/formatters";

export const revalidate = 0;

export default async function ServiceEditPage({
  params,
}: {
  params: { id: string };
}) {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();

  const service = await db.query.servicesTable.findFirst({
    where: ({ id, clerkUserId }, { and, eq }) =>
      and(eq(clerkUserId, userId), eq(id, params.id)),
  });

  if (!service) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Serviço não encontrado</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  const formattedService = {
    ...service,
    price: formatCentsToReais(service.price),
    description: service.description || undefined,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Editar Serviço</CardTitle>
      </CardHeader>
      <CardContent>
        <ServicoForm service={formattedService} />
      </CardContent>
    </Card>
  );
}
