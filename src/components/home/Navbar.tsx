import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThememToggle from "@/components/ThemeToggle";
import { Briefcase, LockKeyhole } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { ShoppingBag, Store } from "lucide-react";

interface NavProps {
  containerStyles?: string;
}

export default async function Navbar({ containerStyles }: NavProps) {
  const { userId } = await auth();

  if (!userId) {
    return (
      <nav
        className={`${containerStyles} border-b-2 dark:border-b-gray-800 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 text-xl text-primary font-bold">
            <Briefcase className="h-8 w-8" />
            <Link href="/">PayTask</Link>
          </div>
          <div className="flex items-center space-x-4 text-primary">
            <div className="space-x-4 flex items-center">
              <Link href="/about">Como funciona</Link>
              <Link href="/sign-in">
                <Button variant="default">Seja um profissional</Button>
              </Link>
            </div>
            <ThememToggle />
          </div>
        </div>
      </nav>
    );
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const role = user.privateMetadata.role;

  return (
    <nav
      className={`${containerStyles} border-b-2 dark:border-b-gray-800 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 text-xl text-primary font-bold">
          <Briefcase className="h-8 w-8" />
          <Link href="/">PayTask</Link>
        </div>

        <div className="flex items-center space-x-4 text-primary">
          {role === "admin" && (
            <Link className="hover:bg-red-200 rounded-full" href="/admin">
              <LockKeyhole className="w-6 h-6" />
            </Link>
          )}
          {role === "seller" && (
            <Link className="hover:bg-red-200 rounded-full" href="/seller">
              <Store className="w-6 h-6" />
            </Link>
          )}
          {role === "buyer" && (
            <Link className="hover:bg-red-200 rounded-full" href="/servicos">
              <ShoppingBag />
            </Link>
          )}

          <UserButton />
          <ThememToggle />
        </div>
      </div>
    </nav>
  );
}
