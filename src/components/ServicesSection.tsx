import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LayoutPanelTop, Building2, Palette, Crown, TreePine, Box } from "lucide-react";

const services = [
  {
    icon: LayoutPanelTop,
    title: "Floor Plan",
    description: "Detailed and efficient floor plans designed to maximize space utilization and flow for every type of property — with 100% Vastu compliance.",
  },
  {
    icon: Building2,
    title: "Elevation Designing",
    description: "Stunning exterior elevation designs that define the character and curb appeal of your building with modern aesthetics and structural precision.",
  },
  {
    icon: Palette,
    title: "Interior Designing",
    description: "Thoughtfully curated interiors that balance aesthetics, comfort, and functionality — transforming spaces into elegant living experiences.",
  },
  {
    icon: Crown,
    title: "Premium Executions",
    description: "End-to-end premium construction and finishing services ensuring the highest quality materials, craftsmanship, and timely project delivery.",
  },
  {
    icon: TreePine,
    title: "Landscaping",
    description: "Creative landscape design solutions that enhance outdoor spaces with lush greenery, hardscapes, water features, and sustainable garden planning.",
  },
  {
    icon: Box,
    title: "3D Isometric",
    description: "Detailed 3D isometric views that provide a comprehensive perspective of your project, helping you visualize every angle before construction.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
