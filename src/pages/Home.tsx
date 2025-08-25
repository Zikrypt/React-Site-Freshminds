import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Briefcase, Star, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Talent Matching",
      description: "Connect with top-tier professionals who align with your company culture and requirements."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Industry Expertise",
      description: "Deep knowledge across multiple sectors to find the perfect fit for specialized roles."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Screening",
      description: "Advanced screening processes ensure only the most qualified candidates reach you."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Find Your Next
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Dream Team
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Pekamy Freshminds connects exceptional talent with innovative companies. 
            Let us help you build the future of your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Find Talent
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Join Our Network
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-primary rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Pekamy Freshminds?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with human expertise to deliver unmatched recruiting solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-primary/10">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">500+</div>
              <div className="text-lg text-muted-foreground">Successful Placements</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">98%</div>
              <div className="text-lg text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">50+</div>
              <div className="text-lg text-muted-foreground">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of companies who trust Pekamy Freshminds to find their next star employees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/screening">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Learn About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;