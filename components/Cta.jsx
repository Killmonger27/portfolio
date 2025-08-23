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
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Prepare data for the API (add empty fields for compatibility)
      const emailData = {
        ...formData,
        phone: "",
        subject: "Quick Contact from Homepage",
        budget: "",
        timeline: "",
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 5000);
      } else {
        setError(result.error || 'An error occurred while sending your message.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
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
                
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
                    <p className="text-sm">{error}</p>
                  </div>
                )}

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
                <h3 className="text-2xl font-bold mb-2 text-green-600">
                  Message Sent Successfully!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Thank you for reaching out! I've received your message and will get back to you within 24 hours.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  You should also receive a confirmation email shortly.
                </p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-border hover:bg-accent"
                  >
                    Visit Full Contact Page
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
