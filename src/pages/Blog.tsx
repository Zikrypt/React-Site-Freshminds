import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Future of Remote Hiring: Trends to Watch in 2024",
    excerpt: "Discover the latest trends shaping remote hiring practices and how companies are adapting to attract top talent in a distributed workforce.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Hiring Trends",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center"
  };

  const blogPosts = [
    {
      id: 2,
      title: "5 Essential Interview Questions for Tech Roles",
      excerpt: "Learn the key questions that help identify top technical talent and assess both hard and soft skills effectively.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "5 min read",
      category: "Interview Tips",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Building a Diverse and Inclusive Workplace",
      excerpt: "Strategies for creating an inclusive recruitment process that attracts diverse talent and builds stronger teams.",
      author: "Dr. Amanda Rodriguez",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Diversity & Inclusion",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Salary Negotiation: A Guide for Both Sides",
      excerpt: "Navigate salary negotiations effectively with tips for both employers and candidates to reach fair agreements.",
      author: "David Kim",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Career Advice",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "The Rise of Skills-Based Hiring",
      excerpt: "How companies are moving beyond traditional degree requirements to focus on practical skills and experience.",
      author: "Lisa Thompson",
      date: "December 5, 2024",
      readTime: "4 min read",
      category: "Hiring Trends",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Onboarding Best Practices for New Hires",
      excerpt: "Create a seamless onboarding experience that sets new employees up for success from day one.",
      author: "Robert Wilson",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "HR Best Practices",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop&crop=center"
    }
  ];

  const categories = ["All", "Hiring Trends", "Interview Tips", "Career Advice", "Diversity & Inclusion", "HR Best Practices"];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Insights & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay ahead with the latest trends, tips, and best practices in recruitment and talent management.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button 
              key={category} 
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-gradient-primary hover:shadow-glow" : "hover:bg-primary hover:text-white"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-16 overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="aspect-video lg:aspect-auto">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-4 bg-gradient-primary text-white">
                Featured Post
              </Badge>
              <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              <Button className="w-fit bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="w-fit mb-2">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-gradient-secondary border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Subscribe to our newsletter and get the latest insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-primary/20 focus:border-primary outline-none"
              />
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;