import { create } from 'zustand';

type ThemeState = {
  isDarkMode: boolean;
  primaryColor: string;     // hsl representation string e.g. "345 100% 25%"
  secondaryColor: string;   // hsl representation string e.g. "40 100% 50%"
  toggleDarkMode: () => void;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
};

export const useThemeStore = create<ThemeState>((set) => {
  // Check system preference
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  };

  return {
    isDarkMode: getInitialTheme(),
    primaryColor: "345 100% 25%", // Maroon by default
    secondaryColor: "40 100% 50%", // Light Orange default
    toggleDarkMode: () =>
      set((state) => {
        const newMode = !state.isDarkMode;
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme', newMode ? 'dark' : 'light');
          if (newMode) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
        return { isDarkMode: newMode };
      }),
    setPrimaryColor: (color) => {
      set({ primaryColor: color });
      if (typeof window !== 'undefined') {
         document.documentElement.style.setProperty('--primary', color);
         document.documentElement.style.setProperty('--ring', color);
      }
    },
    setSecondaryColor: (color) => {
      set({ secondaryColor: color });
      if (typeof window !== 'undefined') {
         document.documentElement.style.setProperty('--secondary', color);
      }
    },
  };
});
