import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/residential-building.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/living-area.png";
import project5 from "@/assets/floor-plan.png";
import project6 from "@/assets/project-6.jpg";

const projects = [
  { image: project1, title: "Modern Residential Complex", category: "Residential" },
  { image: project2, title: "Luxury Kitchen", category: "Interior" },
  { image: project3, title: "Office Space Design", category: "Commercial" },
  { image: project4, title: "Living Area", category: "Interior" },
  { image: project5, title: "Floor Planning", category: "Planning" },
  { image: project6, title: "Elevation Designs", category: "Architecture" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">Portfolio</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500 flex items-end">
                <div className="p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/70">{project.category}</p>
                  <p className="font-display text-xl text-primary-foreground mt-1">{project.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
