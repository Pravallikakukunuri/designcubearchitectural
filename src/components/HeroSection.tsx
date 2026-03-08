import { motion } from "framer-motion";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Modern luxury interior design" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-6 pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-4"
        >
          Architectural Design Studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-tight max-w-3xl"
        >
          Crafting Spaces <br />
          <span className="italic">That Inspire</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-primary-foreground/80 mt-6 max-w-lg text-base md:text-lg"
        >
          Transforming visions into architectural masterpieces in Vijayawada and beyond.
        </motion.p>
        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 inline-block w-fit font-body text-sm uppercase tracking-widest border border-primary-foreground/40 text-primary-foreground px-8 py-3 hover:bg-primary-foreground hover:text-foreground transition-colors"
        >
          View Our Work
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
