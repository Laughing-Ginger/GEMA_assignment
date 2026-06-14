import React from "react";
import { learningOutcomes, workshop } from "../data/workshopData";

const LearningOutcomes: React.FC = () => {
  return (
    <section id="outcomes" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-24">
      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-sm">
        {/* Title with Vertical Pill */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-7 bg-indigo-600 rounded-full inline-block flex-shrink-0" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
            What you'll learn
          </h2>
        </div>

        {/* Narrative Paragraph */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
          {workshop.introduction}
        </p>

        {/* Bullets/Outcomes Grid */}
        <div className="border-t border-slate-100 pt-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
            Key Learning Outcomes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {learningOutcomes.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5.5 h-5.5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[14px] leading-relaxed text-slate-600">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
