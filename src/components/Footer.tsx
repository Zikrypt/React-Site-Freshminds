import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  
  // Get scroll progress relative to the footer element
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // Create smooth animations based on scroll progress
  // Footer slides up from bottom as user approaches
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 0.5, 1]);
  
  // Scale effect for modern feel
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 0.98, 1]);

  return (
    <motion.footer 
      ref={footerRef}
      className="relative bg-gradient-to-br from-secondary to-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        y,
        opacity,
        scale
      }}
    >
      {/* Background gradient overlay for depth */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.8,
            staggerChildren: 0.15,
            delayChildren: 0.2
          }}
        >
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gradient mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Pekamy Fresh Minds
            </motion.h3>
            <motion.p 
              className="text-primary-foreground/80 leading-relaxed max-w-md text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Empowering the next generation of professionals through innovative training, 
              screening, and placement programs.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.h4 
              className="text-xl font-bold mb-6"
              whileInView={{ 
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{ 
                duration: 2,
                ease: "easeInOut"
              }}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-3">
              {[
                { to: "/", text: "Home" },
                { to: "/Screening", text: "PET Program" },
                { to: "/Blog", text: "Blog" },
                { to: "/Contact", text: "Contact" }
              ].map((link, index) => (
                <motion.li 
                  key={link.to}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4,
                    delay: 0.6 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    x: 8,
                    scale: 1.05,
                    transition: { 
                      type: "spring",
                      stiffness: 400,
                      damping: 17
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={link.to} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 inline-block relative group"
                  >
                    <span className="relative z-10">{link.text}</span>
                    <motion.span 
                      className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary-foreground to-transparent"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.h4 
              className="text-xl font-bold mb-6"
              whileInView={{ 
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{ 
                duration: 2,
                ease: "easeInOut",
                delay: 0.2
              }}
            >
              Connect
            </motion.h4>
            <ul className="space-y-3">
              {[
                { href: "https://www.linkedin.com/company/pekamy-freshminds/", text: "LinkedIn" },
                { href: "https://www.instagram.com/pekamy_freshminds", text: "Instagram" },
                { href: "https://x.com/pekamyFreshmind", text: "Twitter" },
                { href: "https://www.facebook.com/share/14FUjmxamz7/", text: "Facebook" }
              ].map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4,
                    delay: 0.8 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    x: 8,
                    scale: 1.05,
                    transition: { 
                      type: "spring",
                      stiffness: 400,
                      damping: 17
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 inline-block relative group"
                  >
                    <span className="relative z-10">{link.text}</span>
                    <motion.span 
                      className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary-foreground to-transparent"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Animated divider */}
        <motion.div 
          className="relative mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent" />
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-foreground/60 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Copyright section with enhanced animation */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: 1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.p 
            className="text-primary-foreground/60 text-sm"
            whileHover={{ 
              scale: 1.02,
              color: "rgba(255, 255, 255, 0.8)"
            }}
            transition={{ duration: 0.2 }}
          >
            © 2025 Pekamy Freshminds. All rights reserved.
          </motion.p>
        </motion.div>
        
        {/* Floating particles effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-foreground/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;