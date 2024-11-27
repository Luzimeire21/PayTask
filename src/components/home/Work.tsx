"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/home/ProjectCard";
import data from "@/data.json";

interface DataProject {
  id: string;
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
}

const projectData = data;

const Work = () => {
  return (
    <section className="relative mb-20 xl:mb-28">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="h3 text-primary mb-4 max-w-[10em] tracking-wide">
            Serviços mais solicitados
          </h2>
          <p className="subtitle mb-8 xl:max-w-[16em]">
            Descubra os serviços que mais atendem às necessidades dos nossos
            clientes em cada área.
          </p>
          <Link href="/servicos">
            <Button>Todos os Serviços</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 xl:pr-10">
          <Swiper
            className="h-[450px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 16).map((project: DataProject, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
