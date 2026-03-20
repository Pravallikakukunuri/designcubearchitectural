import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">Get In Touch</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-8">
              Let's Build <span className="italic">Together</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-body text-sm font-medium text-foreground">Location</p>
                  <p className="font-body text-sm text-muted-foreground">
                    Hyderabad, Vijayawada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-body text-sm font-medium text-foreground">Working Hours</p>
                  <p className="font-body text-sm text-muted-foreground">
                    Monday – Saturday: 10:00 AM – 8:00 PM<br />
                    Sunday: 10:30 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-body text-sm font-medium text-foreground">Email</p>
                  <p className="font-body text-sm text-muted-foreground">designcube.dc@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-body text-sm font-medium text-foreground">Instagram</p>
                  <a href="https://instagram.com/design_cube_dc" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-accent transition-colors">@design_cube_dc</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
            action="https://formspree.io/f/xzdjogrk"
            method="POST"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Tell us about your project... *"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="font-body text-sm uppercase tracking-widest bg-foreground text-background px-8 py-3 hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
