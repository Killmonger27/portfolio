import DevImg from "./DevImg";
import Image from "next/image";

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
        name: "HTML, CSS",
      },
      {
        name: "JavaScript, Java, Python, PHP",
      },
      {
        name: "Frontend Development",
      },
      {
        name: "Backend Developement",
      },
      {
        name: "MERN Stack",
      },
      {
        name: "Next.js, React, Prisma",
      },
      { name: "Spring Boot" },
      {
        name: "Tailwind CSS, shadcn/ui",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
        alt: "Landry Ouarma's Vs code svg",
      },
      {
        imgPath: "/about/postman.svg",
        alt: "Landry Ouarma's Postman svg",
      },
      {
        imgPath: "/about/github.svg",
        alt: "Landry Ouarma's Github svg",
      },
      {
        imgPath: "/about/figma.svg",
        alt: "Landry Ouarma's Figma svg",
      },
      {
        imgPath: "/about/wordpress.svg",
        alt: "Landry Ouarma's Wordpress svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[700px] pb-6 xl:py-6">
      <div className="container mx-auto">
        <h2 className="section-title mb-7 xl:mb-14 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row xl:gap-x-32">
          <div className="hidden xl:flex mt-28 relative">
            <DevImg
              imgSrc="/about/dev.svg"
              containerStyles="h-[400px] w-[500px] bg-no-repeat relative items-center"
              w={380}
              h={390}
            />
          </div>
          <div>
            <div className="flex-1">
              <Tabs defaultValue="personal">
                <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none  ">
                  <TabsTrigger value="personal">Personnal Info</TabsTrigger>
                  <TabsTrigger value="qualifications">
                    Qualifications
                  </TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>

                <div className="text-lg mt-8 xl:mt-4">
                  <TabsContent value="personal">
                    <div className="text-center xl:text-left">
                      <h3 className="h3 mb-4">
                        Passionate and dedicated web developer
                      </h3>
                      <p className="subtitle max-w-xl mx-auto xl:mx-0">
                        I thrive on solving complex problems and continuously
                        learning new technologies to stay ahead in this
                        ever-evolving field.
                      </p>

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
                        <div className="text-primary">Language Skill</div>
                        <div className="border-b border-border"></div>
                        <div>French, English, Moore(mother Language)</div>
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
                      <h3 className="h3 mb-2">What I Use Everyday</h3>

                      <div className=" mb-4">
                        <h4 className="text-xl font-semibold mb-2">Skills</h4>
                        <div className="border-b border-border mb-2"></div>

                        <div>
                          {getData(skillData, "skills").data.map(
                            (item, index) => {
                              const { name } = item;
                              return (
                                <div
                                  className=" w-[2/4] text-center xl:text-left mx-auto xl:mx-0 "
                                  key={index}
                                >
                                  <div className="font-medium">{name}</div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-2 xl:text-left">
                          Tools
                        </h4>
                        <div className="border-b border-border mb-2"></div>
                        <div className="flex gap-x-8 justify-center xl:justify-start">
                          {getData(skillData, "tools").data.map(
                            (item, index) => {
                              const { imgPath, alt } = item;
                              return (
                                <div key={index}>
                                  <Image
                                    src={imgPath}
                                    width={48}
                                    height={48}
                                    alt={alt}
                                    priority
                                  />
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
