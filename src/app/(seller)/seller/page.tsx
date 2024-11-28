import { DataTable } from "@/components/tables/service-table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { db } from "@/drizzle/db";
import { auth } from "@clerk/nextjs/server";
import { columns } from "./columns";

export default async function sellerPage() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  const services = await db.query.servicesTable.findMany({
    where: ({ clerkUserId }, { eq }) => eq(clerkUserId, userId),
    orderBy: ({ createdAt }, { desc }) => desc(createdAt),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Todos os serviços</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={services} />
      </CardContent>
    </Card>
  );
}
