"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  CheckCircle,
  Send,
} from "lucide-react";

const Cta = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              <span>Ready to Start?</span>
              <span className="w-[30px] h-[2px] bg-primary"></span>
            </div>
            <h2 className="h2 mb-4">Let's Build Something Amazing Together</h2>
            <p className="subtitle max-w-[600px] mx-auto mb-8">
              Have a project in mind? I'm here to help bring your ideas to life.
              Drop me a quick message below or visit my detailed contact page.
            </p>
          </div>

          {/* Quick Contact Form */}
          <div className="w-full max-w-[600px] mb-8 bg-white dark:bg-secondary/80 p-8 rounded-2xl shadow-lg border border-border">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative flex items-center">
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="pl-4 pr-12 bg-background border-border focus:border-primary"
                      required
                    />
                    <User
                      className="absolute right-4 text-muted-foreground"
                      size={20}
                    />
                  </div>
                  <div className="relative flex items-center">
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="pl-4 pr-12 bg-background border-border focus:border-primary"
                      required
                    />
                    <MailIcon
                      className="absolute right-4 text-muted-foreground"
                      size={20}
                    />
                  </div>
                </div>
                <div className="relative flex items-center">
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    className="pl-4 pr-12 min-h-[100px] bg-background border-border focus:border-primary"
                    required
                  />
                  <MessageSquare
                    className="absolute top-4 right-4 text-muted-foreground"
                    size={20}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center gap-x-2 min-w-[160px] bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                  <span className="text-muted-foreground">or</span>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="flex items-center gap-x-2 border-border hover:bg-accent"
                    >
                      Full Contact Page
                      <ArrowRightIcon size={18} />
                    </Button>
                  </Link>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="h3 mb-2 text-green-600">
                  Message Sent Successfully!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. I'll get back to you within 24
                  hours.
                </p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-border hover:bg-accent"
                  >
                    Visit Contact Page
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
