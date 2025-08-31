import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/Blog", label: "Blog" },
    { path: "/Screening", label: "Pekamy Entry Track" },
    { path: "/Contact", label: "Contact Us" },
  ];

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              to="/"
              className="flex items-center space-x-2 cursor-pointer hover:scale-105 hover:animate-bounce transition-all duration-300 transform active:scale-95" 
            >
              <div className="w-8 h-8 bg-gradient-to-r from-[#9a4eae] to-[#2f0033] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PF</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#9a4eae] to-[#2f0033] bg-clip-text text-transparent">
                Pekamy Freshminds
              </span>
            </Link>

            {/* Hamburger Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="z-50 relative hover:bg-gray-100 hover:scale-110 hover:animate-bounce transition-all duration-300 active:scale-95"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 transform ${
                    isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 transform ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                  }`} 
                />
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Horizontal Line Expansion Overlay */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Background Overlay */}
        <div 
          className={`absolute inset-0 bg-[#2f0033] transition-all duration-700 ease-in-out cursor-pointer ${
            isMenuOpen ? 'opacity-95' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Two-Stage Animation: Center-Outward Line Draw + Horizontal Expansion */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Stage 2: Horizontal expansion */}
          <div 
            className={`absolute top-0 bottom-0 left-1/2 bg-gradient-to-br from-[#9a4eae] to-[#2f0033] transform -translate-x-1/2 ${
              isMenuOpen 
                ? 'w-full transition-all duration-600 ease-out delay-500' 
                : 'w-0 transition-all duration-0'
            }`}
            style={{
              transformOrigin: 'center center',
            }}
          />
          {/* Stage 1: Vertical line drawing from center outward */}
          <div 
            className={`absolute top-1/2 left-1/2 bg-gradient-to-br from-[#9a4eae] to-[#2f0033] transform -translate-x-1/2 -translate-y-1/2 ${
              isMenuOpen 
                ? 'w-[6px] h-full transition-all duration-600 ease-out delay-100' 
                : 'w-0 h-0 transition-all duration-0'
            }`}
            style={{
              transformOrigin: 'center center',
            }}
          />
        </div>

        {/* Close Icon - Top Right */}
        {isMenuOpen && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 z-60 text-white hover:bg-white/10 hover:scale-110 hover:rotate-90 transition-all duration-300"
          >
            <X size={28} className="text-white" />
          </Button>
        )}

        {/* Navigation Content - Centered */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-600 ${
            isMenuOpen ? 'opacity-100 delay-800' : 'opacity-0 delay-0'
          }`}
        >
          <div className="text-center space-y-8">
            {navItems.map((item, index) => (
              <div
                key={item.path}
                className={`transform transition-all duration-600 ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-12 opacity-0 scale-90'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${900 + index * 100}ms` : '0ms'
                }}
              >
                <Link
                  to={item.path}
                  className={`block text-4xl md:text-6xl font-bold text-white hover:bg-gradient-to-r hover:from-white hover:to-[#9a4eae] hover:bg-clip-text hover:text-transparent transition-all duration-300 transform hover:scale-110 hover:animate-bounce active:scale-95 ${
                    location.pathname === item.path 
                      ? 'bg-gradient-to-r from-white to-[#9a4eae] bg-clip-text text-transparent scale-105 animate-pulse' 
                      : ''
                  }`}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            
            {/* Additional Contact Info */}
            <div 
              className={`transform transition-all duration-600 mt-16 ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-12 opacity-0 scale-90'
              }`}
              style={{ 
                transitionDelay: isMenuOpen ? '1100ms' : '0ms'
              }}
            >
              <div className="text-white/80 space-y-2 transform transition-all duration-300 hover:scale-105">
                <p className="text-lg hover:text-white transition-colors cursor-pointer hover:animate-bounce">
                  pekamyfreshmindsteam@gmail.com
                </p>
                <p className="text-lg hover:text-white transition-colors cursor-pointer hover:animate-bounce">
                  +234 816 559 0372
                </p>
                <div className="flex justify-center space-x-6 mt-6">
                  <a 
                    href="mailto:pekamyfreshmindsteam@gmail.com" 
                    className="text-white/60 hover:text-white hover:scale-125 hover:animate-bounce transition-all duration-300 text-2xl transform active:scale-90"
                  >
                    📧
                  </a>
                  <a 
                    href="tel:+234 816 559 0372" 
                    className="text-white/60 hover:text-white hover:scale-125 hover:animate-bounce transition-all duration-300 text-2xl transform active:scale-90"
                  >
                    📱
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/pekamy-freshminds/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/60 hover:text-white hover:scale-125 hover:animate-bounce transition-all duration-300 text-2xl transform active:scale-90"
                  >
                    💼
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Custom styles for better animation performance */
        * {
          box-sizing: border-box;
        }
        
        .nav-overlay {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        
        /* Custom bounce animation */
        @keyframes gentle-bounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.05);
          }
        }
        
        .hover\\:animate-bounce:hover {
          animation: gentle-bounce 0.6s ease-in-out;
        }
        
        /* Smooth scaling for better performance */
        .transform {
          backface-visibility: hidden;
        }
        
        /* Ensure proper z-index stacking */
        .fixed {
          z-index: 40;
        }
        
        .z-50 {
          z-index: 50 !important;
        }
        
        .z-60 {
          z-index: 60 !important;
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .nav-overlay *, .hover\\:animate-bounce:hover {
            transition-duration: 0.01ms !important;
            animation: none !important;
          }
        }
        
        /* Glow effect on hover */
        .glow-on-hover:hover {
          filter: drop-shadow(0 0 8px rgba(154, 78, 174, 0.5));
        }
      `}</style>
    </>
  );
};

export default Navigation;