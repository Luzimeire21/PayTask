import Footer from "@/components/Footer";
import MobileNav from "@/components/home/MobileNav";
import Navbar from "@/components/home/Navbar";
import ThememToggle from "@/components/ThemeToggle";
import { UserButton } from "@clerk/nextjs";
import { Briefcase } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default async function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="hidden md:block">
        <Navbar containerStyles="w-full py-4 px-6" />
      </div>
      <div className="flex flex-row gap-5 justify-between items-center md:hidden m-5">
        <div className="flex items-center text-xl text-primary font-bold start-1 gap-3">
          <Briefcase className="h-8 w-8" />
          <Link href="/">PayTask</Link>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <MobileNav />
          <UserButton />
          <ThememToggle />
        </div>
      </div>
      {children}
      <Footer />
    </>
  );
}
