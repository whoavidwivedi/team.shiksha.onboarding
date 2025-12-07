import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Step } from '../types';

interface StepCardProps {
  step: Step;
  index: number;
  isLast: boolean;
}

export const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the card is visible
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
      `}
    >
      
      {/* Mobile Icon/Node Wrapper */}
      <div className={`md:hidden absolute left-6 w-4 h-4 -ml-2 rounded-full border-2 border-white dark:border-slate-900 z-10 ring-4 ring-navy-50 dark:ring-navy-900/30 transition-colors duration-300 ${isHovered ? 'bg-navy-600 dark:bg-navy-500' : 'bg-navy-200 dark:bg-navy-800'}`}></div>

      {/* Content Block */}
      <div className={`flex-1 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-300 relative group cursor-default
            ${isHovered 
                ? 'border-navy-200 dark:border-navy-700 shadow-xl shadow-navy-900/5 dark:shadow-navy-900/20 ring-1 ring-navy-50 dark:ring-navy-800 z-10 -translate-y-1' 
                : 'border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-none'}
        `}>
          {/* Connector Line for Desktop Card */}
          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-[2px] transition-colors duration-300 ${isEven ? '-right-16' : '-left-16'} ${isHovered ? 'bg-navy-300 dark:bg-navy-700' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
          
          <div className={`flex flex-col gap-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
            <div className={`inline-flex items-center justify-center p-3 rounded-xl w-fit mb-2 transition-colors duration-300
                ${isHovered ? 'bg-navy-600 text-white shadow-lg shadow-navy-600/30 dark:shadow-navy-900/40' : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
              <step.icon size={24} />
            </div>
            
            <div>
                <div className={`text-xs font-bold uppercase tracking-wider mb-2 transition-colors duration-300 ${isHovered ? 'text-navy-600 dark:text-navy-400' : 'text-slate-400 dark:text-slate-500'}`}>
                    Step {index + 1}
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                    {step.description}
                </p>
            </div>

            {step.actionText && (
              <a 
                href={step.actionLink || '#'} 
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg transition-all mt-2
                  ${isHovered 
                    ? 'bg-navy-50 dark:bg-navy-900/50 text-navy-700 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-900' 
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                {step.actionText} <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Center Node (Desktop) */}
      <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-800 items-center justify-center z-10 shadow-sm transition-transform duration-500 delay-200 ${isVisible ? 'scale-100' : 'scale-0'}`}>
        <div className={`w-4 h-4 rounded-full transition-all duration-300 ${isHovered ? 'bg-navy-600 dark:bg-navy-500 shadow-[0_0_12px_rgba(14,165,233,0.6)] scale-125' : 'bg-slate-300 dark:bg-slate-600'}`}></div>
      </div>

      {/* Empty Spacer for alternating layout */}
      <div className="flex-1 hidden md:block"></div>
      
    </div>
  );
};