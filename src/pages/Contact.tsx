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
  HeartHandshake,
  Home,
  Route,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [heroStatsVisible, setHeroStatsVisible] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/company/pekamy-freshminds/",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/pekamy_freshminds?igsh=MWdhaDk0ODlmdWt5eA==",
      color: "hover:text-pink-600"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      url: "https://wa.me/+2348165590372",
      color: "hover:text-green-600"
    },
    {
      name: "Gmail",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:pekamyfreshmindsteam@gmail.com",
      color: "hover:text-red-600"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://www.facebook.com/share/14FUjmxamz7/",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: <TwitterIcon className="w-5 h-5" />,
      url: "https://x.com/pekamyFreshmind?t=rFQ-XrCNrNcH2BseVa4_5g&s=09",
      color: "hover:text-blue-400"
    },
    {
      name: "TikTok",
      icon: <TicketCheckIcon className="w-5 h-5" />,
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

  // Custom hook for counting animation
  const useCountAnimation = (endValue, startCounting) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!startCounting) return;
      
      let startTime = null;
      const duration = 2000; // 2 seconds
      
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(endValue * easeOutCubic));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };
      
      requestAnimationFrame(animate);
    }, [endValue, startCounting]);
    
    return count;
  };

  // Count animations for contact stats
  const contactResponseCount = useCountAnimation(24, heroStatsVisible);
  const contactChannelsCount = useCountAnimation(7, heroStatsVisible);
  const contactSatisfactionCount = useCountAnimation(100, heroStatsVisible);

  useEffect(() => {
    // Intersection Observer for scroll animations and counting triggers
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Trigger counting animations
          if (entry.target.id === 'contact-hero-stats') {
            setHeroStatsVisible(true);
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate, #contact-hero-stats');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen page-enter">
      {/* Header Navigation */}
      <header className="main-header fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
        <div className="header-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="logo-section">
              <h1 className="blog-title text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xs text-muted-foreground">Get in Touch</p>
            </div>

            <nav className="main-nav hidden md:block">
              <ul className="nav-list flex items-baseline space-x-4">
                <li>
                  <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Home className="w-4 h-4 mr-1" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/screening" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Route className="w-4 h-4 mr-1" /> PET Program
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" /> Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Modern Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
        <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-50"></div>
        
        {/* Floating badges */}
        <div className="absolute top-20 left-10 floating-badge hidden lg:block">
          <div className="glass-effect bg-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
            <Sparkles className="w-4 h-4 mr-2" />
            Let's Connect
          </div>
        </div>
        <div className="absolute top-32 right-16 floating-badge hidden lg:block" style={{ animationDelay: '1s' }}>
          <div className="glass-effect bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            24/7 Support
          </div>
        </div>
        <div className="absolute bottom-32 left-16 floating-badge hidden lg:block" style={{ animationDelay: '2s' }}>
          <div className="glass-effect bg-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Global Team
          </div>
        </div>
        <div className="absolute bottom-40 right-10 floating-badge hidden lg:block" style={{ animationDelay: '2.5s' }}>
          <div className="glass-effect bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            Quick Response
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div className="hero-reveal">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center text-primary-foreground shadow-lg floating-badge">
                <HeartHandshake className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
            </div>
            <h1 className="display-text text-gradient mb-6">
              CONTACT
            </h1>
          </div>
          
          <div className="hero-reveal hero-reveal-delay-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span> Together
            </h2>
          </div>
          
          <div className="hero-reveal hero-reveal-delay-2">
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 px-4">
              Ready to transform your career or find exceptional talent? We're here to help you succeed.
            </p>
          </div>

          {/* Contact Stats - Mobile Optimized */}
          <div id="contact-hero-stats" className="hero-reveal hero-reveal-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto py-8 px-4">
            <div className="text-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">{contactResponseCount}hr</span>
              <span className="block text-sm text-muted-foreground">Response Time</span>
            </div>
            <div className="text-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">{contactChannelsCount}+</span>
              <span className="block text-sm text-muted-foreground">Contact Channels</span>
            </div>
            <div className="text-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">{contactSatisfactionCount}%</span>
              <span className="block text-sm text-muted-foreground">Satisfaction Rate</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section - Mobile Optimized */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Contact Form - Mobile First */}
            <div className="scroll-animate w-full">
              <Card className="modern-card w-full">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-gradient mb-4">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="w-full">
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
                        className="mt-1 glass-effect border-primary/20 w-full"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="w-full">
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
                        className="mt-1 glass-effect border-primary/20 w-full"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div className="w-full">
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
                        className="mt-1 glass-effect border-primary/20 w-full"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div className="w-full">
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
                        className="mt-1 glass-effect border-primary/20 w-full resize-none"
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

            {/* Contact Information - Mobile Optimized */}
            <div className="space-y-6 sm:space-y-8 w-full">
              
              {/* Contact Details - Mobile First */}
              <div className="scroll-animate w-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-6 sm:mb-8 px-2">
                  Get in Touch
                </h3>
                <div className="space-y-4 sm:space-y-6 w-full">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="modern-card hover:scale-105 transition-transform duration-300 w-full">
                      <CardContent className="p-4 sm:p-6">
                        <a
                          href={info.link}
                          className="flex items-center space-x-3 sm:space-x-4 text-foreground hover:text-primary transition-colors w-full"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                            {info.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold">{info.title}</h4>
                            <p className="text-muted-foreground break-words">{info.detail}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media - Mobile Grid Fix */}
              <div className="scroll-animate w-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-6 sm:mb-8 px-2">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="modern-card hover:scale-105 transition-transform duration-300 w-full">
                      <CardContent className="p-3 sm:p-4">
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col items-center space-y-2 text-foreground ${social.color} transition-colors w-full`}
                        >
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-primary-foreground">
                            {social.icon}
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-center break-words">{social.name}</span>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Office Hours - Mobile Optimized */}
              <div className="scroll-animate w-full">
                <Card className="modern-card bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 w-full">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-4">
                      Office Hours
                    </h3>
                    <div className="space-y-3 text-foreground">
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base">Monday - Friday:</span>
                        <span className="font-medium text-sm sm:text-base">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base">Saturday:</span>
                        <span className="font-medium text-sm sm:text-base">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base">Sunday:</span>
                        <span className="font-medium text-sm sm:text-base">Closed</span>
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center scroll-animate">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-6 sm:mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed px-4">
            Whether you're a fresh graduate looking to kickstart your career or a company seeking exceptional talent, we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button size="lg" className="btn-modern px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              Join Our Program
            </Button>
            <Button variant="outline" size="lg" className="glass-effect border-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* CSS Styles */}
      <style>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        
        .scroll-animate.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-reveal {
          opacity: 0;
          transform: translateY(50px);
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .hero-reveal-delay-1 {
          animation-delay: 0.3s;
        }
        
        .hero-reveal-delay-2 {
          animation-delay: 0.6s;
        }
        
        .hero-reveal-delay-3 {
          animation-delay: 0.9s;
        }
        
        .floating-badge {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .page-enter {
          animation: pageEnter 0.8s ease-out forwards;
        }
        
        @keyframes pageEnter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .modern-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .modern-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .btn-modern {
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)));
          color: hsl(var(--primary-foreground));
          border: none;
          transition: all 0.3s ease;
        }
        
        .btn-modern:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .display-text {
          font-size: clamp(3rem, 8vw, 8rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 0.9;
        }
        
        /* Ensure no horizontal overflow */
        * {
          box-sizing: border-box;
        }
        
        .container {
          max-width: 100%;
          margin: 0 auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        @media (min-width: 640px) {
          .container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Contact;