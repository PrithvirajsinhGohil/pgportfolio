import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (B.C.A.)",
    institution: "MK Bhavnagar University",
    year: "2015",
    grade: "2nd Class"
  },
  {
    degree: "Higher Secondary Certificate (H.S.C.)",
    institution: "G.S.E.B.",
    year: "March 2011",
    grade: "68.00%"
  },
  {
    degree: "Secondary School Certificate (S.S.C.)",
    institution: "G.S.E.B.",
    year: "March 2009",
    grade: "56.00%"
  }
];

export default function Education() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="w-10 h-10 text-primary" />
          <h2 className="text-4xl font-serif font-bold text-foreground">Education</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-start border border-border/50 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <div className="text-2xl font-serif font-bold text-primary mb-2">{edu.year}</div>
              <h3 className="text-lg font-semibold text-foreground mb-1 mt-auto">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm font-medium mb-3">{edu.institution}</p>
              <span className="inline-block mt-auto px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-mono">
                {edu.grade}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
