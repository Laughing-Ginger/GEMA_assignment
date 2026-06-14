import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from "./components/LearningOutcomes";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm />
      <footer className="border-t border-slate-100 bg-white py-8 text-xs text-slate-400 font-medium tracking-wide">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3.5 bg-indigo-600 rounded-full inline-block" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-800">
              Kidrove
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px]">
            <span>© {new Date().getFullYear()} Kidrove. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-200">•</span>
            <span className="text-indigo-600 font-semibold">AI & Robotics Summer Workshop</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
