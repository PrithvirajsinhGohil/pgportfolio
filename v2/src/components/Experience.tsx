import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    company: "Insomniacs Pvt. Ltd.",
    role: "Sr. Software Engineer & Team Lead",
    period: "Current", // Actual dates not provided, using context
    description: [
      "Managed a cross-functional team of 6 members delivering 2 major full-stack projects.",
      "Worked closely with high-profile enterprise clients including Prestige and Raymond.",
      "Ensured code quality, timely delivery, and scalable architectural decisions."
    ]
  },
  {
    company: "Brikkin Marketech Pvt. Ltd.",
    role: "Sr. Software Engineer & Team Lead",
    period: "Mid-Level",
    description: [
      "Led a development team of 3 members focusing on 2 core in-house products.",
      "Actively resolved complex technical issues and deployed multiple new features.",
      "Collaborated with various clients to troubleshoot and fix software constraints."
    ]
  },
  {
    company: "Midnight Digital Pvt. Ltd.",
    role: "Jr. Software Engineer",
    period: "Early Career",
    description: [
      "Started as a front-end developer building single-page microsites, eventually transitioning to a full-stack role.",
      "Completed multiple microsites and full-stack projects within a 3-member team.",
      "Partnered with Insomniacs Pvt. Ltd. to deliver high-quality web solutions."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground">Professional Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-8 relative border-l-4 border-l-secondary shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border pb-6 md:pb-0 md:pr-6">
                <h3 className="text-2xl font-bold font-serif text-foreground">{exp.company}</h3>
                <span className="inline-block mt-2 text-sm font-mono bg-secondary/20 text-secondary w-fit px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {exp.role}
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
