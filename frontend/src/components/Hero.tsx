import React, { useEffect, useState } from "react";
import { workshop } from "../data/workshopData";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    title: "Smart Coding",
    caption: "Creative problem-solving with AI tools.",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
    title: "Robotics Lab",
    caption: "Hands-on builds and playful experiments.",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
    title: "Future Makers",
    caption: "A bright, inspiring learning journey.",
  },
];

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_25%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Text Content */}
          <div className="w-full text-center lg:text-left lg:col-span-5 flex flex-col items-center lg:items-start">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium shadow-sm backdrop-blur-md">
              Summer Special • Ages {workshop.ageGroup}
            </span>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              {workshop.title}
            </h1>
            <p className="mx-auto lg:mx-0 mb-8 max-w-2xl text-base text-indigo-100 sm:text-lg">
              {workshop.tagline}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={scrollToForm}
                className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-gray-900 shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-yellow-300"
              >
                Enroll Now
              </button>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-indigo-50 shadow-sm backdrop-blur-md">
                Hands-on • Creative • Future-ready
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Carousel with separate thumbnails */}
          <div className="w-full lg:col-span-7 flex flex-col justify-center">
            <div className="w-full rounded-3xl border border-white/15 bg-slate-950/40 p-4 shadow-2xl backdrop-blur-md">
              {/* Main Carousel Image Viewport */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-inner group">
                {/* Images Container with Cross-Fade */}
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full overflow-hidden bg-slate-950">
                  {galleryImages.map((img, idx) => (
                    <div
                      key={img.title}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
                      />
                      {/* Fade Overlay for Caption */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-5 text-white z-20">
                        <span className="inline-block rounded bg-indigo-500/80 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider mb-2">
                          Slide {idx + 1} of {galleryImages.length}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-0.5">{img.title}</h3>
                        <p className="text-xs text-indigo-200">{img.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Left Control Arrow */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-sm border border-white/10 transition-all duration-250 opacity-0 group-hover:opacity-100 hover:bg-slate-900/80 hover:scale-105 active:scale-95"
                  aria-label="Previous slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                {/* Right Control Arrow */}
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-sm border border-white/10 transition-all duration-250 opacity-0 group-hover:opacity-100 hover:bg-slate-900/80 hover:scale-105 active:scale-95"
                  aria-label="Next slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>

              {/* Interactive Thumbnails (3 separate images below) */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={img.title}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`relative overflow-hidden rounded-xl border-2 p-1 text-left transition-all duration-300 hover:scale-[1.02] ${
                      idx === activeIndex
                        ? "border-yellow-400 bg-white/15 shadow-md shadow-yellow-400/20"
                        : "border-white/10 bg-slate-950/20 hover:border-white/30"
                    }`}
                  >
                    <div className="relative h-12 sm:h-16 w-full overflow-hidden rounded-lg">
                      <img
                        src={img.src}
                        alt={img.title}
                        className={`h-full w-full object-cover transition-opacity duration-300 ${
                          idx === activeIndex ? "opacity-100" : "opacity-60 hover:opacity-95"
                        }`}
                      />
                      {idx === activeIndex && (
                        <div className="absolute inset-0 bg-yellow-400/10" />
                      )}
                    </div>
                    <div className="mt-1.5 px-1 hidden sm:block">
                      <p className={`text-[0.7rem] font-bold truncate ${
                        idx === activeIndex ? "text-yellow-300" : "text-white/80"
                      }`}>
                        {img.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Bottom indicator & autoscroll status */}
              <div className="mt-3.5 flex items-center justify-between text-[0.65rem] text-indigo-200/80 px-1">
                <div className="flex gap-1.5">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? "w-6 bg-yellow-300" : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <span>Auto-playing • Click preview to jump</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

