import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@/assets/residential-building.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/living-area.png";
import project5 from "@/assets/floor-plan.png";
import project6 from "@/assets/project-6.jpg";
import arch1 from "@/assets/arch-1.png";
import arch2 from "@/assets/arch-2.png";
import arch3 from "@/assets/arch-3.png";
import arch4 from "@/assets/arch-4.png";
import arch5 from "@/assets/arch-5.png";
import arch6 from "@/assets/arch-6.png";
import arch7 from "@/assets/arch-7.png";
import floor1 from "@/assets/floor-1.png";
import floor2 from "@/assets/floor-2.png";
import floor3 from "@/assets/floor-3.png";
import floor4 from "@/assets/floor-4.png";
import floor5 from "@/assets/floor-5.png";
import kitchen1 from "@/assets/kitchen-1.png";
import kitchen2 from "@/assets/kitchen-2.png";
import living1 from "@/assets/living-1.png";
import living2 from "@/assets/living-2.png";
import living3 from "@/assets/living-3.png";
import living4 from "@/assets/living-4.png";
import living5 from "@/assets/living-5.png";
import living6 from "@/assets/living-6.png";
import living7 from "@/assets/living-7.png";
import living8 from "@/assets/living-8.png";
import living9 from "@/assets/living-9.png";
import living10 from "@/assets/living-10.png";

const architectureGallery = [arch1, arch2, arch3, arch4, arch5, arch6, arch7];
const planningGallery = [floor1, floor2, floor3, floor4, floor5];
const interiorGallery = [kitchen1, kitchen2];
const livingAreaGallery = [living1, living2, living3, living4, living5, living6, living7, living8, living9, living10];

const projects = [
  { image: project1, title: "Modern Residential Complex", category: "Residential" },
  { image: project2, title: "Modular Kitchen", category: "Interior" },
  { image: project3, title: "Office Space Design", category: "Commercial" },
  { image: project4, title: "Living Area", category: "Interior" },
  { image: project5, title: "Floor Plan", category: "Planning" },
  { image: project6, title: "Elevation Designs", category: "Architecture" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeGallery, setActiveGallery] = useState<string[]>([]);

  const galleries: Record<string, string[]> = {
    Architecture: architectureGallery,
    Planning: planningGallery,
    Interior: interiorGallery,
    "Living Area": livingAreaGallery,
    Residential: [project1],
    Commercial: [project3],
  };

  const handleProjectClick = (title: string, category: string) => {
    const selectedGallery = galleries[title] ?? galleries[category];

    if (selectedGallery) {
      setActiveGallery(selectedGallery);
      setCurrentImage(0);
      setGalleryOpen(true);
    }
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % activeGallery.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);

  return (
    <>
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
                onClick={() => handleProjectClick(project.title, project.category)}
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

      {/* Lightbox Gallery */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setGalleryOpen(false)}
          >
            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute top-6 right-6 text-white/80 hover:text-white z-50"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 text-white/60 hover:text-white z-50"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.img
              key={currentImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={activeGallery[currentImage]}
              alt={`Project ${currentImage + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 text-white/60 hover:text-white z-50"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="absolute bottom-6 flex gap-2">
              {activeGallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentImage ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
