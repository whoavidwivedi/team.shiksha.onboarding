import React, { useState, useEffect } from 'react';
import { Github, Twitter, Disc, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm dark:shadow-slate-900/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className={`transition-all duration-300 ${scrolled ? 'w-8 h-8 text-sm' : 'w-10 h-10 text-base'} bg-navy-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-navy-900 font-bold shadow-lg shadow-navy-900/20 dark:shadow-none`}>
              TS
            </div>
            <div className={`font-bold tracking-tight text-navy-900 dark:text-white transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
            Team Shiksha
            </div>
        </div>
        
        <div className="flex items-center gap-4">
            <div className={`hidden md:flex items-center gap-6 transition-all duration-500 ease-in-out ${scrolled ? 'opacity-0 translate-x-10 pointer-events-none absolute right-16' : 'opacity-100 translate-x-0 relative'}`}>
                <a 
                href="https://github.com/TeamShiksha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                >
                    <Github size={20} />
                    <span className="hidden lg:inline">GitHub</span>
                </a>
                <a 
                href="https://discord.gg/team-shiksha-820923131064745994" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                >
                    <Disc size={20} />
                    <span className="hidden lg:inline">Discord</span>
                </a>
                <a 
                href="https://x.com/TeamShiksha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                >
                    <Twitter size={20} />
                    <span className="hidden lg:inline">Twitter</span>
                </a>
                
                <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>

                <a 
                    href="#how-to-join" 
                    className="px-6 py-2.5 rounded-lg bg-navy-800 text-white text-sm font-semibold hover:bg-navy-700 dark:bg-navy-600 dark:hover:bg-navy-500 transition-all shadow-lg shadow-navy-800/20 dark:shadow-navy-900/40"
                >
                    Start Journey
                </a>
            </div>

            {/* Dark Mode Toggle */}
            <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </div>
      </div>
    </nav>
  );
};