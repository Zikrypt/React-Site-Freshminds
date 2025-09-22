import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-reveal bg-gradient-to-br from-secondary to-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-gradient mb-4">Pekamy Fresh Minds</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Empowering the next generation of professionals through innovative training, 
              screening, and placement programs.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/Screening" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">PET Program</Link></li>
              <li><Link to="/Blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</Link></li>
              <li><Link to="/Contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/pekamy-freshminds/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/pekamy_freshminds" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Instagram</a></li>
              <li><a href="https://x.com/pekamyFreshmind" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Twitter</a></li>
              <li><a href="https://www.facebook.com/share/14FUjmxamz7/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Pekamy Freshminds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;