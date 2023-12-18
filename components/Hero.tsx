"use client"

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link2Icon, DownloadIcon} from "lucide-react";
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Hero = () => {
  const { theme } = useTheme();
  const logoPath = theme === "dark" ? "/logobhw.svg" : "/logobh.svg";
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 gap-6 md:gap-10 rounded-lg py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="flex flex-row md:flex-col p-1 gap-4">
              <a
                href="https://www.linkedin.com/in/bogdan-helerea"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-primary hover:text-primary/10 h-6 w-6" />
              </a>
              <a
                href="https://github.com/bogdan-stack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-primary hover:text-blue-600 h-6 w-6" />
              </a>
            </div>
            <div className="relative text-center md:text-left">
              <div className="absolute inset-4 bg-gradient-to-t from-primary to-primary opacity-20 rounded-full blur-3xl"></div>
              <h1 className="relative text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none  mb-1">
                Hello I'm <span className="text-primary">Bogdan Helerea</span>
              </h1>
              <p className="relative max-w-[600px] font-semibold text-xl md:text-2xl dark:text-zinc-100 mb-4">
                Full Stack Developer
              </p>
              <p className="relative subtitle text-muted-foreground max-w-[490px] mx-auto md:mx-0 mb-6">
                A decade of military leadership shapes my approach to tech.
                Detail-oriented, adaptable, and passionate about dynamic web
                projects. Proven resilience in challenging environments. Explore
                my portfolio and let's build the future together.
              </p>
              <div className=" relative flex justify-center md:justify-start gap-4 mt-4">
              <Button variant="default" className="shadow-xl rounded-md">
                  <DownloadIcon className="h-4 w-4 mr-1" />
                  Download CV
                </Button>
                <Button variant="secondary" className="shadow-xl rounded-md">
                  <Link2Icon className="h-4 w-4 mr-1 fo" />
                  {" "}Let's connect{" "}
                </Button>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-between gap-1">
            <div className="absolute inset-0.5 bg-gradient-to-t from-primary to-primary opacity-60 rounded-full blur-3xl"></div>
            <Image
              className="relative"
              src={logoPath}
              alt="logo"
              width={200}
              height={200}
            />
            <div className="relative flex flex-col items-center justify-center gap-1 text-white">
            </div>
          </div>
          </section>
  );
};

export default Hero;