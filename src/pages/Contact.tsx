import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Footer from "@/components/Footer";
import { 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  Send,
  Facebook,
  TwitterIcon,
  TicketCheckIcon,
  Sparkles,
  Users,
  HeartHandshake
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/company/pekamy-freshminds/",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/pekamy_freshminds?igsh=MWdhaDk0ODlmdWt5eA==",
      color: "hover:text-pink-600"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://wa.me/+2348165590372",
      color: "hover:text-green-600"
    },
    {
      name: "Gmail",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:pekamyfreshmindsteam@gmail.com",
      color: "hover:text-red-600"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://www.facebook.com/share/14FUjmxamz7/",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: <TwitterIcon className="w-6 h-6" />,
      url: "https://x.com/pekamyFreshmind?t=rFQ-XrCNrNcH2BseVa4_5g&s=09",
      color: "hover:text-blue-400"
    },
    {
      name: "TikTok",
      icon: <TicketCheckIcon className="w-6 h-6" />,
      url: "https://www.tiktok.com/@pekamyfresh.mind?_t=ZS-8yY5vad2haE&_r=1",
      color: "hover:text-black"
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      detail: "+234 816 559 0372",
      link: "tel:+234 816 559 0372"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      detail: "pekamyfreshmindsteam@gmail.com",
      link: "mailto:pekamyfreshmindsteam@gmail.com"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen page-enter">
      {/* Modern Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
        <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-50"></div>
        
        {/* Floating badges */}
        <div className="absolute top-20 left-10 floating-badge hidden lg:block">
          <div className="glass-effect bg-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            Let's Connect
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="hero-reveal">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center text-primary-foreground shadow-lg floating-badge">
                <HeartHandshake className="w-12 h-12" />
              </div>
            </div>
            <h1 className="display-text text-gradient mb-6">
              CONTACT
            </h1>
          </div>
          
          <div className="hero-reveal hero-reveal-delay-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span> Together
            </h2>
          </div>
          
          <div className="hero-reveal hero-reveal-delay-2">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to transform your career or find exceptional talent? We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="scroll-animate">
              <Card className="modern-card">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gradient mb-4">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 glass-effect border-primary/20"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 glass-effect border-primary/20"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1 glass-effect border-primary/20"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1 glass-effect border-primary/20"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full btn-modern">
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <div className="scroll-animate">
                <h3 className="text-3xl font-bold text-gradient mb-8">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="modern-card hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-6">
                        <a
                          href={info.link}
                          className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-primary-foreground">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold">{info.title}</h4>
                            <p className="text-muted-foreground">{info.detail}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="scroll-animate">
                <h3 className="text-3xl font-bold text-gradient mb-8">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="modern-card hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-4">
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col items-center space-y-2 text-foreground ${social.color} transition-colors`}
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-primary-foreground">
                            {social.icon}
                          </div>
                          <span className="text-sm font-medium">{social.name}</span>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="scroll-animate">
                <Card className="modern-card bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gradient mb-4">
                      Office Hours
                    </h3>
                    <div className="space-y-3 text-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="text-sm text-muted-foreground">
                        <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours during business days.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center scroll-animate">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Whether you're a fresh graduate looking to kickstart your career or a company seeking exceptional talent, we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-modern px-8 py-4 text-lg">
              Join Our Program
            </Button>
            <Button variant="outline" size="lg" className="glass-effect border-2 px-8 py-4 text-lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;