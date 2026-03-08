import { motion } from 'framer-motion';
import { User, Briefcase, Code2, Wrench, Mail } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Projects', icon: Code2 },
  { name: 'Experience', icon: Briefcase },
  { name: 'Skills', icon: Wrench },
  { name: 'About', icon: User },
  { name: 'Contact', icon: Mail },
];

export default function Header() {
  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 px-4 pointer-events-none"
      >
        <nav className="glass-panel px-6 py-3 rounded-full pointer-events-auto flex items-center gap-6 shadow-xl">
          <a href="#" className="font-serif font-bold text-lg text-primary mr-4 tracking-wider">
            <img className="w-10 h-10" src="/assets/favicon/favicon-96x96.png" alt="Logo" />
          </a>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Mobile Bottom Header (App Menu) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="md:hidden fixed bottom-6 left-4 right-4 z-40 flex justify-center pointer-events-none"
      >
        <nav className="glass-panel w-full max-w-sm px-6 py-4 rounded-3xl pointer-events-auto flex items-center justify-between shadow-xl bg-background/80">
          {NAV_LINKS.map(link => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium">{link.name}</span>
              </a>
            );
          })}
        </nav>
      </motion.div>
    </>
  );
}
