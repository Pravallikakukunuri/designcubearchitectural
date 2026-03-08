const Footer = () => (
  <footer className="py-8 bg-foreground">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg text-primary-foreground">
        Design Cube<span className="text-accent">.DC</span>
      </p>
      <p className="font-body text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Design Cube.DC. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
