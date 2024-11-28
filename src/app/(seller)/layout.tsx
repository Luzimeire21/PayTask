import { NavLink } from "@/components/NavLink";
import { UserButton } from "@clerk/nextjs";
import { Store } from "lucide-react";
import { ReactNode } from "react";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="flex py-2 border-b bg-card">
        <nav className="font-medium flex items-center text-sm gap-6 container">
          <div className="flex items-center gap-2 font-semibold mr-auto text-primary">
            <a href="/">
              <Store className="size-6" />
            </a>
            <span className="sr-only md:not-sr-only">Serviços</span>
          </div>
          <NavLink href="/seller">Serviços</NavLink>
          <NavLink href="/seller/schedule">Horários</NavLink>
          <div className="flex ml-auto size-10 items-center">
            <UserButton />
          </div>
        </nav>
      </header>
      <main className="container my-6">{children}</main>
    </>
  );
}
