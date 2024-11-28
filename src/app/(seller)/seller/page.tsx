import { db } from "@/drizzle/db";
import { auth } from "@clerk/nextjs/server";

export default async function sellerPage() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  const services = await db.query.servicesTable.findMany({
    where: ({ clerkUserId }, { eq }) => eq(clerkUserId, userId),
    orderBy: ({ createdAt }, { desc }) => desc(createdAt),
  });

  console.log(services);

  return <div>seller</div>;
}
