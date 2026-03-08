import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Mail } from "lucide-react";

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
                    Satya Narayana Nagar, Ramalingeswara Nagar,<br />
                    Vijayawada, Andhra Pradesh 520013, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-body text-sm font-medium text-foreground">Working Hours</p>
                  <p className="font-body text-sm text-muted-foreground">
                    Monday – Saturday: 9:00 AM – 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-body text-sm font-medium text-foreground">Email</p>
                  <p className="font-body text-sm text-muted-foreground">hello@designcubedc.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="font-body text-sm uppercase tracking-widest bg-foreground text-background px-8 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
