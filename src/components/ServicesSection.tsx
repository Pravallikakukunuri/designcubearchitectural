import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Home, Building2, Palette } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Architectural Design",
    description: "Complete architectural planning from concept to construction-ready drawings for residential and commercial projects.",
  },
  {
    icon: Home,
    title: "Interior Design",
    description: "Thoughtfully curated interiors that balance aesthetics, comfort, and functionality for modern living.",
  },
  {
    icon: Building2,
    title: "3D Visualization",
    description: "Photorealistic 3D renders and walkthroughs that bring your project to life before construction begins.",
  },
  {
    icon: Palette,
    title: "Renovation & Remodeling",
    description: "Breathing new life into existing spaces with innovative redesign and structural improvements.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background p-8 border border-border hover:border-accent/30 transition-colors group"
            >
              <service.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
