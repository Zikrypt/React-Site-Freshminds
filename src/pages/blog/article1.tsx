import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Eye,
  Heart,
  Share2,
  BookOpen,
  Quote,
  CheckCircle,
  TrendingUp,
  Target,
  Users,
  Award,
  Home,
  ChevronRight,
} from "lucide-react";

/* -------------------------
   Small local UI primitives
   (keeps this file self-contained so you don't get import errors)
   ------------------------- */
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);
const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`px-6 py-6 ${className}`}>{children}</div>
);
const Button = ({
  children,
  className = "",
  onClick,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}) => (
  <button
    onClick={onClick}
    {...props}
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium focus:outline-none ${className}`}
  >
    {children}
  </button>
);
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${className}`}>
    {children}
  </span>
);

/* -------------------------
   Article component
   ------------------------- */
const Article1 = () => {
  type VisibilityMap = { [key: string]: boolean };
  const [readingProgress, setReadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState<VisibilityMap>({});

  const observerRef = useRef<IntersectionObserver | null>(null);
  const rafRef = useRef<number | null>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    // SSR guard
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // -------- reading progress (batched via rAF) --------
    const computeProgress = () => {
      try {
        const scrollTop = window.scrollY || window.pageYOffset || 0;
        const docHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
        const raw = docHeight ? (scrollTop / docHeight) * 100 : 0;
        const clamped = Math.min(100, Math.max(0, raw));
        setReadingProgress(clamped);
      } catch (err) {
        // safe fallback
        setReadingProgress(0);
      }
    };

    const onScrollOrResize = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        rafRef.current = requestAnimationFrame(() => {
          computeProgress();
          tickingRef.current = false;
        });
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    // compute once on mount
    computeProgress();

    // -------- IntersectionObserver for reveal animations --------
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const runObserver = () => {
      const sections = document.querySelectorAll("[data-section]");
      if (!sections || sections.length === 0) {
        return;
      }

      // fallback if IntersectionObserver not supported
      if (typeof IntersectionObserver === "undefined") {
        const visible: VisibilityMap = {};
        sections.forEach((s) => {
          const key = (s as HTMLElement).dataset?.section;
          if (key) visible[key] = true;
        });
        setIsVisible((prev) => ({ ...prev, ...visible }));
        return;
      }

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          try {
            const key = (entry.target as HTMLElement).dataset?.section;
            if (!key) return;
            if (entry.isIntersecting) {
              setIsVisible((prev) => {
                // if already true, keep it; otherwise set true
                if (prev[key]) return prev;
                return { ...prev, [key]: true };
              });
              // optional: stop observing once visible to reduce callbacks
              try {
                if (entry.target) io.unobserve(entry.target);
              } catch (_err) {}
            }
          } catch (_err) {
            // protect from unexpected shapes
          }
        });
      }, observerOptions);

      observerRef.current = io;
      sections.forEach((s) => {
        try {
          observerRef.current?.observe(s);
        } catch (_err) {
          // ignore elements that can't be observed
        }
      });
    };

    // delay observing until after paint so nodes exist
    rafRef.current = requestAnimationFrame(runObserver);

    // cleanup
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (observerRef.current && typeof observerRef.current.disconnect === "function") {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const navigateToBlog = () => {
    if (typeof window !== "undefined" && window.history && window.history.length > 1) {
      window.history.back();
    } else if (typeof window !== "undefined") {
      window.location.href = "/blog";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-200">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                onClick={navigateToBlog}
                className="flex items-center space-x-2 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group"
                aria-label="Back to blog"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span>Back to Blog</span>
              </Button>

              <div className="hidden md:flex items-center space-x-2 text-sm text-slate-500">
                <Home className="w-4 h-4" />
                <ChevronRight className="w-3 h-3" />
                <span>Blog</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-purple-600">Experience Gap</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button className="hover:bg-purple-50" aria-label="Save">
                <Heart className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Save</span>
              </Button>
              <Button className="hover:bg-purple-50" aria-label="Share">
                <Share2 className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Share</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #9A4EAE 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #aeafe5 0%, transparent 50%)`,
          }}
        />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isVisible.hero ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            data-section="hero"
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 text-sm font-medium animate-pulse">
              Featured Article
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent leading-tight">
              The Experience Gap in Nigeria: How Pekamy Fresh Minds is Bridging the Divide
            </h1>

            <h2 className="text-xl md:text-2xl text-purple-600 font-medium mb-8 italic">
              "Skilled But Unfit for Work? We're Changing That"
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>July 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Pekamy Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>1,247 views</span>
              </div>
            </div>

            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <main className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-2xl shadow-purple-500/10">
            <CardContent className="p-8 md:p-12">
              {/* Introduction */}
              <section
                className={`mb-12 transition-all duration-1000 delay-200 ${isVisible.intro ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                data-section="intro"
              >
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  In today's world, acquiring knowledge is no longer enough. While education provides the foundation,
                  it's the ability to apply that knowledge in real-world settings that makes someone truly employable.
                  This is the harsh reality facing millions of Nigerian graduates who find themselves{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                    skilled but inexperienced
                  </span>.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-6 rounded-r-xl my-8">
                  <Quote className="w-8 h-8 text-purple-500 mb-4" />
                  <p className="text-slate-700 italic text-lg leading-relaxed">
                    "You can have all the theoretical knowledge in the world, but without practical experience,
                    you're essentially starting from zero in the eyes of most employers."
                  </p>
                </div>
              </section>

              {/* Reality Section */}
              <section
                className={`mb-12 transition-all duration-1000 delay-300 ${isVisible.reality ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                data-section="reality"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">The Reality of Nigeria's Graduate Market</h2>
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Every year, Nigerian universities and polytechnics produce thousands of graduates with impressive
                  academic credentials. They've mastered complex theories, passed rigorous examinations, and earned
                  degrees in fields ranging from engineering to business administration. Yet, when they step into the
                  job market, they encounter a frustrating paradox:{" "}
                  <strong className="text-purple-700">
                    every job requires experience, but no one wants to give them the opportunity to gain that experience
                  </strong>.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  This creates what economists call a "market failure" – a situation where supply (skilled graduates)
                  doesn't meet demand (experienced workers) not because of lack of ability, but because of structural
                  barriers in the system.
                </p>
              </section>

              {/* Education Gap Section */}
              <section
                className={`mb-12 transition-all duration-1000 delay-400 ${isVisible.education ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                data-section="education"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">Why Traditional Education Falls Short</h2>
                </div>

                <p className="text-slate-700 leading-relaxed mb-8">
                  The Nigerian educational system, while academically rigorous, has historically been designed around
                  theoretical learning rather than practical application. Students spend years memorizing concepts,
                  solving textbook problems, and writing essays about industries they've never actually worked in.
                </p>

                <Card className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-700 flex items-center space-x-2">
                      <Target className="w-5 h-5" />
                      <span>Key Gaps in Traditional Education</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Limited Industry Exposure",
                          desc: "Most students graduate without ever setting foot in a real workplace environment",
                        },
                        {
                          title: "Outdated Curriculum",
                          desc: "Academic content often lags behind current industry practices and technologies",
                        },
                        {
                          title: "Lack of Soft Skills Training",
                          desc: "Critical workplace skills like communication, teamwork, and problem-solving are rarely formally taught",
                        },
                        {
                          title: "No Real-World Projects",
                          desc: "Assignments and projects rarely mirror actual work scenarios or deadlines",
                        },
                        {
                          title: "Missing Professional Networks",
                          desc: "Students graduate without connections to industry professionals or mentors",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-orange-700">{item.title}:</h4>
                            <p className="text-orange-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Employer's Dilemma */}
              <section
                className={`mb-12 transition-all duration-1000 delay-500 ${isVisible.employer ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                data-section="employer"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">The Employer's Dilemma</h2>
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  From the employer's perspective, hiring fresh graduates represents both an opportunity and a risk.
                  While these candidates bring fresh perspectives and updated knowledge, they also require significant
                  investment in training and mentorship. In Nigeria's competitive business environment, many companies
                  simply cannot afford the time and resources needed to bridge this experience gap.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  Small and medium enterprises (SMEs), which make up the backbone of Nigeria's economy, are particularly
                  affected. They need employees who can contribute immediately but often lack the infrastructure to
                  provide comprehensive training programs.
                </p>
              </section>

              {/* Solution Section */}
              <section
                className={`mb-12 transition-all duration-1000 delay-600 ${isVisible.solution ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                data-section="solution"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">How Pekamy Fresh Minds is Changing the Game</h2>
                </div>

                <p className="text-slate-700 leading-relaxed mb-8">
                  At Pekamy Fresh Minds, we recognized that this experience gap wasn't just a problem – it was an
                  opportunity to create real value for both graduates and employers. Our approach is fundamentally
                  different from traditional job placement services.
                </p>

                <Card className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-emerald-200 mb-6">
                  <CardHeader>
                    <CardTitle className="text-emerald-700 text-2xl">Our Three-Pillar Solution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          number: "1",
                          title: "Structured Skill Development",
                          content:
                            "We don't just place candidates; we prepare them. Through our Pekamy Entry Track (PET) program, we provide hands-on training that bridges the gap between academic knowledge and workplace requirements. Participants work on real projects, meet actual deadlines, and receive feedback from industry professionals.",
                        },
                        {
                          number: "2",
                          title: "Employer Partnership",
                          content:
                            "We work closely with companies to understand their specific needs and pain points. Instead of sending generic candidates, we match pre-trained, work-ready individuals who have already demonstrated their ability to perform in real-world scenarios.",
                        },
                        {
                          number: "3",
                          title: "Ongoing Support",
                          content:
                            "Our relationship doesn't end with placement. We provide ongoing mentorship and support to ensure both the candidate and employer achieve their goals. This reduces turnover and increases satisfaction on both sides.",
                        },
                      ].map((pillar, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">{pillar.number}</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-emerald-700 mb-2">{pillar.title}</h4>
                            <p className="text-emerald-600 leading-relaxed">{pillar.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Success Stories */}
              <section
                className={`mb-12 transition-all duration-1000 delay-700 ${isVisible.success ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                data-section="success"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">Success Stories That Prove the Model Works</h2>
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  In just our first year of operation, we've seen remarkable results. Candidates who complete our PET
                  program have a{" "}
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-semibold">78% placement rate</span>{" "}
                  within three months, compared to the national average of less than 30% for fresh graduates. More importantly,{" "}
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md font-semibold">85% of our placed candidates</span>{" "}
                  are still with their employers after 12 months, indicating genuine fit and satisfaction.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <Quote className="w-8 h-8 text-blue-500 mb-4" />
                  <p className="text-slate-700 italic text-lg leading-relaxed mb-2">
                    "Before Pekamy, I applied to over 50 jobs and got maybe 3 interviews. After completing their
                    program, I had 2 job offers within 6 weeks. The difference was night and day."
                  </p>
                  <p className="text-blue-600 font-medium">- Adaora O., Marketing Specialist</p>
                </div>
              </section>

              {/* Ripple Effect */}
              <section
                className={`mb-12 transition-all duration-1000 delay-800 ${isVisible.ripple ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                data-section="ripple"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">The Ripple Effect</h2>
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  When we successfully bridge the experience gap for individual candidates, we create positive ripple effects throughout the economy:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Reduced Unemployment", desc: "More graduates find meaningful employment faster" },
                    { title: "Increased Productivity", desc: "Companies get employees who can contribute from day one" },
                    { title: "Economic Growth", desc: "When people are employed and productive, the entire economy benefits" },
                    { title: "Social Stability", desc: "Employed youth are less likely to engage in social vices or migrate illegally" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-200">
                      <h4 className="font-semibold text-indigo-700 mb-2">{item.title}</h4>
                      <p className="text-indigo-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Looking Forward */}
              <section
                className={`mb-12 transition-all duration-1000 delay-900 ${isVisible.future ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                data-section="future"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">Looking Forward: A Scalable Solution</h2>
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Our vision extends beyond individual placements. We're building a movement that fundamentally changes how Nigeria approaches the transition from education to employment. By proving that structured, practical training can bridge the experience gap, we're encouraging other organizations, educational institutions, and government agencies to adopt similar approaches.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  We're also leveraging technology to scale our impact. Our digital platforms allow us to reach candidates across Nigeria, not just in major cities. We're developing online modules, virtual mentorship programs, and remote project management systems that can serve thousands of candidates simultaneously.
                </p>
              </section>

              {/* Conclusion */}
              <section
                className={`transition-all duration-1000 delay-1000 ${isVisible.conclusion ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                data-section="conclusion"
              >
                <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      The experience gap in Nigeria is real, but it's not insurmountable. With the right approach – one that combines practical training, employer partnership, and ongoing support – we can transform "skilled but inexperienced" graduates into valuable, productive employees.
                    </p>
                    <p className="text-xl font-semibold">
                      At Pekamy Fresh Minds, we're not just bridging the divide; we're building the bridge for the next generation of Nigerian professionals.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Call to Action */}
              <div className="text-center mt-12 pt-8 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={navigateToBlog}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Blog
                  </Button>

                  <Button className="border border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share Article
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Local styles (safe across CRA/Vite/Next) */}
      <style>{`
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite alternate; }
        @keyframes glow-pulse { from { box-shadow: 0 0 20px rgba(147,51,234,0.5);} to { box-shadow: 0 0 30px rgba(147,51,234,0.8);} }
        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
      `}</style>
    </div>
  );
};

export default Article1;