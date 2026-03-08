import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Let's Build Something Great</h2>
            <p className="text-lg text-muted-foreground font-light mb-12 max-w-md">
              Whether you have a project in mind, a question about my work, or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-8">
              <a href="mailto:gohilhpg@gmail.com" className="flex items-center gap-6 group w-fit">
                <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">gohilhpg@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918347044107" className="flex items-center gap-6 group w-fit">
                <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary group-hover:text-black transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-xl font-medium text-foreground group-hover:text-secondary transition-colors">+91 8347044107</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-xl font-medium text-foreground">Bhavnagar, Gujarat 364004</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
