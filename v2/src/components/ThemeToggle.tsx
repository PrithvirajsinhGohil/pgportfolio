import { useState } from 'react';
import { Moon, Sun, Palette } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { cn } from '../lib/utils';

const COLORS = [
  { name: 'Maroon', hsl: '345 100% 25%', bgClass: 'bg-[#800020]' },
  { name: 'Blue', hsl: '221 83% 53%', bgClass: 'bg-blue-600' },
  { name: 'Emerald', hsl: '158 64% 52%', bgClass: 'bg-emerald-500' },
  { name: 'Purple', hsl: '271 91% 65%', bgClass: 'bg-purple-500' },
  { name: 'Orange', hsl: '24 98% 50%', bgClass: 'bg-orange-500' },
];

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode, setPrimaryColor, primaryColor, setSecondaryColor, secondaryColor } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="glass-panel rounded-full p-2 flex items-center gap-2">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          title="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="w-px h-6 bg-border mx-1"></div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
            isOpen && "bg-black/10 dark:bg-white/20"
          )}
          title="Theme Colors"
        >
          <Palette size={20} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 glass-panel rounded-2xl p-4 w-52 shadow-2xl origin-top-right animate-in fade-in zoom-in-95 duration-200">
          <h3 className="text-sm font-semibold mb-3">Primary Color</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {COLORS.map((color) => (
              <button
                key={`primary-${color.name}`}
                onClick={() => setPrimaryColor(color.hsl)}
                className={cn(
                  "w-8 h-8 rounded-full border-2 transition-transform hover:scale-110",
                  color.bgClass,
                  primaryColor === color.hsl ? "border-foreground scale-110" : "border-transparent"
                )}
                title={color.name}
              />
            ))}
          </div>
          
          <h3 className="text-sm font-semibold mb-3">Secondary Color</h3>
          <div className="flex flex-wrap gap-2">
            {COLORS.map((color) => (
              <button
                key={`secondary-${color.name}`}
                onClick={() => setSecondaryColor(color.hsl)}
                className={cn(
                  "w-8 h-8 rounded-full border-2 transition-transform hover:scale-110",
                  color.bgClass,
                  secondaryColor === color.hsl ? "border-foreground scale-110" : "border-transparent"
                )}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
