import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const { userId } = await auth();

  if (userId != null) redirect("/");
  return (
    <main className="flex justify-center p-32 md:p-16">
      <SignIn path="/sign-in" />
    </main>
  );
}
