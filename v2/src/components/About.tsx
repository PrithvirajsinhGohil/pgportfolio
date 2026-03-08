import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="relative pl-6 md:pl-10 border-l-4 border-primary">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground font-semibold italic leading-snug mb-6 text-balance">
              "About Me."
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-lg text-muted-foreground font-light leading-relaxed">
            <div>
              <p className="mb-6">
                I am a dedicated Sr. Software Engineer with over 4.2 years of extensive experience delivering full-stack projects and scalable solutions. My journey started as a frontend developer focusing on single-page microsites and evolved into leading full-stack teams.
              </p>
              <p>
                As a team lead at Insomniacs Pvt. Ltd. and Brikkin Marketech Pvt. Ltd., I've successfully managed teams of up to 6 members, deploying multiple in-house products and resolving critical issues for prominent clients like Prestige and Raymond.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium text-foreground">Experience</span>
                  <span>4+ Years</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium text-foreground">Location</span>
                  <span>Bhavnagar, India</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium text-foreground">Languages</span>
                  <span>English, Hindi, Gujarati</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-medium text-foreground">Hobbies</span>
                  <span>Music & Gaming</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
