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
      title: "DevOps & Cloud Solutions",
      description:
        "Specializing in Azure cloud infrastructure, CI/CD pipelines, and containerized deployments. Expertise in Docker, Kubernetes, and automated monitoring solutions for scalable applications.",
    },
    {
      icon: <Blocks size={72} strokeWidth={0.8} />,
      title: "Full-Stack Development",
      description:
        "Building modern web applications with React, Next.js, and Node.js. Creating responsive, accessible interfaces backed by robust APIs and optimized database architectures.",
    },
    {
      icon: <SearchCheck size={72} strokeWidth={0.8} />,
      title: "System Administration",
      description:
        "Linux server management, network configuration, and security implementation. Passionate about automation, monitoring, and maintaining high-availability enterprise systems.",
    },
  ];

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl xl:text-4xl font-bold text-center mb-12 xl:mb-16">
          Services
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-x-8">
          {services.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[320px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] rounded-[30px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center px-6">
                  <CardTitle className="text-xl font-bold mb-4">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
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
