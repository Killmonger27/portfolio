import { Gem, GanttChartSquare, Blocks, SearchCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
      title: "Web Design",
      description:
        "Creating elegant, intuitive, and responsive web designs that offer an optimal user experience. From mockup creation to final implementation, each step is performed with attention to detail.",
    },
    {
      icon: <Blocks size={72} strokeWidth={0.8} />,
      title: "Web Development",
      description:
        "Developing high-performance, secure websites using modern technologies. From front-end to back-end, each site is designed to meet specific client needs while ensuring scalability.",
    },
    {
      icon: <SearchCheck size={72} strokeWidth={0.8} />,
      title: "SEO and Optimization",
      description:
        "Optimizing websites to improve their visibility on search engines. Services include SEO audits, content optimization, link building, and performance improvements to ensure better rankings and increased traffic.",
    },
  ];

  return (
    <section className="pb-12 xl:py-10">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-16 text-center mx-auto">
          Services
        </h2>
        <div className="grid xl:grid-cols-3  justify-center gap-y-12 xl:gap-x-8 ">
          {services.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] rounded-[30px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center ">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
