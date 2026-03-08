import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

const FLOATING_ICONS = [
  { name: 'Node.js', color: 'bg-green-500', pos: 'top-5 left-0 md:-left-10', delay: 0, y: [-15, 15, -15], parallaxFactor: 0.05 },
  { name: 'React', color: 'bg-blue-500', pos: 'bottom-10 -right-4 md:-right-12', delay: 1, y: [15, -15, 15], parallaxFactor: -0.05 },
  { name: 'Laravel', color: 'bg-red-500', pos: 'top-20 -right-2 md:-right-16', delay: 0.5, y: [-10, 20, -10], parallaxFactor: 0.08 },
  { name: 'PHP', color: 'bg-indigo-400', pos: 'bottom-5 left-2 md:-left-5', delay: 1.5, y: [20, -10, 20], parallaxFactor: -0.06 },
  { name: 'Git', color: 'bg-orange-600', pos: '-top-5 right-10 md:right-10', delay: 2, y: [-20, 10, -20], parallaxFactor: 0.07 },
  { name: 'Vercel', color: 'bg-foreground', pos: '-bottom-5 right-20 md:right-32', delay: 2.5, y: [10, -20, 10], parallaxFactor: -0.04 },
];



export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to make the parallax feel natural and not jittery
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Transform values for the main image (subtle 3D rotation)
  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Transform values for the background dashed ring
  const ringTranslateX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const ringTranslateY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // Calculate normalized mouse position (-0.5 to 0.5) from the center of the hero section
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      // Reset position when mouse leaves the section
      mouseX.set(0);
      mouseY.set(0);
    };

    const section = containerRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{ perspective: 1000 }}
    >

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10 pointer-events-none">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full glass-panel w-fit"
          >
            <span className="font-mono text-sm tracking-widest text-secondary">PORTFOLIO V2</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] tracking-tight">
            Prithvirajsinh <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-1">Gohil</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl">
            Sr. Software Engineer & Full Stack Developer focusing on scalable products and elegant user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:scale-105 transition-transform"
            >
              View Portfolio <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full glass-panel font-medium flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="/resume_text.txt"
              target="_blank"
              className="px-6 py-3 rounded-full font-medium flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download size={18} /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex justify-center items-center mt-12 lg:mt-0 pointer-events-auto"
        >
          {/* Decorative rotating dashed circle with subtle parallax */}
          <motion.div
            style={{ x: ringTranslateX, y: ringTranslateY }}
            className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-dashed border-primary/30 animate-[spin_30s_linear_infinite]"
          />

          {/* Parallax 3D Profile Image */}
          <motion.div
            style={{ rotateX, rotateY, zIndex: 10 }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background glass-panel shadow-[0_30px_50px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_50px_-15px_rgba(255,255,255,0.05)] transition-shadow duration-300 transform-gpu"
          >
            <img
              src="/profile.jpeg"
              alt="Prithvirajsinh Gohil"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Floating tech badges with Parallax translation */}
          {FLOATING_ICONS.map((icon) => {
            // Create individual transform values based on their parallaxFactor
            const iconX = useTransform(springX, [-0.5, 0.5], [-100 * icon.parallaxFactor, 100 * icon.parallaxFactor]);
            const iconY = useTransform(springY, [-0.5, 0.5], [-100 * icon.parallaxFactor, 100 * icon.parallaxFactor]);

            return (
              <motion.div
                key={icon.name}
                style={{ x: iconX, y: iconY }}
                className={cn("absolute z-20", icon.pos)}
              >
                {/* Also keeping the floating up/down subtle animation alongside the parallax mouse movement */}
                <motion.div
                  animate={{ y: icon.y }}
                  transition={{ repeat: Infinity, duration: 4, delay: icon.delay, ease: "easeInOut" }}
                  className="glass-panel px-3 py-1 md:px-4 md:py-2 rounded-full font-mono text-[10px] md:text-xs shadow-lg flex items-center gap-2"
                >
                  <span className={cn("w-2 h-2 rounded-full", icon.color)}></span> {icon.name}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  );
}
