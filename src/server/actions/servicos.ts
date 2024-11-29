"use server";

import { db } from "@/drizzle/db";
import { servicesTable } from "@/drizzle/schema";
import { servicoFormSchema } from "@/schema/servicos";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
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

export async function deleteServiceById(
  id: string
): Promise<{ error: boolean } | undefined> {
  const { userId } = await auth();
  if (userId == null) {
    return { error: true };
  }
  const {rowCount} = await db
    .delete(servicesTable)
    .where(
      and(eq(servicesTable.id, id), eq(servicesTable.clerkUserId, userId))
    );

    if(rowCount == 0) {
      return { error: true };
    }

    redirect("/seller")
}

export async function updateServico(
  id: string,
  unsafeData: z.infer<typeof servicoFormSchema>
): Promise<{ error: boolean } | undefined> {
  const { userId } = await auth();
  const { success, data } = servicoFormSchema.safeParse(unsafeData);

  if (!success || userId == null) {
    return { error: true };
  }

  const { rowCount } = await db
    .update(servicesTable)
    .set({ ...data })
    .where(
      and(eq(servicesTable.id, id), eq(servicesTable.clerkUserId, userId))
    );

  if (rowCount == 0) {
    return { error: true };
  }

  redirect("/seller");
}
