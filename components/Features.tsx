import React from 'react';
import { FEATURES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy-900">What We're Building</h2>
            <p className="mt-4 text-slate-500">Contributing to open source projects that solve real problems.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-green-600 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                <feature.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
              
              <p className="text-slate-500 leading-relaxed mb-6 flex-grow">
                {feature.description}
              </p>

              <div className="pt-4 border-t border-slate-50 flex items-center text-sm font-bold text-navy-600 group-hover:text-navy-800 cursor-pointer">
                View Project <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};