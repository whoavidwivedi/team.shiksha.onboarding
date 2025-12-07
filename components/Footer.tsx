import React from 'react';
import { Github, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-6 h-6 bg-navy-900 dark:bg-white rounded-md flex items-center justify-center text-white dark:text-navy-900 font-bold text-xs">
              TS
            </div>
            <h3 className="text-lg font-bold text-navy-900 dark:text-white">Team Shiksha</h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Empowering developers to build tomorrow.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/TeamShiksha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-slate-50 dark:bg-slate-900 rounded-full text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://team.shiksha/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-slate-50 dark:bg-slate-900 rounded-full text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Website"
          >
            <Globe size={20} />
          </a>
          <a
            href="https://x.com/TeamShiksha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-slate-50 dark:bg-slate-900 rounded-full text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="X"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 text-center text-slate-400 dark:text-slate-600 text-sm">
        &copy; {new Date().getFullYear()} Team.Shiksha. All rights reserved.
      </div>
    </footer>
  );
};