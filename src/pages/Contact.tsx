import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  Send,
  Facebook,
  XIcon,
  Twitter,
  TwitterIcon,
  TicketCheckIcon,
  Sparkles,
  Users,
  HeartHandshake
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/company/pekamy-freshminds/",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/pekamy_freshminds?igsh=MWdhaDk0ODlmdWt5eA==",
      color: "hover:text-pink-600"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://wa.me/+2348165590372",
      color: "hover:text-green-600"
    },
    {
      name: "Gmail",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:pekamyfreshmindsteam@gmail.com",
      color: "hover:text-red-600"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://www.facebook.com/share/14FUjmxamz7/",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: <TwitterIcon className="w-6 h-6" />,
      url: "https://x.com/pekamyFreshmind?t=rFQ-XrCNrNcH2BseVa4_5g&s=09",
      color: "hover:text-blue-400"
    },
    {
      name: "TikTok",
      icon: <TicketCheckIcon className="w-6 h-6" />,
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
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
        {/* Background decorations */}
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contact.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.9'
          }}
        ></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center text-white animate-float shadow-glow">
                <HeartHandshake className="w-12 h-12" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
            <span className="block text-foreground">Let's Connect</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Ready to transform your career or find exceptional talent? We're here to make meaningful connections that drive success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg">
              Get In Touch
              <Send className="ml-2 w-6 h-6" />
            </Button>
            <a href="tel: +234 816 559 0372">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
              Call Us Now
              <Phone className="ml-2 w-6 h-6" />
            </Button>
            </a>
          </div>
          
          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Expert Recruiters</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Personalized Service</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Name" 
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your hiring needs or career goals..." 
                    rows={5}
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white group-hover:shadow-glow transition-all duration-300 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-foreground">{info.title}</div>
                        <div className="text-muted-foreground break-words">{info.detail}</div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Stay connected with us on social media for the latest updates, job opportunities, and industry insights.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-4 rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 group ${social.color} min-w-0`}
                      >
                        <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {social.icon}
                        </div>
                        <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="shadow-card bg-gradient-secondary">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;