import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Heart, 
  BookOpen, 
  TrendingUp,
  Filter,
  Eye
} from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Experience Gap in Nigeria: How Pekamy Fresh Minds is Bridging the Divide",
    subtitle: "Skilled But Unfit for Work? We are Changing That",
    excerpt: "In today's world, acquiring knowledge is no longer enough. While education provides the foundation, it's the ability to apply that knowledge in real-world settings that makes someone truly employable...",
    image: "/images/forblog2.jpg",
    link: "/blog/article1",
    category: "Career Development",
    readTime: "5 min read",
    publishDate: "2025-08-25",
    author: "Pekamy Team",
    views: 1247,
    featured: true
  },
  {
    id: 2,
    title: "The Skills Employers Want (But Schools Don't Teach)",
    subtitle: "Why Being Book-Smart Isn't Enough Anymore",
    excerpt: "It's no secret that academic excellence is still respected. But in today's job market, that alone is not enough. Many Nigerian graduates leave school with impressive GPAs...",
    image: "/images/hiring.jpg.jpg",
    link: "/blog/article2",
    category: "Skills",
    readTime: "7 min read",
    publishDate: "2025-08-20",
    author: "Pekamy Team",
    views: 892,
    featured: false
  },
  {
    id: 3,
    title: "How to Stand Out When You Have No Work Experience",
    subtitle: "What You Have is More Valuable Than You Think",
    excerpt: "You just graduated, your CV looks empty, and every job says '2 years experience needed.' Sound familiar? You're not alone. But here's the truth: everyone starts somewhere...",
    image: "/images/resume.jpg.jpg",
    link: "/blog/article3",
    category: "Job Search",
    readTime: "6 min read",
    publishDate: "2025-08-15",
    author: "Pekamy Team",
    views: 1056,
    featured: true
  },
  {
    id: 4,
    title: "Why Internships Matter More Than Ever in Nigeria",
    subtitle: "A Smart First Step Into a Tough Market",
    excerpt: "Internships are no longer just for passing time during ASUU strikes. In today's Nigeria, they are a serious stepping stone into the professional world...",
    image: "/images/pet.jpg.jpg",
    link: "/blog/article4",
    category: "Internships",
    readTime: "4 min read",
    publishDate: "2025-08-10",
    author: "Pekamy Team",
    views: 743,
    featured: false
  },
  {
    id: 5,
    title: "Freelancing While in School: A Smart Move or a Distraction?",
    subtitle: "Earn While You Learn – But Know the Balance",
    excerpt: "Side hustles are everywhere. From design to social media management, many students now freelance to gain income and skills. But the question remains...",
    image: "/images/for blog.jpg",
    link: "/blog/article5",
    category: "Freelancing",
    readTime: "8 min read",
    publishDate: "2025-08-05",
    author: "Pekamy Team",
    views: 634,
    featured: false
  },
  {
    id: 6,
    title: "Building a Personal Brand Before Graduation",
    subtitle: "Stand Out Before You Even Enter the Job Market",
    excerpt: "Imagine a hiring manager Googles your name and finds a clean portfolio, consistent LinkedIn profile, and examples of your work. That's the power of personal branding...",
    image: "/images/logo.png.jpg",
    link: "/blog/article6",
    category: "Personal Branding",
    readTime: "9 min read",
    publishDate: "2025-07-30",
    author: "Pekamy Team",
    views: 1189,
    featured: true
  }
];

const categories = ["All", "Career Development", "Skills", "Job Search", "Internships", "Freelancing", "Personal Branding"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const loadMoreArticles = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleArticles(prev => prev + 3);
      setIsLoading(false);
    }, 500);
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
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background page-transition">
      {/* Hero Section with proper spacing */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
          <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/blogbg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.9'
          }}
        ></div>
        <div className="container mx-auto text-center relative z-10 fade-in-section">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-white animate-float shadow-glow">
              <BookOpen className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 modern-text">
            The Freshminds Journal
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stories, solutions, and insights from the heart of Pekamy's mission to empower youth
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>{articles.length} Articles</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Updated Weekly</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>10K+ Readers</span>
            </div>
          </div>
        </div>
        
        {/* Floating decoration */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-morph"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-primary rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-white/80 backdrop-blur-sm border-b border-border fade-in-section">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 modern-input"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`transition-all duration-300 ${
                      selectedCategory === category 
                        ? 'bg-gradient-primary text-white shadow-glow hover:shadow-xl' 
                        : 'hover:border-primary hover:text-primary'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-4 fade-in-section">
          <div className="container mx-auto">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h2 className="text-3xl font-bold">Featured Articles</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article, index) => (
                <Card key={article.id} className="group hover-lift hover-glow overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-4 left-4 bg-gradient-primary text-white">
                      Featured
                    </Badge>
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{article.views}</span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-primary mb-2">{article.subtitle}</p>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">By {article.author}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group/btn hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section className="py-16 px-4 fade-in-section">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <div className="text-sm text-muted-foreground">
              Showing {Math.min(visibleArticles, filteredArticles.length)} of {filteredArticles.length} articles
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {regularArticles.slice(0, visibleArticles).map((article, index) => (
              <Card 
                key={article.id} 
                className="group hover-lift bg-white/90 backdrop-blur-sm overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/90 text-primary backdrop-blur-sm">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {article.views} views
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm font-medium text-primary mb-2 line-clamp-1">{article.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">By {article.author}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group/btn text-primary hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      Read
                      <ArrowRight className="ml-1 w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {visibleArticles < filteredArticles.length && (
            <div className="text-center mt-12">
              <Button 
                onClick={loadMoreArticles}
                disabled={isLoading}
                className="btn-primary-2025 px-8 py-3 text-lg hover-glow"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Loading...</span>
                  </div>
                ) : (
                  <>
                    Load More Articles
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-primary text-white relative overflow-hidden fade-in-section">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-xl opacity-90 mb-8">
              Get the latest insights, career tips, and opportunities delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
              />
              <Button className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </section>

      <style>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .animate-stagger > * {
          opacity: 0;
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-stagger > *:nth-child(1) { animation-delay: 0.1s; }
        .animate-stagger > *:nth-child(2) { animation-delay: 0.2s; }
        .animate-stagger > *:nth-child(3) { animation-delay: 0.3s; }
        .animate-stagger > *:nth-child(4) { animation-delay: 0.4s; }
        .animate-stagger > *:nth-child(5) { animation-delay: 0.5s; }
        .animate-stagger > *:nth-child(6) { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default Blog;