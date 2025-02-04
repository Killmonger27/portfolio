"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "",
    category: "React js",
    name: "Password Generator",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aliquid",
    link: "/",
    github: "/",
  },
  {
    image: "",
    category: "Next js",
    name: "Personnal Portfolio",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aliquid",
    link: "/",
    github: "/",
  },
  {
    image: "",
    category: "React js",
    name: "Currencies Converter",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aliquid",
    link: "/",
    github: "/",
  },
  {
    image: "",
    category: "Full-stack",
    name: "Next Dashboard",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aliquid",
    link: "/",
    github: "/",
  },
  {
    image: "",
    category: "Backend",
    name: "Managment API",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aliquid",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className=" relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className=" section-title mb-4 text-center">Latest Projects</h2>
          <p className=" subtitle mb-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consequuntur cum quasi atque suscipit illo.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="  xl:max-w-[800px] xl:absolute right-0 top-0 ">
          <Swiper
            className="h-[438px]"
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
            {projectData.slice(0, 4).map((project, index) => {
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
