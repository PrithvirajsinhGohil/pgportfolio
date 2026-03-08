import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: "Backend & Architecture",
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ["Node.js", "Express.js", "Core PHP", "Laravel", "MongoDB/SQL", "REST APIs", "Redis", "Docker"]
  },
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6 text-secondary" />,
    skills: ["React", "HTML5", "CSS3", "SCSS", "JavaScript", "jQuery", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Tools & OS",
    icon: <Wrench className="w-6 h-6 text-emerald-500" />,
    skills: ["Git", "Linux (Ubuntu/Mint)", "Windows", "Agile Methodologies", "Debugging/Testing"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground">Technical Arsenal</h2>
          <p className="text-muted-foreground mt-4 font-light">
            Technologies and tools I use to build robust and scalable products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel p-8 rounded-2xl border-t-4 hover:-translate-y-2 transition-transform duration-300"
              style={{
                borderTopColor: index === 0 ? 'var(--primary)' : index === 1 ? 'var(--secondary)' : '#10b981'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 glass-panel rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-background border border-border text-foreground hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
