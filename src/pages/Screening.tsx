import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Briefcase
} from "lucide-react";

const PET = () => {
  const [activeTrack, setActiveTrack] = useState('fast-track');
  const [visiblePhase, setVisiblePhase] = useState(0);

  const tracks = {
    'fast-track': {
      title: 'Fast-Track Program',
      duration: '3 Months',
      description: 'For candidates with strong foundational skills who are ready for immediate professional challenges and rapid career acceleration.',
      color: 'from-green-500 to-emerald-600',
      icon: <Rocket className="w-6 h-6" />,
      gradient: 'from-green-500/10 to-emerald-600/10',
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
      duration: '6 Months',
      description: 'Comprehensive development program for candidates who need structured time to build their skills and professional confidence.',
      color: 'from-blue-500 to-indigo-600',
      icon: <Target className="w-6 h-6" />,
      gradient: 'from-blue-500/10 to-indigo-600/10',
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
      duration: '9+ Months',
      description: 'In-depth program for candidates starting from beginner level, with continuous support and flexible learning paths.',
      color: 'from-purple-500 to-pink-600',
      icon: <BookOpen className="w-6 h-6" />,
      gradient: 'from-purple-500/10 to-pink-600/10',
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

  const phases = [
    {
      phase: 1,
      title: 'Application & Assessment',
      description: 'Submit your details and complete our comprehensive skills assessment. Every participant begins by submitting an updated CV through our designated intake form. This step is crucial because it gives us an initial understanding of your current skill level, interests, and professional presentation.',
      duration: '1 Week',
      activities: [
        'Online application form with skills matrix',
        'AI-powered skills assessment test',
        'Video interview with our talent team',
        'Portfolio review and feedback session'
      ],
      icon: <User className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600'
    },
    {
      phase: 2,
      title: 'Orientation & Screening',
      description: 'Attend mandatory webinars and set personalized learning goals. Our team conducts careful review focusing on clarity, potential, and alignment with opportunities we provide. Each CV is reviewed for relevant skills, strengths, and professional readiness.',
      duration: '1 Week',
      activities: [
        'Interactive welcome webinar session',
        'Comprehensive PET program overview',
        'Personal mentor assignment and introduction',
        'Customized personal development plan creation'
      ],
      icon: <Target className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      phase: 3,
      title: 'Skill Development & Clarity Call',
      description: 'Intensive training phase with practical projects and assessments. Participants who pass screening are invited to a Clarity Call - a detailed conversation where we understand your goals, preferred niches, strengths, and career challenges.',
      duration: 'Variable',
      activities: [
        'Technical skill training modules',
        'Interactive soft skills workshops',
        'Real-world project assignments',
        'Collaborative peer learning sessions'
      ],
      icon: <Brain className="w-6 h-6" />,
      color: 'from-pink-500 to-red-600'
    },
    {
      phase: 4,
      title: 'Evaluation & Certification',
      description: 'Final assessment and certification based on performance. Based on information from your CV and clarity session, you will be assigned to a tier: Beginner, Intermediate, or Advanced for personalized support.',
      duration: '2 Weeks',
      activities: [
        'Comprehensive final project presentation',
        'Multi-dimensional skills evaluation',
        'Professional certificate award ceremony',
        'Detailed performance feedback and roadmap'
      ],
      icon: <Award className="w-6 h-6" />,
      color: 'from-red-500 to-orange-600'
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
      color: 'from-orange-500 to-yellow-600'
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
    { text: 'Intermediate English communication skills', icon: <MessageSquare className="w-5 h-5 text-blue-500" /> },
    { text: 'Access to a computer and stable internet connection', icon: <Globe className="w-5 h-5 text-green-500" /> },
    { text: 'Willingness to participate in collaborative group activities', icon: <Users className="w-5 h-5 text-purple-500" /> },
    { text: 'Dedication to complete the full program duration', icon: <Shield className="w-5 h-5 text-red-500" /> }
  ];

  const skills = [
    { 
      category: 'Technical Skills', 
      items: ['Web Development', 'Data Analysis', 'Digital Marketing', 'Graphic Design', 'Mobile App Development'],
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      category: 'Business Skills', 
      items: ['Project Management', 'Business Analysis', 'Customer Service', 'Sales', 'Operations'],
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500'
    },
    { 
      category: 'Creative Skills', 
      items: ['Content Writing', 'Video Production', 'UI/UX Design', 'Social Media Management', 'Brand Development'],
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      category: 'Soft Skills', 
      items: ['Communication', 'Leadership', 'Problem Solving', 'Time Management', 'Teamwork'],
      icon: <Users className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setVisiblePhase((prev) => (prev + 1) % phases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background page-transition">
      {/* Header with proper spacing */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10 fade-in-section">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm animate-float shadow-glow">
              <Rocket className="w-12 h-12" />
            </div>
          </div>
          
          <Badge className="bg-white/20 text-white mb-4 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            Government Approved Program
          </Badge>
          
          <h1 className="text-6xl font-bold mb-6">Pekamy Entry Track</h1>
          <div className="text-4xl font-bold mb-8 text-yellow-300">PET</div>
          
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-12 leading-relaxed">
            The <strong>Pekamy Entry Track (PET)</strong> is our flagship onboarding framework designed to guide new talents — especially students, fresh graduates, and aspiring professionals — through a structured, mentorship-driven development journey into the modern workforce.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg">
              Apply Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 px-8 py-4 text-lg">
              <Play className="mr-2 w-6 h-6" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-morph"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Track Selection */}
      <section className="py-20 px-4 bg-white/90 backdrop-blur-sm fade-in-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white animate-glow-pulse">
                <BarChart3 className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-6">Choose Your <span className="modern-text">Track</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer three different tracks based on your current skill level and career goals. Each track is designed to maximize your potential and accelerate your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-stagger">
            {Object.entries(tracks).map(([key, track]) => (
              <Card 
                key={key}
                className={`cursor-pointer transition-all duration-500 hover-lift group relative overflow-hidden ${
                  activeTrack === key 
                    ? 'ring-2 ring-primary shadow-glow border-primary/50 scale-105' 
                    : 'hover:border-primary/30 hover:shadow-xl'
                }`}
                onClick={() => setActiveTrack(key)}
              >
                {track.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-primary text-white shadow-lg">
                      {track.badge}
                    </Badge>
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${track.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {track.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {track.title}
                  </h3>
                  
                  <div className="text-3xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {track.duration}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {track.description}
                  </p>
                  
                  <div className="space-y-3">
                    {track.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3 text-sm p-2 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-left">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {activeTrack === key && (
                    <Button className="w-full mt-6 btn-primary-2025 hover-glow animate-scale-in">
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

      {/* Program Phases */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10 fade-in-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-6">
              The <span className="modern-text">PET Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured 5-phase approach ensures comprehensive development and successful placement. Here's what the complete PET journey looks like from application to career success.
            </p>
          </div>

          <div className="space-y-8 animate-stagger">
            {phases.map((phase, index) => (
              <Card 
                key={index} 
                className={`hover-lift bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 group overflow-hidden relative transition-all duration-500 ${
                  visiblePhase === index ? 'ring-2 ring-primary/30 shadow-glow' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-glass opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        {phase.phase}
                      </div>
                      <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {phase.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                          {phase.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{phase.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {phase.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center space-x-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-300">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm font-medium">{activity}</span>
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
      <section className="py-20 px-4 bg-white/90 backdrop-blur-sm fade-in-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-6">Skills We <span className="modern-text">Develop</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive skill development across technical, business, creative, and soft skills tailored for the modern workplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="hover-lift bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 group overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${skillCategory.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-r ${skillCategory.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    {skillCategory.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-center group-hover:text-primary transition-colors duration-300">
                    {skillCategory.category}
                  </h3>
                  
                  <ul className="space-y-3">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm font-medium">{skill}</span>
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
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5 fade-in-section">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-6">Success <span className="modern-text">Stories</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from PET graduates who transformed their careers and achieved remarkable success in their chosen fields.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-stagger">
            {successStories.map((story, index) => (
              <Card key={index} className="hover-lift bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-glass opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {story.image}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {story.name}
                  </h3>
                  
                  <p className="text-primary font-semibold mb-1">{story.role}</p>
                  <p className="text-muted-foreground text-sm mb-3">{story.company}</p>
                  
                  <div className="flex justify-center space-x-2 mb-4">
                    <Badge className="bg-primary/10 text-primary text-xs">
                      {story.track} Graduate
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {story.growth}
                    </Badge>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-xl mb-4">
                    <p className="text-sm font-semibold text-primary mb-1">Current Salary</p>
                    <p className="text-lg font-bold">{story.salary}</p>
                  </div>
                  
                  <p className="text-muted-foreground italic text-sm leading-relaxed">
                    "{story.story}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 bg-white/90 backdrop-blur-sm fade-in-section">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-6">Program <span className="modern-text">Requirements</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What you need to succeed in the PET program and unlock your potential.
            </p>
          </div>

          <Card className="hover-lift bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-glass opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="p-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {requirements.slice(0, 3).map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-colors duration-300 group/item">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300">
                        {requirement.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground leading-relaxed group-hover/item:text-primary transition-colors duration-300">
                          {requirement.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {requirements.slice(3).map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-colors duration-300 group/item">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300">
                        {requirement.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground leading-relaxed group-hover/item:text-primary transition-colors duration-300">
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
      <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden fade-in-section">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-glow-pulse backdrop-blur-sm">
              <Trophy className="w-12 h-12" />
            </div>
            
            <h2 className="text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful graduates who transformed their careers through the PET program. Your future starts with a single step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 px-10 py-4 text-lg shadow-xl">
                <User className="mr-2 w-6 h-6" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 px-10 py-4 text-lg">
                <Calendar className="mr-2 w-6 h-6" />
                Schedule Consultation
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24hrs</div>
                <div className="text-sm opacity-80">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-sm opacity-80">Alumni Network</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      </section>

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

        .phase-highlight {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        @keyframes track-select {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .track-selected {
          animation: track-select 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
};

export default PET;