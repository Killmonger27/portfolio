"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectData } from "@/data/project";

const Work = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 xl:mb-16">
          <h2 className="text-3xl xl:text-4xl font-bold mb-4">
            Latest Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Discover my latest web development projects, from React applications
            to complete full-stack solutions.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        {/* Projects Swiper */}
        <div className="w-full">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
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
