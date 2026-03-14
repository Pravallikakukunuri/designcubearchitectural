import { Phone, Mail, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="py-10 bg-foreground">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="font-display text-lg text-primary-foreground">
        Design Cube<span className="text-accent">.DC</span>
      </p>
      <div className="flex items-center gap-6 text-primary-foreground/70">
        <a href="tel:+917013130143" className="flex items-center gap-2 font-body text-xs hover:text-accent transition-colors">
          <Phone className="w-3.5 h-3.5" /> +91 7013130143
        </a>
        <a href="mailto:designcube.dc@gmail.com" className="flex items-center gap-2 font-body text-xs hover:text-accent transition-colors">
          <Mail className="w-3.5 h-3.5" /> designcube.dc@gmail.com
        </a>
        <a href="https://instagram.com/DESIGN_CUBE_DC" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-xs hover:text-accent transition-colors">
          <Instagram className="w-3.5 h-3.5" /> @DESIGN_CUBE_DC
        </a>
      </div>
      <p className="font-body text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Design Cube.DC. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
