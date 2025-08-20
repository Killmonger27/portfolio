import React from "react";
import Social from "./Social";
import Link from "next/link";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-secondary border-t border-border/40">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Kill_m0nger27
            </h3>
            <p className="text-muted-foreground text-sm max-w-[250px] mx-auto md:mx-0">
              Full-Stack Developer & DevOps Enthusiast passionate about creating
              innovative web solutions and robust infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="mb-4">
              <Social
                containerStyles="flex gap-x-4 justify-center md:justify-end"
                iconsStyles="text-muted-foreground text-[20px] hover:text-primary transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              landryouarma45@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Landry Ouarma. All rights reserved.
              </p>
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Designed & Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using</span>
              <Code className="w-4 h-4 text-primary" />
              <span>Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
