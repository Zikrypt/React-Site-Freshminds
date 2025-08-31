import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Briefcase, Target, ArrowUp, Sparkles, Zap, Shield, Award, CheckCircle, Star, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pekamy Freshminds Network",
      description: "Connect with top-tier professionals who align with your company culture and requirements through our exclusive talent network.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Industry Expertise",
      description: "Deep knowledge across multiple sectors to find the perfect fit for specialized roles with proven track record.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Screening",
      description: "Advanced screening processes and AI-powered matching ensure only the most qualified candidates reach you.",
      color: "from-pink-500 to-red-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "TechCorp Nigeria",
      content: "Pekamy Freshminds transformed our hiring process. We found incredible talent that we wouldn't have discovered otherwise.",
      rating: 5
    },
    {
      name: "Michael Adebayo",
      role: "Recent Graduate",
      company: "Now at FinanceHub",
      content: "The PET program gave me real-world experience and confidence. I landed my dream job within weeks of completion.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Startup Founder",
      company: "InnovateNG",
      content: "The quality of candidates from Pekamy is exceptional. They come prepared, skilled, and ready to contribute.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Students Empowered", icon: <Users className="w-6 h-6" /> },
    { number: "150+", label: "Partner Companies", icon: <Briefcase className="w-6 h-6" /> },
    { number: "1000+", label: "Success Stories", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="w-6 h-6" /> }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative page-transition">
      {/* Hero Section with proper spacing */}
      <section id="home" className="relative pt-28 pb-20 px-4 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="container mx-auto text-center relative z-10 fade-in-section">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center text-white animate-float shadow-glow">
                <Sparkles className="w-12 h-12" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
            <span className="block text-foreground">Pekamy Freshminds</span>
            <span className="block modern-text text-5xl md:text-6xl mt-2">
              Your Next Chapter Starts Here
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Unleashing Potential, Creating Impact. Where ambition meets possibility in the modern workplace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Link to="/contact">
              <Button size="lg" className="btn-primary-2025 px-8 py-4 text-lg hover-glow">
                Start Your Journey
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
            <Link to="/screening">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
                Explore PET Program
                <Zap className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-slide-up" style={{animationDelay: '0.6s'}}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-morph"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-primary rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-primary rounded-full opacity-5 animate-float" style={{animationDelay: '4s'}}></div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white/90 backdrop-blur-sm fade-in-section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-white">
                  <Globe className="w-5 h-5" />
                </div>
                <Badge className="bg-primary/10 text-primary">About Pekamy</Badge>
              </div>
              
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Bridging the Gap Between 
                <span className="modern-text block">Talent & Opportunity</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                At Pekamy Freshminds, we connect skilled interns, NYSC members, students, graduates, and freshers with forward-thinking companies ready to grow.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: <CheckCircle className="w-5 h-5 text-green-500" />, text: "Paid Internship Placements" },
                  { icon: <CheckCircle className="w-5 h-5 text-green-500" />, text: "Mentorship & Professional Feedback" },
                  { icon: <CheckCircle className="w-5 h-5 text-green-500" />, text: "Admin Support to Protect Your Interests" },
                  { icon: <CheckCircle className="w-5 h-5 text-green-500" />, text: "Career Development & Growth Tracking" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-300">
                    {item.icon}
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20">
                <p className="text-lg italic text-foreground leading-relaxed">
                  "PFM is a growing community built to unlock career opportunities for individuals at every stage of their journey. Whether you're just starting out, looking to gain experience, or seeking to showcase your skills, Pekamy Freshminds bridges the gap between talent and opportunity."
                </p>
              </div>
            </div>
            
            <div className="flex justify-center animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center shadow-floating hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <img src="/images/logo.png.jpg" alt="Pekamy Logo" className="w-80 h-80 object-contain" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center text-white animate-glow-pulse">
                  <Award className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white animate-float">
                  <TrendingUp className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10 fade-in-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white animate-glow-pulse">
                <Shield className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-6">Why Choose Pekamy Freshminds?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're the bridge between emerging talent and forward-thinking companies, focusing on empowering individuals by connecting them to real opportunities where their abilities can shine.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 animate-stagger">
            {features.map((feature, index) => (
              <Card key={index} className="group hover-lift bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-glass opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white/90 backdrop-blur-sm fade-in-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-6">
              How It <span className="modern-text">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Pekamy Freshminds, we bridge the gap between talent and opportunity through a structured, hands-on process designed for the modern workplace.
            </p>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto animate-stagger">
            {[
              { 
                step: 1, 
                title: "Submit Your Details", 
                desc: "Talents send their full names, skillsets, job interests, location, and contact information through our streamlined application process.",
                icon: <Users className="w-6 h-6" />
              },
              { 
                step: 2, 
                title: "Screening & Talent Webinars", 
                desc: "We organize mandatory webinars to guide talents on expectations, how to stand out, and how the Pekamy Entry Track (PET) works.",
                icon: <Target className="w-6 h-6" />
              },
              { 
                step: 3, 
                title: "PET Programs", 
                desc: "A structured onboarding phase where top-tier candidates are fast-tracked (minimum 3 months), while others continue based on performance and learning pace.",
                icon: <Zap className="w-6 h-6" />
              },
              { 
                step: 4, 
                title: "Screening & Evaluation", 
                desc: "Candidates are assessed for skills, communication, and work-readiness through practical tasks and guided mentorship sessions.",
                icon: <Shield className="w-6 h-6" />
              },
              { 
                step: 5, 
                title: "Opportunity Matching", 
                desc: "After evaluation, successful talents are matched with internships, freelance projects, or full-time job placements that align with their skills.",
                icon: <Award className="w-6 h-6" />
              }
            ].map((item, index) => (
              <Card key={index} className="group hover-lift bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glass opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        {item.step}
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-slide-up">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-3xl border border-primary/20 backdrop-blur-sm">
              <p className="text-2xl italic font-medium modern-text leading-relaxed">
                "No matter your level, Pekamy helps you grow and get closer to real-world experience in tech, business and beyond"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5 fade-in-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-6">Our <span className="modern-text">Purpose</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Driven by a clear vision and unwavering mission to transform the future of work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 animate-stagger">
            <Card className="hover-lift bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 p-8 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the most trusted bridge between job-ready youth and organizations, creating a future where no skilled person is unemployed, and no growing business is under-resourced.
                </p>
              </div>
            </Card>
            
            <Card className="hover-lift bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 p-8 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create real, accessible work opportunities that support personal growth, practical experience, and organizational success in the digital age.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white/90 backdrop-blur-sm fade-in-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-6">What People Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people who transformed their careers with Pekamy Freshminds.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="hover-lift bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="text-center animate-scale-in" key={currentTestimonial}>
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                
                <blockquote className="text-2xl italic text-foreground mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-lg text-primary">{testimonials[currentTestimonial].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary scale-125' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50 fade-in-section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                  <Shield className="w-5 h-5" />
                </div>
                <Badge className="bg-green-100 text-green-800">Government Approved</Badge>
              </div>
              
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Officially Recognized by the
                <span className="modern-text block">Federal Government of Nigeria</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We are proud to be a government-approved platform, recognized for our commitment to excellence, transparency, and national development. Our operations are fully aligned with federal regulations and national standards.
              </p>
              
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="font-semibold">Certified & Trusted Platform</span>
              </div>
            </div>
            
            <div className="flex justify-center animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <div className="w-80 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl flex items-center justify-center shadow-floating hover:shadow-glow transition-all duration-500 hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-glass"></div>
                  <img src="/images/verified.jpg.jpg" alt="Government Verification" className="w-64 h-48 object-contain relative z-10" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center text-white animate-glow-pulse">
                  <CheckCircle className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10 fade-in-section">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-6">Frequently Asked <span className="modern-text">Questions</span></h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our process and services.
            </p>
          </div>
          
          <Card className="hover-lift bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 p-8 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-glass opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <details className="group/details">
                <summary className="cursor-pointer text-xl font-bold text-foreground flex justify-between items-center py-6 hover:text-primary transition-colors duration-300 list-none">
                  <span>How does Pekamy Freshminds uniquely contribute to solving the problem of skilled yet inexperienced individuals struggling to find real opportunities?</span>
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-open/details:rotate-45 transition-transform duration-300">
                    <span className="text-2xl font-bold">+</span>
                  </div>
                </summary>
                <div className="mt-6 pt-6 border-t border-border/50 animate-slide-up">
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-2xl border border-primary/20">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      At Pekamy Freshminds, we believe that while it often takes a group to identify a problem, it takes a bold, committed mind to take action. We've taken that step by creating structured systems aimed at closing the gap between being skilled and being experienced. Our programs offer practical pathways for growth, and we invite you to join the mission. Together, let's become part of a movement that transforms potential into real-world impact.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden fade-in-section">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-glow-pulse">
              <Sparkles className="w-10 h-10" />
            </div>
            
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
              Join hundreds of companies and thousands of talents who trust Pekamy Freshminds to unlock their potential and drive success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to="/screening">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
                >
                  Learn About PET
                  <Target className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8" />
            </div>
            <p className="text-lg opacity-90">Pekamy Freshminds</p>
          </div>
          <p className="opacity-75">&copy; 2025 Pekamy Freshminds. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="floating-action group"
        >
          <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}

      <style>{`
        .animate-stagger > * {
          opacity: 0;
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-stagger > *:nth-child(1) { animation-delay: 0.1s; }
        .animate-stagger > *:nth-child(2) { animation-delay: 0.3s; }
        .animate-stagger > *:nth-child(3) { animation-delay: 0.5s; }
        .animate-stagger > *:nth-child(4) { animation-delay: 0.7s; }
        .animate-stagger > *:nth-child(5) { animation-delay: 0.9s; }

        .testimonial-transition {
          animation: scale-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes hero-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }

        .hero-element {
          animation: hero-float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;