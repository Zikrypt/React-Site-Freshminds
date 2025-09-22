import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
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

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [heroStatsVisible, setHeroStatsVisible] = useState(false);
  
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
      image: "/images/hiring.jpg",
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
      image: "/images/jobseeker.jpg",
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
    }
  ];

  const categories = ['All', 'Career Development', 'Skills', 'Job Search', 'Internships'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const loadMoreArticles = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleArticles(prev => prev + 3);
      setIsLoading(false);
    }, 500);
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

  // Count animations for blog stats
  const blogArticlesCount = useCountAnimation(50, heroStatsVisible);
  const blogReadersCount = useCountAnimation(10, heroStatsVisible);
  const blogRatingCount = useCountAnimation(4.8, heroStatsVisible);

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
          if (entry.target.id === 'blog-hero-stats') {
            setHeroStatsVisible(true);
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate, #blog-hero-stats');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background page-enter">
      {/* Modern Hero Section */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-50"></div>
        
        {/* Floating Badges */}
        <div className="absolute top-20 left-10 floating-badge hidden lg:block">
          <Badge className="glass-effect text-primary-foreground bg-primary/80 px-4 py-2 text-sm font-medium">
            <TrendingUp className="w-4 h-4 mr-2" />
            Latest Stories
          </Badge>
        </div>
        <div className="absolute top-32 right-16 floating-badge hidden lg:block" style={{ animationDelay: '1s' }}>
          <Badge className="glass-effect text-secondary-foreground bg-secondary/80 px-4 py-2 text-sm font-medium">
            <Eye className="w-4 h-4 mr-2" />
            10K+ Readers
          </Badge>
        </div>
        <div className="absolute bottom-32 left-16 floating-badge hidden lg:block" style={{ animationDelay: '2s' }}>
          <Badge className="glass-effect text-primary-foreground bg-primary/80 px-4 py-2 text-sm font-medium">
            <Heart className="w-4 h-4 mr-2" />
            Career Insights
          </Badge>
        </div>
        <div className="absolute bottom-40 right-10 floating-badge hidden lg:block" style={{ animationDelay: '2.5s' }}>
          <Badge className="glass-effect text-secondary-foreground bg-secondary/80 px-4 py-2 text-sm font-medium">
            <BookOpen className="w-4 h-4 mr-2" />
            Weekly Updates
          </Badge>
        </div>
        
        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <div className="hero-reveal">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-primary-foreground shadow-lg floating-badge">
                <BookOpen className="w-10 h-10" />
              </div>
            </div>
            <h1 className="display-text text-gradient mb-6">
              BLOG
            </h1>
          </div>
          <div className="hero-reveal hero-reveal-delay-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The <span className="text-gradient">Freshminds</span> Journal
            </h2>
          </div>
          <div className="hero-reveal hero-reveal-delay-2">
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Stories, solutions, and insights from the heart of Pekamy's mission to empower youth
            </p>
          </div>

          {/* Blog Stats - Similar to Home Hero */}
          <div id="blog-hero-stats" className="hero-reveal hero-reveal-delay-3 grid grid-cols-3 gap-8 max-w-2xl mx-auto py-8">
            <div className="text-center">
              <span className="text-3xl sm:text-4xl font-bold text-gradient">{blogArticlesCount}+</span>
              <span className="block text-sm text-muted-foreground">Articles Published</span>
            </div>
            <div className="text-center">
              <span className="text-3xl sm:text-4xl font-bold text-gradient">{blogReadersCount}K+</span>
              <span className="block text-sm text-muted-foreground">Monthly Readers</span>
            </div>
            <div className="text-center">
              <span className="text-3xl sm:text-4xl font-bold text-gradient">{blogRatingCount.toFixed(1)}</span>
              <span className="block text-sm text-muted-foreground">Average Rating</span>
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

      {/* Search and Filter Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="scroll-animate mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass-effect border-primary/20"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      selectedCategory === category 
                        ? "btn-modern" 
                        : "glass-effect border-primary/20 hover:bg-primary/10"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gradient mb-8 scroll-animate">Featured Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article, index) => (
                  <Card key={article.id} className="modern-card overflow-hidden scroll-animate" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-primary/50" />
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{article.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(article.publishDate).toLocaleDateString()}
                        </div>
                        <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                          Read More <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Regular Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gradient mb-8 scroll-animate">All Articles</h2>
            <div className="modern-grid">
              {regularArticles.slice(0, visibleArticles).map((article, index) => (
                <Card key={article.id} className="modern-card overflow-hidden scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-primary/50" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{article.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.views}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{article.author}</span>
                      <span className="text-muted-foreground">{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {visibleArticles < regularArticles.length && (
              <div className="text-center mt-12 scroll-animate">
                <Button
                  onClick={loadMoreArticles}
                  disabled={isLoading}
                  size="lg"
                  className="btn-modern px-8 py-3"
                >
                  {isLoading ? "Loading..." : "Load More Articles"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            )}
          </div>

          {/* Newsletter Section */}
          <div className="scroll-animate">
            <Card className="modern-card bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold text-gradient mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    Get the latest insights and career tips delivered to your inbox
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 glass-effect border-primary/20"
                    />
                    <Button className="btn-modern px-6">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;