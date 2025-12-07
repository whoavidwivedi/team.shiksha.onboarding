import React from 'react';
import { Users, ArrowRight, ArrowDown } from 'lucide-react';
import { STATS } from '../constants';

export const Hero: React.FC = () => {
  const scrollToSteps = () => {
    document.getElementById('how-to-join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-brand-50/50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 dark:bg-navy-900/50 text-navy-700 dark:text-navy-200 text-sm font-bold mb-6 border border-transparent dark:border-navy-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-navy-500"></span>
                </span>
                Open for new members
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-navy-900 dark:text-white mb-6 leading-[1.1]">
              Your Journey to Joining <br className="hidden lg:block"/>
              <span className="text-navy-600 dark:text-navy-400">Team Shiksha</span> Starts Here.
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We've created a structured roadmap to help you integrate into our community. 
              Follow the steps below to access projects, mentors, and cohorts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={scrollToSteps}
                className="px-8 py-4 bg-navy-800 hover:bg-navy-700 dark:bg-navy-600 dark:hover:bg-navy-500 text-white rounded-xl font-bold transition-all duration-300 shadow-xl shadow-navy-800/20 dark:shadow-navy-900/40 transform hover:-translate-y-1 flex items-center gap-2"
              >
                Start Onboarding <ArrowDown size={18} />
              </button>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10 dark:shadow-black/50 bg-white dark:bg-slate-800 p-4 border border-slate-100 dark:border-slate-700 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-auto rounded-xl grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Floating Elements */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-50 dark:border-slate-700 hidden md:block animate-float">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 dark:bg-green-900/30 p-2.5 rounded-full">
                            <Users className="text-green-600 dark:text-green-400" size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Community</p>
                            <p className="text-lg font-bold text-navy-900 dark:text-white">5000+ Members</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-200/40 to-blue-200/40 dark:from-green-900/20 dark:to-blue-900/20 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-24 pt-8 border-t border-navy-900/5 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
                <div key={stat.id} className="text-center group cursor-default">
                    <h3 className="text-3xl font-bold text-navy-900 dark:text-white mb-1 group-hover:text-navy-600 dark:group-hover:text-navy-400 transition-colors">{stat.value}</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};