import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  AlignJustify,
  LockKeyhole,
  MessageCircleQuestion,
  ShoppingBag,
  Store,
} from "lucide-react";
import Socials from "./Socials";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth, clerkClient } from "@clerk/nextjs/server";

const MobileNav = async () => {
  const { userId } = await auth();

  let role: string | null = null;

  if (userId) {
    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    role = user.privateMetadata.role as string | null;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            {/* Logo */}
            <div className="flex flex-row text-3xl text-primary font-bold start-1 tracking-[10px] gap-5">
              <Link href="/">PayTask</Link>
            </div>

            {/* Links Dinâmicos */}
            <div className="flex flex-col gap-10 items-center text-primary">
              <Link className="flex items-center" href="/about">
                <Button variant="ghost">Como funciona</Button>
                <MessageCircleQuestion className="w-6 h-6" />
              </Link>
              {!userId && (
                <Link href="/sign-in">
                  <Button variant="default">Seja um profissional</Button>
                </Link>
              )}
              {role === "admin" && (
                <Link className="flex items-center" href="/admin">
                  <Button variant="ghost">Painel Admin</Button>
                  <LockKeyhole />
                </Link>
              )}
              {role === "seller" && (
                <Link className="flex items-center" href="/seller">
                  <Button variant="ghost">Área do Vendedor</Button>
                  <Store className="w-6 h-6" />
                </Link>
              )}
              {role === "buyer" && (
                <Link className="flex items-center" href="/servicos">
                  <Button variant="ghost">Procurar Serviços</Button>
                  <ShoppingBag />
                </Link>
              )}
            </div>
          </div>

          {/* Redes Sociais */}
          <Socials
            containerStyles="flex gap-x-4 text-primary"
            iconsStyles="text-2xl"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
