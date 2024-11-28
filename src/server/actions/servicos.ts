"use server";

import { db } from "@/drizzle/db";
import { servicesTable } from "@/drizzle/schema";
import { servicoFormSchema } from "@/schema/servicos";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import "use-server";
import { z } from "zod";

export async function createServico(
  unsafeData: z.infer<typeof servicoFormSchema>
): Promise<{ error: boolean } | undefined> {
  const { userId } = await auth();
  const { success, data } = servicoFormSchema.safeParse(unsafeData);

  if (!success || userId == null) {
    return { error: true };
  }

  await db.insert(servicesTable).values({ ...data, clerkUserId: userId });

  redirect("/seller");
}