import { useEffect } from 'react';
import { useThemeStore } from './store/themeStore';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const { isDarkMode, primaryColor, secondaryColor } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.style.setProperty('--primary', primaryColor);
    root.style.setProperty('--secondary', secondaryColor);
  }, [isDarkMode, primaryColor, secondaryColor]);

  return (
    <div className="relative min-h-screen font-sans antialiased text-foreground selection:bg-primary/30">
      {/* Background Effects */}
      <div className="noise-bg" />
      <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none" />
      
      {/* Soft Glow Orbs - Animated & Premium */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px] pointer-events-none animate-orb-float" style={{ animationDelay: '0s' }} />
      <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none animate-orb-float" style={{ animationDelay: '-10s' }} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Theme Settings (Floating) */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <Header />
        
        <main className="flex-1 space-y-24">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Education />
          <div className="mb-24">
            <Contact />
          </div>
        </main>
        
        <footer className="py-8 text-center border-t border-border mt-auto">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Prithvirajsinh Gohil. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
