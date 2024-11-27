import SelectCards from "@/components/auth/SelectCards";
import { currentUser, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface Role {
  role: string;
}

export default async function selectPage() {
  const user = await currentUser();

  const role: Role | undefined = user?.privateMetadata as Role | undefined;

  console.log(role?.role)

  if (role?.role === "buyer") {
    redirect("servicos");
  }
  if(role?.role === "seller") {
    redirect("seller")
  }

  async function handleCallback(role: string): Promise<void> {
    "use server";
    const client = await clerkClient();

    if (user?.id) {
      await client.users.updateUserMetadata(user?.id, {
        privateMetadata: {
          role,
        },
      });

      revalidatePath('/select')
    }
  }

  return <SelectCards onSelect={handleCallback} />;
}
