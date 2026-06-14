import React, { useState } from "react";
import { faqs } from "../data/workshopData";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-24">
      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading & Subtext */}
          <div className="w-full lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-7 bg-indigo-600 rounded-full inline-block flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Have questions about the AI & Robotics Summer Workshop? Explore the answers to the most common queries here. 
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed mt-4">
              Can't find what you are looking for? Fill out the registration form below, and our team will get in touch with you shortly.
            </p>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="w-full lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border border-slate-100 rounded-2xl p-4 transition-all duration-300 ${
                    isOpen ? "bg-indigo-50/20 border-indigo-100" : "bg-slate-50/35 hover:bg-slate-50/60"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex justify-between items-center text-left font-semibold text-slate-800 focus:outline-none"
                  >
                    <span className="text-[14px] sm:text-[15px]">{faq.question}</span>
                    <span className="flex-shrink-0 ml-4">
                      <svg
                        className={`w-5 h-5 text-indigo-600 transition-transform duration-300 ${
                          isOpen ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-2.5" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
