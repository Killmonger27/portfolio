"use client";

import DevImg from "./DevImg";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { RiSpectrumFill } from "react-icons/ri";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Landry Ouarma",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+226 07399750",
  },
  {
    icon: <MailIcon size={20} />,
    text: "landryouarma45@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 27 Feb, 2004",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor's degree in Computer Science on progress",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Rimkieta sect 14, Ouagadougou, Burkina Faso",
  },
];

const qualifications = [
  {
    title: "Education",
    data: [
      {
        university: "Marien N'Gouabi",
        qualification: "high school diploma with a focus on Science (D series)",
        years: "2021-2022",
      },
      {
        university: "IBAM",
        qualification: "First year of a Bachelor's degree in Computer Science",
        years: "2022-2023",
      },
      {
        university: "IBAM",
        qualification: "Second year of a Bachelor's degree in Computer Science",
        years: "2023-2024",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "Freelance",
        qualification: " Full-Stack web Developer",
        years: "2023-Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        category: "Frontend Development",
        skills: [
          { name: "React & Next.js", level: 90 },
          { name: "JavaScript (ES6+)", level: 95 },
          { name: "HTML5 & CSS3", level: 95 },
          { name: "Tailwind CSS", level: 85 },
          { name: "TypeScript", level: 80 },
        ],
      },
      {
        category: "Backend Development",
        skills: [
          { name: "Node.js & Express", level: 85 },
          { name: "Python & Django", level: 80 },
          { name: "Java & Spring Boot", level: 75 },
          { name: "PHP & Laravel", level: 70 },
          { name: "RESTful APIs", level: 90 },
        ],
      },
      {
        category: "Database & Cloud",
        skills: [
          { name: "MongoDB & Prisma", level: 85 },
          { name: "MySQL & PostgreSQL", level: 80 },
          { name: "AWS Services", level: 75 },
          { name: "Firebase", level: 80 },
        ],
      },
      {
        category: "DevOps & System Administration",
        skills: [
          { name: "Docker & Containerization", level: 85 },
          { name: "Linux Server Management", level: 90 },
          { name: "CI/CD Pipelines", level: 75 },
          { name: "Git & Version Control", level: 95 },
          { name: "Nginx & Apache", level: 80 },
        ],
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        name: "VS Code",
        imgPath: "/about/vscode.svg",
        alt: "Landry Ouarma's VS Code svg",
      },
      {
        name: "Postman",
        imgPath: "/about/postman.svg",
        alt: "Landry Ouarma's Postman svg",
      },
      {
        name: "GitHub",
        imgPathLight: "/about/GitHub_light.svg",
        imgPathDark: "/about/GitHub_dark.svg",
        alt: "Landry Ouarma's Github svg",
      },
      {
        name: "Figma",
        imgPath: "/about/figma.svg",
        alt: "Landry Ouarma's Figma svg",
      },
      {
        name: "Docker",
        imgPath: "/about/docker.svg",
        alt: "Landry Ouarma's Docker svg",
      },
      {
        name: "Linux",
        imgPath: "/about/linux.svg",
        alt: "Landry Ouarma's Linux svg",
      },
      {
        name: "AWS",
        imgPathLight: "/about/Amazon Web Services_light.svg",
        imgPathDark: "/about/Amazon Web Services_dark.svg",
        alt: "Landry Ouarma's AWS svg",
      },
      {
        name: "WordPress",
        imgPath: "/about/wordpress.svg",
        alt: "Landry Ouarma's WordPress svg",
      },
    ],
  },
];

const About = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Éviter les problèmes d'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  const getToolImagePath = (tool) => {
    if (!mounted) {
      // Utiliser une image par défaut pendant l'hydratation
      return tool.imgPath || tool.imgPathLight;
    }
    
    if (tool.imgPathLight && tool.imgPathDark) {
      return theme === "dark" ? tool.imgPathDark : tool.imgPathLight;
    }
    return tool.imgPath;
  };

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl xl:text-4xl font-bold text-center mb-12 xl:mb-16">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row xl:gap-x-16 items-center xl:items-start">
          <div className="hidden xl:flex xl:w-1/2 justify-center mb-12 xl:mb-0">
            <DevImg
              imgSrc="/about/dev.svg"
              containerStyles="h-[350px] w-[400px] bg-no-repeat relative"
              w={350}
              h={340}
            />
          </div>
          <div className="xl:w-1/2">
            <div className="flex-1">
              <Tabs defaultValue="personal">
                <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="qualifications">
                    Qualifications
                  </TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>

                <div className="text-base mt-8 xl:mt-4">
                  <TabsContent value="personal">
                    <div className="text-center xl:text-left">
                      <h3 className="text-2xl font-bold mb-4">
                        Full-Stack Developer & DevOps Enthusiast
                      </h3>
                      <p className="text-lg mb-4 leading-relaxed max-w-xl mx-auto xl:mx-0">
                        I thrive on solving complex problems and continuously
                        learning new technologies to stay ahead in this
                        ever-evolving field. My passion extends beyond web
                        development to{" "}
                        <span className="font-semibold text-primary">
                          system administration
                        </span>{" "}
                        and
                        <span className="font-semibold text-primary">
                          {" "}
                          DevOps culture
                        </span>
                        .
                      </p>
                      {/* <p className="text-sm text-muted-foreground max-w-xl mx-auto xl:mx-0 mb-6">
                        I believe in building not just great applications, but
                        also robust infrastructure and efficient deployment
                        pipelines that enable scalable and reliable software
                        solutions.
                      </p> */}

                      <div className="grid xl:grid-cols-2 gap-4 mb-6">
                        {infoData.map((item, index) => {
                          return (
                            <div
                              className="flex items-center gap-x-4 mx-auto xl:mx-0 "
                              key={index}
                            >
                              <div className="text-primary">{item.icon}</div>
                              <div>{item.text}</div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="text-base font-semibold text-primary">
                          Language Skills
                        </div>
                        <div className="border-b border-border"></div>
                        <div className="text-base">
                          French, English, Mooré (Native Language)
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="qualifications">
                    <div>
                      <h3 className="h3 mb-2 text-center  xl:text-left">
                        My Awesome Journey
                      </h3>
                      <div className="grid md:grid-cols-2 gap-y-8">
                        {/*Experience */}
                        <div className="flex flex-col gap-y-2">
                          <div className=" text-primary items-center flex flex-row text-[22px] gap-x-1">
                            <Briefcase />
                            {getData(qualifications, "Experience").title}
                          </div>

                          <div className=" flex flex-col gap-y-4 ">
                            {getData(qualifications, "Experience").data.map(
                              (item, index) => {
                                const { company, qualification, years } = item;

                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    <div className="h-[84px ] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[83px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className=" font-semibold text-xl leading-none mb-2">
                                        {company}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-2">
                                        {qualification}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>

                        {/**Education */}
                        <div className="flex flex-col gap-y-2">
                          <div className=" text-primary items-center flex flex-row text-[22px] gap-x-1">
                            <GraduationCap size={28} />
                            {getData(qualifications, "Education").title}
                          </div>

                          <div className=" flex flex-col gap-y-4 ">
                            {getData(qualifications, "Education").data.map(
                              (item, index) => {
                                const { university, qualification, years } =
                                  item;

                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    <div className="h-[84px ] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[83px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className=" font-semibold text-xl leading-none mb-2">
                                        {university}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-2">
                                        {qualification}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="skills">
                    <div className="text-center xl:text-left">
                      <h3 className="h3 mb-8">Technical Skills</h3>

                      {/* Skills Categories */}
                      <div className="space-y-8">
                        {getData(skillData, "skills").data.map(
                          (categoryData, categoryIndex) => (
                            <div key={categoryIndex} className="space-y-4">
                              <h4 className="text-xl font-semibold text-primary border-b border-border pb-2">
                                {categoryData.category}
                              </h4>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {categoryData.skills.map(
                                  (skill, skillIndex) => (
                                    <div key={skillIndex} className="space-y-2">
                                      <div className="flex justify-between items-center">
                                        <span className="font-medium text-sm">
                                          {skill.name}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                          {skill.level}%
                                        </span>
                                      </div>
                                      <div className="w-full bg-secondary/30 rounded-full h-1.5">
                                        <div
                                          className="bg-primary h-1.5 rounded-full transition-all duration-1000 ease-out"
                                          style={{ width: `${skill.level}%` }}
                                        ></div>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )
                        )}
                      </div>

                      {/* Tools Section */}
                      <div className="mt-8">
                        <h4 className="text-xl font-semibold mb-6 text-primary">
                          Development Tools
                        </h4>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                          {getData(skillData, "tools").data.map(
                            (item, index) => {
                              const { name, alt } = item;
                              const imgPath = getToolImagePath(item);
                              return (
                                <div
                                  key={index}
                                  className="flex flex-col items-center p-4 bg-white dark:bg-secondary/50 rounded-lg border border-border/20 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                                >
                                  <Image
                                    src={imgPath}
                                    width={48}
                                    height={48}
                                    alt={alt}
                                    priority
                                    className="mb-3 w-12 h-12 object-contain"
                                    style={{ width: 'auto', height: 'auto' }}
                                  />
                                  <span className="text-xs font-medium text-center text-foreground">
                                    {name}
                                  </span>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
