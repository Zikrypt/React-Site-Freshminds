import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { 
  Rocket, 
  Target, 
  Users, 
  BookOpen, 
  Award, 
  TrendingUp,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Play,
  Calendar,
  User,
  Zap,
  Brain,
  Trophy,
  Sparkles,
  Shield,
  Globe,
  MessageSquare,
  BarChart3,
  Briefcase,
  Home,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const Screening = () => {
  const [activeTrack, setActiveTrack] = useState('fast-track');
  const [visiblePhase, setVisiblePhase] = useState(0);
  const [heroStatsVisible, setHeroStatsVisible] = useState(false);
  const [successStatsVisible, setSuccessStatsVisible] = useState(false);

  const tracks = {
    'fast-track': {
      title: 'Fast-Track Program',
      duration: '12 Weeks',
      description: 'For candidates with strong foundational skills who are ready for immediate professional challenges and rapid career acceleration.',
      color: 'from-[#9a4eae] to-[#7a3e8e]',
      icon: <Rocket className="w-6 h-6" />,
      gradient: 'from-[#9a4eae]/20 to-[#7a3e8e]/20',
      benefits: [
        'Accelerated skill development with AI-powered learning',
        'Priority placement opportunities with top companies',
        'Direct mentorship from industry experts and leaders',
        'Real project assignments with immediate impact',
        'Exclusive networking events with partner companies'
      ],
      badge: 'Most Popular'
    },
    'standard': {
      title: 'Standard Program',
      duration: '26 Weeks',
      description: 'Comprehensive development program for candidates who need structured time to build their skills and professional confidence.',
      color: 'from-[#8a46a0] to-[#6a3686]',
      icon: <Target className="w-6 h-6" />,
      gradient: 'from-[#8a46a0]/20 to-[#6a3686]/20',
      benefits: [
        'Step-by-step skill building with personalized roadmaps',
        'Extended mentorship period with weekly check-ins',
        'Practice projects and real-world assessments',
        'Comprehensive soft skills development program',
        'Interview preparation and professional coaching'
      ],
      badge: 'Recommended'
    },
    'extended': {
      title: 'Extended Program',
      duration: '39 Weeks',
      description: 'In-depth program for candidates starting from beginner level, with continuous support and flexible learning paths.',
      color: 'from-[#7a3e92] to-[#5a2e72]',
      icon: <BookOpen className="w-6 h-6" />,
      gradient: 'from-[#7a3e92]/20 to-[#5a2e72]/20',
      benefits: [
        'Foundational skills training from ground up',
        'Continuous progress monitoring and adaptation',
        'Flexible learning pace with multiple pathways',
        'Regular career counseling and guidance sessions',
        'Long-term professional development planning'
      ],
      badge: 'Comprehensive'
    }
  };

  // Updated phases with HTML content
  const phases = [
    {
      phase: 1,
      title: 'CV Submission',
      description: 'Every participant begins by submitting an updated CV through our designated intake form. This step is crucial because it gives us an initial understanding of your current skill level, interests, and professional presentation. We advise participants to take this step seriously, as it serves as your first impression both to our team and potential future placement partners.',
      duration: '1 Week',
      activities: [
        'Submit updated CV through designated intake form',
        'Complete skills and interests assessment',
        'Professional presentation evaluation',
        'Initial profile creation and review'
      ],
      icon: <User className="w-6 h-6" />,
      color: 'from-[#9a4eae] to-[#7a3e8e]'
    },
    {
      phase: 2,
      title: 'Screening & Review',
      description: 'Once CVs are submitted, our team conducts a careful review. We\'re not just looking for fancy degrees or long work histories — we focus on clarity, potential, and alignment with the kinds of opportunities we provide. Each CV is reviewed for relevant skills, strengths, and professional readiness. This process helps us make informed decisions about the kind of support you\'ll need.',
      duration: '1 Week',
      activities: [
        'Comprehensive CV review process',
        'Skills and potential assessment',
        'Alignment evaluation with available opportunities',
        'Professional readiness determination'
      ],
      icon: <Target className="w-6 h-6" />,
      color: 'from-[#8a46a0] to-[#6a3686]'
    },
    {
      phase: 3,
      title: 'Clarity Call & CV Improvement',
      description: 'Participants who pass the screening stage are invited to a Clarity Call. This is more than just an interview — it\'s a 1-on-1 or small group conversation where we get to know you better. We\'ll ask about your goals, preferred niches, strengths, and career struggles. You\'ll also get detailed feedback on your CV with suggestions for improvement. This ensures that you\'re not just part of the program — you\'re prepared for it.',
      duration: '1-2 Weeks',
      activities: [
        '1-on-1 or small group clarity sessions',
        'Goals and career aspirations discussion',
        'Strengths and challenges assessment',
        'Detailed CV feedback and improvement suggestions'
      ],
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'from-[#9a4eae] to-[#6a3686]'
    },
    {
      phase: 4,
      title: 'Tier Classification',
      description: 'Based on the information collected from your CV and clarity session, you\'ll be assigned to a tier: Beginner, Intermediate, or Advanced. These tiers help us provide personalized support, match you to the right tasks, and track your growth as you move through the program.',
      duration: '1 Week',
      activities: [
        'Comprehensive skills evaluation',
        'Tier assignment (Beginner/Intermediate/Advanced)',
        'Personalized development plan creation',
        'Task matching based on tier level'
      ],
      icon: <Award className="w-6 h-6" />,
      color: 'from-[#8a46a0] to-[#5a2e72]'
    },
    {
      phase: 5,
      title: 'Job Placement & Matching',
      description: 'Strategic matching with suitable opportunities and ongoing support. We focus on aligning individuals with opportunities for their skills and aspirations, providing interview preparation and post-placement support.',
      duration: 'Ongoing',
      activities: [
        'AI-powered opportunity matching algorithm',
        'Intensive interview preparation sessions',
        'Strategic job placement with partner companies',
        'Continuous post-placement support and growth tracking'
      ],
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-[#7a3e92] to-[#4a2662]'
    }
  ];

  const successStories = [
    {
      name: 'Adaora Chen',
      role: 'Full-Stack Developer',
      company: 'TechCorp Nigeria',
      track: 'Fast-Track',
      story: 'From computer science student to full-stack developer in just 3 months. The PET program gave me the practical skills and confidence I needed to excel.',
      image: '👩‍💻',
      salary: '₦2.5M annually',
      growth: '+150% salary increase'
    },
    {
      name: 'Emeka Johnson',
      role: 'Digital Marketing Specialist',
      company: 'Growth Agency',
      track: 'Standard',
      story: 'The 6-month program helped me transition from accounting to digital marketing successfully. Now I lead campaigns for major brands.',
      image: '👨‍💼',
      salary: '₦1.8M annually',
      growth: 'Career transition'
    },
    {
      name: 'Fatima Abdullah',
      role: 'Senior Data Analyst',
      company: 'DataTech Solutions',
      track: 'Extended',
      story: 'Started with no coding experience. The extended program gave me the foundation I needed to become a data science expert.',
      image: '👩‍🔬',
      salary: '₦3.2M annually',
      growth: '+200% skill development'
    }
  ];

  const requirements = [
    { text: 'Strong motivation and commitment to continuous learning', icon: <Zap className="w-5 h-5 text-yellow-500" /> },
    { text: 'Intermediate English communication skills', icon: <MessageSquare className="w-5 h-5 text-blue-400" /> },
    { text: 'Access to a computer and stable internet connection', icon: <Globe className="w-5 h-5 text-green-500" /> },
    { text: 'Willingness to participate in collaborative group activities', icon: <Users className="w-5 h-5 text-[#9a4eae]" /> },
    { text: 'Dedication to complete the full program duration', icon: <Shield className="w-5 h-5 text-red-400" /> }
  ];

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

  // Count animations for different sections
  const heroPhaseCount = useCountAnimation(5, heroStatsVisible);
  const heroTrackCount = useCountAnimation(3, heroStatsVisible);
  const heroSuccessCount = useCountAnimation(98, heroStatsVisible);
  
  const finalResponseCount = useCountAnimation(24, successStatsVisible);
  const finalSuccessCount = useCountAnimation(98, successStatsVisible);
  const finalAlumniCount = useCountAnimation(1000, successStatsVisible);

  const skills = [
    { 
      category: 'Technical Skills', 
      items: ['Web Development', 'Data Analysis', 'Digital Marketing', 'Graphic Design', 'Mobile App Development'],
      icon: <Brain className="w-6 h-6" />,
      color: 'from-[#9a4eae] to-[#7a3e8e]'
    },
    { 
      category: 'Business Skills', 
      items: ['Project Management', 'Business Analysis', 'Customer Service', 'Sales', 'Operations'],
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-[#8a46a0] to-[#6a3686]'
    },
    { 
      category: 'Creative Skills', 
      items: ['Content Writing', 'Video Production', 'UI/UX Design', 'Social Media Management', 'Brand Development'],
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-[#9a4eae] to-[#6a3686]'
    },
    { 
      category: 'Soft Skills', 
      items: ['Communication', 'Leadership', 'Problem Solving', 'Time Management', 'Teamwork'],
      icon: <Users className="w-6 h-6" />,
      color: 'from-[#7a3e92] to-[#5a2e72]'
    }
  ];

  useEffect(() => {
    // Intersection Observer for scroll animations and counting triggers
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Trigger counting animations based on element IDs
          if (entry.target.id === 'hero-stats') {
            setHeroStatsVisible(true);
          }
          if (entry.target.id === 'success-stats') {
            setSuccessStatsVisible(true);
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-section, #hero-stats, #success-stats');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisiblePhase((prev) => (prev + 1) % phases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background page-enter">
      {/* Header - Updated with HTML content */}
      <header className="main-header fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
        <div className="header-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="logo-section">
              <h1 className="blog-title text-2xl font-bold bg-gradient-to-r from-[#9a4eae] to-[#2f0033] bg-clip-text text-transparent">
                PET Screening Process
              </h1>
              <p className="text-xs text-gray-600">Onboarding & Placement Structure</p>
            </div>

            <nav className="main-nav hidden md:block">
              <ul className="nav-list flex items-baseline space-x-4">
                <li>
                  <Link to="/" className="text-gray-700 hover:text-[#9a4eae] px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Home className="w-4 h-4 mr-1" /> PFM
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-700 hover:text-[#9a4eae] px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Mail className="w-4 h-4 mr-1" /> Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-700 hover:text-[#9a4eae] px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" /> Our Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Header with proper spacing - Enhanced with background image */}
      <section className="pt-28 pb-16 px-4 relative overflow-hidden bg-cover bg-center bg-no-repeat">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/trackbg.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r /80 via/80 to-[#9a4eae]/80"></div>
        </div>

        {/* Floating badges */}
        <div className="absolute top-20 left-10 floating-badge hidden lg:block">
          <Badge className="glass-effect text-primary-foreground bg-white/20 px-4 py-2 text-sm font-medium flex items-center">
            <Award className="w-4 h-4 mr-2" />
            Government Approved
          </Badge>
        </div>
        <div className="absolute top-32 right-16 floating-badge hidden lg:block" style={{ animationDelay: '1s' }}>
          <Badge className="glass-effect text-white bg-white/20 px-4 py-2 text-sm font-medium flex items-center">
            <Users className="w-4 h-4 mr-2" />
            500+ Graduates
          </Badge>
        </div>
        <div className="absolute bottom-32 left-16 floating-badge hidden lg:block" style={{ animationDelay: '2s' }}>
          <Badge className="glass-effect text-white bg-white/20 px-4 py-2 text-sm font-medium flex items-center">
            <Target className="w-4 h-4 mr-2" />
            3 Track Options
          </Badge>
        </div>
        <div className="absolute bottom-40 right-10 floating-badge hidden lg:block" style={{ animationDelay: '2.5s' }}>
          <Badge className="glass-effect text-white bg-white/20 px-4 py-2 text-sm font-medium flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            98% Success Rate
          </Badge>
        </div>

        <div className="container mx-auto text-center relative z-10 fade-in-section">
          <div className="hero-content">
            <div className="hero-reveal">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-white/30 rounded-3xl flex items-center justify-center backdrop-blur-sm animate-float shadow-lg floating-badge">
                  <Rocket className="w-12 h-12" />
                </div>
              </div>
              
              <Badge className="bg-white/30 text-white mb-4 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                Government Approved Program
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Pekamy Entry Track</h1>
              <div className="text-3xl md:text-4xl font-bold mb-8 text-purple-200">PET</div>
            </div>
            
            <div className="hero-reveal hero-reveal-delay-1">
              <h2 className="hero-title text-3xl md:text-4xl font-bold mb-8 text-white">Discover, Learn, and Grow with Entry Track</h2>
            </div>
            
            <div className="hero-reveal hero-reveal-delay-2">
              {/* Hero Stats - Similar to Home Hero */}
              <div id="hero-stats" className="hero-stats grid grid-cols-3 gap-8 max-w-2xl mx-auto py-8 mb-8">
                <div className="stat-item text-center">
                  <span className="stat-number text-2xl md:text-3xl font-bold text-purple-200 block">{heroPhaseCount}</span>
                  <span className="stat-label text-sm opacity-90">Phase Process</span>
                </div>
                <div className="stat-item text-center">
                  <span className="stat-number text-2xl md:text-3xl font-bold text-purple-200 block">{heroTrackCount}</span>
                  <span className="stat-label text-sm opacity-90">Track Options</span>
                </div>
                <div className="stat-item text-center">
                  <span className="stat-number text-2xl md:text-3xl font-bold text-purple-200 block">{heroSuccessCount}%</span>
                  <span className="stat-label text-sm opacity-90">Success Rate</span>
                </div>
              </div>

              <p className="text-lg md:text-xl opacity-95 max-w-4xl mx-auto mb-12 leading-relaxed text-white">
                The <strong>Pekamy Entry Track (PET)</strong> is our flagship onboarding framework designed to guide new talents — especially students, fresh graduates, and aspiring professionals — through a structured, mentorship-driven development journey into the modern workforce.
              </p>
            </div>
            
            <div className="hero-reveal hero-reveal-delay-3 flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-[#9a4eae] hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold">
              <a href="https://forms.gle/p7aTwAfYGovz4MvP8" target="_blank" rel="noopener noreferrer">
                Apply Now
                </a>
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-[#9a4aea] hover:bg-white hover:text-[#9a4eae] hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold">
                <Play className="mr-2 w-6 h-6" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full animate-morph"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Article Section - Added from HTML */}
      <main className="blog-container py-20 px-4 bg-white fade-in-section">
        <div className="container mx-auto max-w-4xl">
          <article className="entry-track-article">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                The Pekamy Entry Track (PET): A Step-by-Step Breakdown
              </h2>
            </div>
            
            <Card className="hover-lift bg-white border border-gray-200 hover:border-[#9a4eae]/30 group overflow-hidden relative shadow-md">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-6 md:p-8 relative z-10">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The <strong>Pekamy Entry Track (PET)</strong> is our flagship onboarding framework designed to guide new talents especially students, fresh graduates, and aspiring professionals through a structured, mentorship-driven development journey.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In a country where many young people are highly skilled but lack direction, PET fills that gap by turning potential into performance. Through real-world projects, personalized feedback, and niche-specific guidance, participants can build the competence and confidence they need to thrive in today's competitive environment.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-8 group-hover:text-[#9a4eae] transition-colors duration-300">
                  Here's what the PET journey looks like from start to finish:
                </h3>
              </CardContent>
            </Card>
          </article>
        </div>
      </main>

      {/* Track Selection */}
      <section className="py-20 px-4 bg-gray-50 fade-in-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#9a4eae] to-[#2f0033] rounded-2xl flex items-center justify-center text-white animate-pulse">
                <BarChart3 className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Choose Your <span className="text-[#9a4eae]">Track</span></h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We offer three different tracks based on your current skill level and career goals. Each track is designed to maximize your potential and accelerate your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-stagger">
            {Object.entries(tracks).map(([key, track]) => (
              <Card 
                key={key}
                className={`cursor-pointer transition-all duration-500 hover:shadow-xl group relative overflow-hidden ${
                  activeTrack === key 
                    ? 'ring-2 ring-[#9a4eae] shadow-lg border-[#9a4eae] scale-105' 
                    : 'hover:border-[#9a4eae]/30 hover:shadow-lg'
                }`}
                onClick={() => setActiveTrack(key)}
              >
                {track.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-[#9a4eae] to-[#2f0033] text-white shadow-lg">
                      {track.badge}
                    </Badge>
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 md:p-8 text-center relative z-10 bg-white">
                  <div className={`w-20 h-20 bg-gradient-to-r ${track.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {track.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#9a4eae] transition-colors duration-300">
                    {track.title}
                  </h3>
                  
                  <div className="text-3xl font-bold text-[#9a4eae] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {track.duration}
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {track.description}
                  </p>
                  
                  <div className="space-y-3">
                    {track.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3 text-sm p-2 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-left text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {activeTrack === key && (
                    <Button className="w-full mt-6 bg-[#9a4eae] hover:bg-[#8a46a0] text-white hover:shadow-lg transition-all duration-300">
                      Select This Track
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Phases - Enhanced with HTML content */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50 fade-in-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The <span className="text-[#9a4eae]">PET Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Our structured 5-phase approach ensures comprehensive development and successful placement. Here's what the complete PET journey looks like from application to career success.
            </p>
          </div>

          <div className="space-y-8 animate-stagger">
            {phases.map((phase, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg bg-white border border-gray-200 hover:border-[#9a4eae]/30 group overflow-hidden relative transition-all duration-500 ${
                  visiblePhase === index ? 'ring-2 ring-[#9a4eae]/30 shadow-md' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 md:p-8 relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-[#9a4eae] to-[#2f0033] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        {phase.phase}
                      </div>
                      <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {phase.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#9a4eae] transition-colors duration-300">
                          {phase.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{phase.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        {phase.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center space-x-3 p-3 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
                            <div className="w-2 h-2 bg-[#9a4eae] rounded-full"></div>
                            <span className="text-sm font-medium text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Development */}
      <section className="py-20 px-4 bg-white fade-in-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Skills We <span className="text-[#9a4eae]">Develop</span></h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive skill development across technical, business, creative, and soft skills tailored for the modern workplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="hover:shadow-lg bg-white border border-gray-200 hover:border-[#9a4eae]/30 group overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${skillCategory.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-r ${skillCategory.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    {skillCategory.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-center text-gray-900 group-hover:text-[#9a4eae] transition-colors duration-300">
                    {skillCategory.category}
                  </h3>
                  
                  <ul className="space-y-3">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50 fade-in-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Success <span className="text-[#9a4eae]">Stories</span></h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Real stories from PET graduates who transformed their careers and achieved remarkable success in their chosen fields.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-stagger">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg bg-white border border-gray-200 hover:border-[#9a4eae]/30 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 md:p-8 text-center relative z-10">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {story.image}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#9a4eae] transition-colors duration-300">
                    {story.name}
                  </h3>
                  
                  <p className="text-[#9a4eae] font-semibold mb-1">{story.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{story.company}</p>
                  
                  <div className="flex justify-center space-x-2 mb-4">
                    <Badge className="bg-purple-100 text-[#9a4eae] text-xs">
                      {story.track} Graduate
                    </Badge>
                    <Badge variant="outline" className="text-xs text-gray-600">
                      {story.growth}
                    </Badge>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-xl mb-4">
                    <p className="text-sm font-semibold text-[#9a4eae] mb-1">Current Salary</p>
                    <p className="text-lg font-bold text-gray-900">{story.salary}</p>
                  </div>
                  
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    "{story.story}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 bg-white fade-in-section">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Program <span className="text-[#9a4eae]">Requirements</span></h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              What you need to succeed in the PET program and unlock your potential.
            </p>
          </div>

          <Card className="hover:shadow-lg bg-gradient-to-br from-purple-50/50 to-pink-50/50 border border-[#9a4eae]/20 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="p-6 md:p-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {requirements.slice(0, 3).map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/70 transition-colors duration-300 group/item">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300">
                        {requirement.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 leading-relaxed group-hover/item:text-[#9a4eae] transition-colors duration-300">
                          {requirement.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {requirements.slice(3).map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/70 transition-colors duration-300 group/item">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300">
                        {requirement.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 leading-relaxed group-hover/item:text-[#9a4eae] transition-colors duration-300">
                          {requirement.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#9a4eae] via-[#2f0033] to-[#9a4eae] text-white relative overflow-hidden fade-in-section">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <div className="w-24 h-24 bg-white/30 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-pulse backdrop-blur-sm">
              <Trophy className="w-12 h-12" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg md:text-xl opacity-95 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful graduates who transformed their careers through the PET program. Your future starts with a single step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="bg-white text-[#9a4eae] hover:bg-white/90 hover:scale-105 transition-all duration-300 px-10 py-4 text-lg font-semibold shadow-xl">
                <User className="mr-2 w-6 h-6" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#9a4eae] hover:scale-105 transition-all duration-300 px-10 py-4 text-lg font-semibold">
                <Calendar className="mr-2 w-6 h-6" />
                Schedule Consultation
              </Button>
            </div>
            
            <div id="success-stats" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{finalResponseCount}hrs</div>
                <div className="text-sm opacity-90">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{finalSuccessCount}%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{finalAlumniCount}+</div>
                <div className="text-sm opacity-90">Alumni Network</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/20 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      </section>

      <style>{`
        .animate-stagger > * {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s forwards;
        }
        
        .animate-stagger > *:nth-child(1) { animation-delay: 0.1s; }
        .animate-stagger > *:nth-child(2) { animation-delay: 0.2s; }
        .animate-stagger > *:nth-child(3) { animation-delay: 0.3s; }
        .animate-stagger > *:nth-child(4) { animation-delay: 0.4s; }
        .animate-stagger > *:nth-child(5) { animation-delay: 0.5s; }
        
        .animate-slide-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        
        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
        
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
      `}</style>

      <Footer />
    </div>
  );
};

export default Screening;