import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Send, Download } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiCodeSSlashFill,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Social from "./Social";

const Hero = () => {
  const specialties = [
    "Full-Stack Development",
    "System Administration",
    "DevOps Culture",
    "Cloud Infrastructure",
  ];

  return (
    <section className="py-12 xl:py-24 min-h-[80vh] xl:min-h-[85vh] bg-hero bg-no-repeat bg-bottom dark:bg-none relative">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-8 h-full">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left order-2 xl:order-1">
            {/* Dynamic title with animation */}
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] flex items-center justify-center xl:justify-start gap-2">
              <RiCodeSSlashFill className="text-lg" />
              Full-Stack Developer & DevOps Enthusiast
            </div>

            <h1 className="text-3xl xl:text-5xl font-bold mb-6">
              Hey, I'm <span className="text-primary">Landry Ouarma</span>
            </h1>

            {/* Enhanced description */}
            <div className="max-w-[520px] mx-auto xl:mx-0 mb-8">
              <p className="text-lg mb-4 leading-relaxed">
                I create{" "}
                <span className="font-semibold text-primary">
                  user-friendly and innovative websites
                </span>
                , while being passionate about{" "}
                <span className="font-semibold">system administration</span> and
                <span className="font-semibold text-primary">
                  {" "}
                  DevOps culture
                </span>
                .
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Computer Science student at IBAM, always staying updated with
                the latest tech trends and infrastructure best practices.
              </p>
            </div>

            {/* Specialties tags */}
            <div className="flex flex-wrap gap-2 justify-center xl:justify-start mb-8">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mx-auto xl:mx-0 mb-8">
              <Link href="/contact">
                <Button className="gap-x-2 min-w-[160px]">
                  <Send size={18} />
                  Let's Work Together
                </Button>
              </Link>
              <Button variant="outline" className="gap-x-2 min-w-[140px]">
                <Download size={18} />
                Download CV
              </Button>
            </div>

            {/* Social links */}
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all duration-300 hover:scale-110"
            />
          </div>

          <div className="relative order-1 xl:order-2 mb-8 xl:mb-0">
            {/* Enhanced Badges */}
            <Badge
              endCountNumb={2}
              icon={<RiBriefcase4Fill />}
              badgeText="Years of Experience"
              containerStyles="absolute bg-white  top-[10%] -left-7 shadow-lg z-10"
            />

            <Badge
              endCountNumb={25}
              endCountText="+"
              icon={<RiTeamFill />}
              badgeText="Happy Clients"
              containerStyles="absolute bg-white  top-[40%] -right-2 shadow-lg z-10"
            />

            <Badge
              endCountNumb={8}
              endCountText="+"
              icon={<RiTodoFill />}
              badgeText="Completed Projects"
              containerStyles="absolute bg-white  top-[70%] shadow-lg z-10"
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[350px] h-[350px] xl:w-[410px] xl:h-[400px] bg-no-repeat absolute top-3 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[350px] h-[350px] xl:w-[400px] xl:h-[410px] bg-no-repeat relative top-3"
              imgSrc="/hero/file.png"
              alt="Photo of Landry Ouarma - Full-Stack Developer and DevOps Enthusiast"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden xl:flex absolute left-1/2 transform -translate-x-1/2 bottom-8 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
