import React from 'react';
import { STEPS } from '../constants';
import { StepCard } from './StepCard';

export const Walkthrough: React.FC = () => {
  return (
    <section id="how-to-join" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 dark:text-white mb-6">
            Onboarding Roadmap
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Follow this exact path to join the team. Each step is designed to help you understand our culture and workflow.
          </p>
        </div>

        <div className="relative">
            {/* Central Line - Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 transform -translate-x-1/2 rounded-full"></div>
            
            {/* Left Line - Mobile */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 rounded-full"></div>

            <div className="space-y-12 md:space-y-0">
                {STEPS.map((step, index) => (
                    <StepCard 
                        key={step.id} 
                        step={step} 
                        index={index} 
                        isLast={index === STEPS.length - 1}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};