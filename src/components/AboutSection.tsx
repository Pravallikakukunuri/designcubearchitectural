import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">About Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground leading-tight">
              Where Form Meets <span className="italic">Function</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-muted-foreground leading-relaxed text-base mb-6">
              Design Cube.DC is a premier architectural design studio based in Hyderabad, Telangana. We specialize in creating spaces that harmonize modern aesthetics with practical living.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed text-base mb-8">
              Our team brings together creativity, precision, and deep understanding of materials to deliver residential and commercial projects that exceed expectations. Every line we draw is intentional, every space we shape tells a story.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-border pt-8">
              {[
                { number: "50+", label: "Projects" },
                { number: "5.0", label: "Rating" },
                { number: "10+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-semibold text-foreground">{stat.number}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
