import Image from "next/image";
import { Button } from "@/components/ui/button";
import Socials from "@/components/home/Socials";

export default function Hero() {
  return (
    <section className="py-16 xl:pt-5 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 xl:gap-x-10">
        <div className="flex flex-col gap-10 lg:gap-0 items-center lg:items-start">
          <h1 className="h1 mb-4 text-primary text-center lg:text-left">
            Simplifique sua busca por serviços. Contrate com facilidade!
          </h1>
          <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            O poder da escolha está em suas mãos.
          </p>
          <Button className="h-16 w-48 text-xl rounded-full">
            Saiba mais
          </Button>
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-8 xl:mt-[2em]"
            iconsStyles="text-primary text-[20px] dark:text-white/70 hover:text-black dark:hover:text-primary transition-all"
          />
        </div>

        <div className="bg-primary/50 dark:bg-secondary w-[40em] rounded-lg rounded-bl-[20em] hidden xl:flex justify-end max-h-[31em]">
          <Image src="/trabalhador4.png" width={450} height={400} alt="" />
        </div>
      </div>
    </section>
  );
}
