import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const PROJECTS = [
  {
    id: 1,
    title: "Enterprise E-Commerce Platform",
    category: "Professional Work",
    description: "A highly scalable full-stack e-commerce solution built for high traffic usage. Includes advanced inventory management, payment integrations, and real-time analytics.",
    tech: ["Node.js", "React", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 2,
    title: "AI Chat Assistant",
    category: "Personal Projects",
    description: "A generative AI chat application that integrates deeply with vector databases to provide context-aware responses and workflow automation.",
    tech: ["Laravel", "OpenAI API", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    id: 3,
    title: "Real Estate Property Manager",
    category: "Professional Work",
    description: "Developed during my time at Brikkin. A robust internal tool for managing real estate listings, client follow-ups, and automated reporting.",
    tech: ["Core PHP", "Bootstrap", "MySQL"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("Professional Work");

  const filteredProjects = PROJECTS.filter(p => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground font-light max-w-xl">
              A selection of products and tools I've built, reflecting my journey across various teams and personal exploration.
            </p>
          </div>

          <div className="glass-panel rounded-full p-1 flex">
            {["Professional Work", "Personal Projects"].map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  filter === tab ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-2xl overflow-hidden group border border-border flex flex-col shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold font-serif mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-6 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <a href="#" className="flex-1 flex justify-center items-center gap-2 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
                      Live Demo <ExternalLink size={16} />
                    </a>
                    <a href="#" className="p-2 rounded-lg border border-border hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <Github size={20} className="text-foreground" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
