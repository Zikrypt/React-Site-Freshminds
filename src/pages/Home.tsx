import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Briefcase, Target, ArrowUp, Sparkles, Zap, Shield, Award, CheckCircle, Star, Globe, TrendingUp, MessageSquare, Camera, Megaphone, BarChart3, UserPlus, ChevronLeft, ChevronRight, Info, Route, Mail, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer"; // Import the Footer component

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [heroStatsVisible, setHeroStatsVisible] = useState(false);

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

  const digitalServices = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Comprehensive handling of all your marketing communications across Instagram, Facebook, LinkedIn, TikTok, and X (Twitter).",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Content Creation & Curation",
      description: "Professional graphics and videos designed to drive engagement and attract customers to your business.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Sponsored Ads Management",
      description: "Strategic ad campaigns within your budget for maximum brand visibility, awareness, and customer acquisition.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Relationship Management",
      description: "Professional response handling to ensure smooth relationships with both existing and new customers.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Digital Lead Generation",
      description: "Strategic social media lead generation techniques to bring qualified prospects directly to your business.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Growth Tracking",
      description: "Comprehensive reporting and analytics to measure performance and optimize your digital marketing strategy.",
      color: "from-pink-500 to-rose-500"
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

  // Added from HTML: How it Works steps
  const howItWorks = [
    {
      step: "1",
      title: "Submit Your Details",
      description: "Talents send their full names, skillsets, Job interest, location, and phone number.",
      icon: <UserPlus className="w-6 h-6" />
    },
    {
      step: "2",
      title: "Screening & Talent Webinars",
      description: "We organize mandatory webinars to guide talents on what to expect, how to stand out, and how the Pekamy Entry Track (PET) works.",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "3",
      title: "PET Programs",
      description: "A structured onboarding phase where top-tier candidates are fast-tracked (minimum of 3 months), while intermediate candidates continue longer based on performance and learning pace.",
      icon: <Route className="w-6 h-6" />
    },
    {
      step: "4",
      title: "Screening & Evaluation",
      description: "Candidates are assessed for skills, communication, and work-readiness through tasks and guided mentorship.",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "5",
      title: "Pairing with Opportunities",
      description: "After evaluation, successful talents are matched with internships, freelance gigs, or job placements.",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  // Added from HTML: Key benefits
  const keyBenefits = [
    {
      title: "Paid Internships Placements",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: "Mentorship & Feedback", 
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Admin Support to protect your interest",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // Count animations for hero stats
  const studentsCount = useCountAnimation(500, heroStatsVisible);
  const companiesCount = useCountAnimation(150, heroStatsVisible);
  const storiesCount = useCountAnimation(1000, heroStatsVisible);

  useEffect(() => {
    // Start counting animation immediately when page loads
    setHeroStatsVisible(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Add scroll animation observer for regular elements
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('in-view');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceSlide((prev) => (prev + 1) % Math.ceil(digitalServices.length / 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative page-enter overflow-hidden">
      {/* Header Navigation - Updated with HTML content */}
      <header className="main-header fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="header-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="logo-section">
              <h1 className="blog-title text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pekamy Freshminds
              </h1>
              <p className="blog-subtitle text-xs text-muted-foreground">Your Next Chapter Starts Here</p>
            </div>
            
            <nav className="main-nav hidden md:block">
              <ul className="nav-list flex items-baseline space-x-4">
                <li>
                  <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Info className="w-4 h-4 mr-1" /> About
                  </a>
                </li>
                <li>
                  <Link to="/pet" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Route className="w-4 h-4 mr-1" /> Pekamy Entry Track
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Mail className="w-4 h-4 mr-1" /> Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" /> Our Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Updated with HTML content - Fixed mobile padding */}
      <section id="home" className="hero-section relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-50"></div>
        
        {/* Floating Badges */}
        <div className="absolute top-20 left-10 floating-badge hidden lg:block">
          <Badge className="glass-effect text-primary-foreground bg-primary/80 px-4 py-2 text-sm font-medium">
            Fresh Minds
          </Badge>
        </div>
        <div className="absolute top-32 right-16 floating-badge hidden lg:block" style={{ animationDelay: '1s' }}>
          <Badge className="glass-effect text-secondary-foreground bg-secondary/80 px-4 py-2 text-sm font-medium">
            500+ Graduates
          </Badge>
        </div>
        <div className="absolute bottom-32 left-16 floating-badge hidden lg:block" style={{ animationDelay: '2s' }}>
          <Badge className="glass-effect text-primary-foreground bg-primary/80 px-4 py-2 text-sm font-medium">
            98% Success Rate
          </Badge>
        </div>
        
        <div className="hero-content relative z-10 text-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="hero-reveal">
              <h1 className="display-text text-gradient text-center">
                PEKAMY
              </h1>
            </div>
            
            <div className="hero-reveal hero-reveal-delay-1">
              <h2 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Unleashing Potential, Creating Impact
              </h2>
            </div>
            
            <div className="hero-reveal hero-reveal-delay-2">
              <p className="hero-description text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Pekamy Freshminds, where ambition meets possibility.
              </p>
            </div>

            {/* Hero Stats - Added from HTML with counting animation */}
            <div className="hero-stats hero-reveal hero-reveal-delay-3 grid grid-cols-3 gap-8 max-w-2xl mx-auto py-8">
              <div className="stat-item text-center">
                <span className="stat-number text-3xl sm:text-4xl font-bold text-gradient">{studentsCount}+</span>
                <span className="stat-label block text-sm text-muted-foreground">Students Empowered</span>
              </div>
              <div className="stat-item text-center">
                <span className="stat-number text-3xl sm:text-4xl font-bold text-gradient">{companiesCount}+</span>
                <span className="stat-label block text-sm text-muted-foreground">Partner Companies</span>
              </div>
              <div className="stat-item text-center">
                <span className="stat-number text-3xl sm:text-4xl font-bold text-gradient">{storiesCount}+</span>
                <span className="stat-label block text-sm text-muted-foreground">Success Stories</span>
              </div>
            </div>
            
            <div className="hero-reveal hero-reveal-delay-3 flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="btn-modern px-8 py-4 text-lg font-semibold rounded-xl"
                asChild
              >
                <Link to="/screening">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass-effect border-2 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-primary/10"
                asChild
              >
                <Link to="/contact">
                  Partner With Us
                </Link>
              </Button>
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

      {/* About Section - Enhanced with HTML content */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              About Us
            </h2>
          </div>

          <article className="scroll-animate">
            <div className="float-container grid lg:grid-cols-2 gap-16 items-center mb-16">
              <figure className="float-img">
                <div className="w-full h-80 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/logo.png.jpg" 
                    alt="Pekamy Logo" 
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    style={{filter: 'drop-shadow(0 10px 30px rgba(154, 78, 174, 0.3))'}}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-24 h-24 text-primary mx-auto mb-4" />
                      <p className="text-primary font-semibold">Pekamy Logo</p>
                    </div>
                  </div>
                </div>
              </figure>
              <div className="float-text space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  At Pekamy Freshminds, we connect skilled interns, NYSC members, students, graduates, and freshers with real companies looking for support with forward thinking companies ready to grow
                </h3>
                <ul className="space-y-4">
                  {keyBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <strong className="text-foreground">{benefit.title}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
          
          <article className="scroll-animate">
            <div className="float-container grid lg:grid-cols-2 gap-16 items-center">
              <figure className="float-img">
                <div className="w-full h-80 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/community.jpg" 
                    alt="We are here for you" 
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    style={{filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 8px 25px rgba(154, 78, 174, 0.25))'}}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Briefcase className="w-24 h-24 text-secondary mx-auto mb-4" />
                      <p className="text-secondary font-semibold">We are here for you</p>
                    </div>
                  </div>
                </div>
              </figure>
              <div className="float-text">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  PFM is a growing community built to unlock career opportunities for individuals at every stage of their journey. Whether you're just starting out, looking to gain experience, or seeking to showcase your skills, <strong>Pekamy Freshminds</strong> bridges the gap between talent and opportunity.
                </h3>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Image Scroll Section - Added from HTML */}
      <section className="image-scroll-section py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="image-card group">
            <Link to="/blog" className="block">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/freshminds.jpg" 
                    alt="Empowering Fresh Minds" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                  <div className="hidden w-full h-64 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
                <div className="image-overlay absolute inset-0 bg-black/50 flex items-end p-6">
                  <div className="text-white font-semibold">Empowering Fresh Minds</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="image-card group">
            <a href="#cert-section" className="block">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/verified.jpg" 
                    alt="Officially Recognized by the Federal Government of Nigeria" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{filter: 'brightness(1.05) saturate(1.1) drop-shadow(0 8px 25px rgba(154, 78, 174, 0.2))'}}
                  />
                  <div className="hidden w-full h-64 bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center">
                    <Shield className="w-16 h-16 text-green-600" />
                  </div>
                </div>
                <div className="image-overlay absolute inset-0 bg-black/50 flex items-end p-6">
                  <div className="text-white font-semibold">Officially Recognized by the Federal Government of Nigeria</div>
                </div>
              </div>
            </a>
          </div>

          <div className="image-card group">
            <Link to="/screening" className="block">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/future.jpg" 
                    alt="The Future Begins Here" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                  <div className="hidden w-full h-64 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                    <Target className="w-16 h-16 text-purple-600" />
                  </div>
                </div>
                <div className="image-overlay absolute inset-0 bg-black/50 flex items-end p-6">
                  <div className="text-white font-semibold">The Future Begins Here</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Section - Added from HTML */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <article className="content-2 text-center mb-16 scroll-animate">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">How it Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Pekamy Freshminds, we bridge the gap between talents and opportunity through a structured, hands-on process.
            </p>
          </article>

          <div className="space-y-12">
            {howItWorks.map((step, index) => (
              <div key={index} className="scroll-animate flex items-center" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center w-full gap-8`}>
                  <div className="flex-1">
                    <Card className="modern-card bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
                            {step.step}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:block">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 scroll-animate">
            <p className="text-xl font-semibold text-muted-foreground italic">
              <strong><em>"No matter your level, Pekamy helps you grow and get closer to real-world experience in tech, business and beyond"</em></strong>
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Added from HTML */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <article className="scroll-animate">
            <div className="float-container grid lg:grid-cols-2 gap-12">
              <Card className="modern-card bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-primary mr-4" />
                    <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most trusted bridge between job ready youths and organizations, creating a future where no skilled person is unemployed, and no growing business is under-resourced.
                  </p>
                </CardContent>
              </Card>

              <Card className="modern-card bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Briefcase className="w-8 h-8 text-secondary mr-4" />
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To Create real, accessible work opportunities that support personal growth, practical experience and organizational success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </article>
        </div>
      </section>

      {/* Features Section with Modern Cards */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for modern workforce challenges
            </p>
          </div>

          <div className="modern-grid">
            {features.map((feature, index) => (
              <Card key={index} className="modern-card scroll-animate h-full" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 text-primary-foreground">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{feature.description}</p>
                  <Button variant="ghost" className="mt-6 p-0 h-auto font-semibold text-primary hover:text-primary/80">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services Slider */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              Digital Marketing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete digital marketing solutions for your business growth
            </p>
          </div>

          <div className="modern-slider relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(digitalServices.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full">
                    <div className="grid md:grid-cols-3 gap-8">
                      {digitalServices.slice(slideIndex * 3, slideIndex * 3 + 3).map((service, index) => (
                        <Card key={index} className="modern-card slider-item">
                          <CardContent className="p-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 text-primary-foreground">
                              {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentServiceSlide(prev => prev === 0 ? Math.ceil(digitalServices.length / 3) - 1 : prev - 1)}
                className="glass-effect"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentServiceSlide(prev => (prev + 1) % Math.ceil(digitalServices.length / 3))}
                className="glass-effect"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Government Certification Section - Added from HTML */}
      <article id="cert-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              Officially Recognized by the Federal Government of Nigeria
            </h2>
          </div>

          <div className="float-container grid lg:grid-cols-2 gap-16 items-center scroll-animate">
            <figure className="float-img">
              <div className="w-full h-80 bg-gray-100 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/verified.jpg" 
                  alt="Government Certification" 
                  className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  style={{filter: 'brightness(1.05) saturate(1.1) drop-shadow(0 8px 25px rgba(154, 78, 174, 0.25))'}}
                />
                <div className="hidden w-full h-80 bg-gradient-to-br from-green-200 to-blue-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-24 h-24 text-green-600 mx-auto mb-4" />
                    <p className="text-green-800 font-semibold">Our Certification</p>
                  </div>
                </div>
              </div>
            </figure>
            <div className="float-text space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Government Approved Platform</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are proud to be a government approved platform, recognized for our commitment to excellence, transparency, and national development. Our operations are fully aligned with federal regulations and national standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              Our Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              Success Stories
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="min-w-full modern-card">
                  <CardContent className="p-12">
                    <div className="flex justify-center mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-6 h-6 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <blockquote className="text-xl sm:text-2xl text-foreground mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <div className="font-bold text-lg text-foreground">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                      <div className="text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Added from HTML */}
      <aside className="questionnaire py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
        <div className="max-w-4xl mx-auto scroll-animate">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <Card className="modern-card bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  <span>How does Pekamy Freshminds uniquely contribute to solving the problem of skilled yet inexperienced individuals struggling to find real opportunities?</span>
                  <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="mt-6 pl-4 border-l-2 border-primary/20">
                  <p className="text-muted-foreground leading-relaxed italic">
                    <em>At Pekamy Freshminds, we believe that while it often takes a group to identify a problem, it takes a bold, committed mind to take action. We've taken that step by creating structured systems aimed at closing the gap between being skilled and being experienced. Our programs offer practical pathways for growth, and we invite you to join the mission. Together, let's become part of a movement that transforms potential into real world impact.</em>
                  </p>
                </div>
              </details>
            </CardContent>
          </Card>
        </div>
      </aside>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center scroll-animate">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-8">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Join thousands of successful graduates who started their journey with Pekamy Fresh Minds
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-modern px-12 py-4 text-lg font-semibold rounded-xl" asChild>
              <Link to="/screening">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="glass-effect border-2 px-12 py-4 text-lg font-semibold rounded-xl" asChild>
              <Link to="/contact">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Use the Footer component instead of inline footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 btn-modern p-3 rounded-full shadow-lg"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

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
        
        .modern-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
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
          font-size: clamp(4rem, 8vw, 8rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 0.9;
        }
      `}</style>
    </div>
  );
};

export default Home;