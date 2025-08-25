import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Users, 
  FileText, 
  Video, 
  Brain, 
  Target,
  Clock,
  Shield,
  Award,
  ArrowRight
} from "lucide-react";

const Screening = () => {
  const screeningSteps = [
    {
      step: 1,
      title: "Initial Application Review",
      description: "Our AI-powered system analyzes resumes and applications to identify the most qualified candidates based on your requirements.",
      icon: <FileText className="w-8 h-8" />,
      duration: "24 hours"
    },
    {
      step: 2,
      title: "Skills Assessment",
      description: "Candidates complete role-specific assessments to demonstrate their technical abilities and problem-solving skills.",
      icon: <Brain className="w-8 h-8" />,
      duration: "2-3 days"
    },
    {
      step: 3,
      title: "Phone Screening",
      description: "Our expert recruiters conduct preliminary interviews to assess communication skills and cultural fit.",
      icon: <Users className="w-8 h-8" />,
      duration: "30 minutes"
    },
    {
      step: 4,
      title: "Video Interview",
      description: "In-depth video interviews evaluate technical expertise, soft skills, and alignment with your company values.",
      icon: <Video className="w-8 h-8" />,
      duration: "45-60 minutes"
    },
    {
      step: 5,
      title: "Reference Check",
      description: "We verify employment history and gather insights from previous employers to ensure candidate authenticity.",
      icon: <Shield className="w-8 h-8" />,
      duration: "1-2 days"
    },
    {
      step: 6,
      title: "Final Presentation",
      description: "Top candidates are presented to you with detailed profiles, assessment results, and our recommendations.",
      icon: <Target className="w-8 h-8" />,
      duration: "Same day"
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "97% Success Rate",
      description: "Our screening process results in highly successful long-term placements."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "Complete screening process typically completed within 5-7 business days."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Candidates",
      description: "All candidates undergo thorough background and reference checks."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "90-day replacement guarantee for all placements made through our process."
    }
  ];

  const assessmentTypes = [
    {
      category: "Technical Skills",
      assessments: ["Coding Challenges", "System Design", "Technology-Specific Tests", "Portfolio Review"],
      color: "bg-blue-500"
    },
    {
      category: "Soft Skills",
      assessments: ["Communication", "Leadership Potential", "Problem Solving", "Team Collaboration"],
      color: "bg-green-500"
    },
    {
      category: "Cultural Fit",
      assessments: ["Values Alignment", "Work Style Preferences", "Career Goals", "Company Culture Match"],
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Screening Process
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive, multi-stage evaluation system designed to identify the perfect candidates for your organization.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Screening Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Six-Step Screening Journey</h2>
          <div className="space-y-8">
            {screeningSteps.map((step, index) => (
              <Card key={step.step} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-2 bg-gradient-primary text-white p-8 flex flex-col items-center justify-center text-center">
                      <div className="text-3xl font-bold mb-2">Step {step.step}</div>
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {step.duration}
                      </Badge>
                    </div>
                    <div className="lg:col-span-10 p-8">
                      <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Assessment Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Assessment Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {assessmentTypes.map((type, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${type.color}`}></div>
                    {type.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {type.assessments.map((assessment, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{assessment}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <Card className="bg-gradient-secondary border-primary/20 mb-16">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Why Our Process Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Data-Driven Approach</h4>
                    <p className="text-muted-foreground">Our AI algorithms analyze thousands of data points to predict candidate success.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Human Expertise</h4>
                    <p className="text-muted-foreground">Experienced recruiters provide insights that technology alone cannot capture.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Customized Evaluation</h4>
                    <p className="text-muted-foreground">Each screening is tailored to your specific role requirements and company culture.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Continuous Improvement</h4>
                    <p className="text-muted-foreground">We constantly refine our process based on placement success and client feedback.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                  <div>
                    <h4 className="font-semibold mb-2">Transparent Communication</h4>
                    <p className="text-muted-foreground">Regular updates and detailed candidate profiles keep you informed throughout.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-muted-foreground">Multiple checkpoints ensure only the highest quality candidates reach you.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-primary text-white text-center">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Process?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let us show you how our comprehensive screening process can help you find exceptional talent faster and more effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start Your Search
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule a Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Screening;