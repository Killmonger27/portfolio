"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  Calendar,
  Briefcase,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    budget: "",
    timeline: "",
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
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Contact form submitted:", formData);
    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <section className="py-12 xl:py-16">
      <div className="container mx-auto">
        {/* Text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="text-4xl xl:text-6xl font-bold max-w-md mb-8">
              Let's Work Together.
            </h1>
            <p className="text-lg text-muted-foreground max-w-[400px]">
              Ready to bring your digital vision to life? I'm here to help you
              create amazing web experiences. Let's discuss your project and
              make it happen!
            </p>
          </div>
          {/* Illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        {/* Contact Info & Form */}
        <div className="grid xl:grid-cols-2 gap-x-12 mb-24 xl:mb-32">
          {/* Contact Info */}
          <div className="flex flex-col gap-y-8 mb-12 xl:mb-0">
            <div>
              <h3 className="h3 mb-6">Get In Touch</h3>
              <div className="flex flex-col gap-y-6 text-base xl:text-lg">
                {/* Mail */}
                <div className="flex items-center gap-x-4 p-4 bg-white dark:bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MailIcon size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">
                      landryouarma45@gmail.com
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-x-4 p-4 bg-white dark:bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+226 07399750</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-x-4 p-4 bg-white dark:bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">
                      Rimkieta sect 14, Ouagadougou, Burkina Faso
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center gap-x-4 p-4 bg-white dark:bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div className="text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Form */}
          <div className="bg-white dark:bg-secondary p-8 rounded-2xl">
            <h3 className="h3 mb-6">Project Details</h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative flex items-center">
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="pl-4 pr-12"
                      required
                    />
                    <User
                      className="absolute right-4 text-muted-foreground"
                      size={18}
                    />
                  </div>
                  <div className="relative flex items-center">
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="pl-4 pr-12"
                      required
                    />
                    <MailIcon
                      className="absolute right-4 text-muted-foreground"
                      size={18}
                    />
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative flex items-center">
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number (Optional)"
                      className="pl-4 pr-12"
                    />
                    <Phone
                      className="absolute right-4 text-muted-foreground"
                      size={18}
                    />
                  </div>
                  <div className="relative flex items-center">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Select Project Type</option>
                      <option value="web-development">Web Development</option>
                      <option value="web-design">Web Design</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="backend-api">Backend/API</option>
                      <option value="full-stack">Full Stack Application</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                    <Briefcase
                      className="absolute right-4 text-muted-foreground pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative flex items-center">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Budget Range (Optional)</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="over-10000">Over $10,000</option>
                      <option value="discuss">Let's Discuss</option>
                    </select>
                  </div>
                  <div className="relative flex items-center">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Project Timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-weeks">1-2 Weeks</option>
                      <option value="1-month">1 Month</option>
                      <option value="2-3-months">2-3 Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    <Calendar
                      className="absolute right-4 text-muted-foreground pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative flex items-center">
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project in detail..."
                    className="pl-4 pr-12 min-h-[120px]"
                    required
                  />
                  <MessageSquare
                    className="absolute top-4 right-4 text-muted-foreground"
                    size={18}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center gap-x-2 w-full"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="h3 mb-3 text-green-600">
                  Message Sent Successfully!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Thank you for providing detailed information about your
                  project. I'll review everything and get back to you within 24
                  hours with next steps.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    📧 Confirmation email sent to {formData.email}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
