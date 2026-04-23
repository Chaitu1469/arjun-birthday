
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Flame, Sparkles, Star, Heart, Clock, Moon } from "lucide-react";

// --- IMPORT YOUR BABY PICS HERE ---
import image_0 from "./image_0.png";
import pic1 from "./pic1.jpeg";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.jpeg";

const galleryImages = [
  { id: 1, src: pic1, caption: "A Beautiful Start" },
  { id: 2, src: pic2, caption: "A Beautiful Heart" },
  { id: 3, src: pic3, caption: "A Beautiful Smile" },
  { id: 4, src: pic4, caption: "Just Like This Again" },
];

export default function MagicalBirthdayExperience() {
  const [isDiyaLit, setIsDiyaLit] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div
      className={`relative ${
        hasEntered ? "min-h-[100svh]" : "h-[100svh] overflow-hidden"
      } font-sans selection:bg-[#F4D06F] selection:text-[#050914] transition-colors duration-[2000ms] ${
        isDiyaLit ? "bg-[#0A0710]" : "bg-[#050914]"
      }`}
    >
      {/* --- STELLAR & RESPONSIVE STYLES --- */}
      <style>{`
        .stellar-card {
          background: rgba(19, 27, 50, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(244, 208, 111, 0.15);
          box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255,255,255,0.05);
        }
        
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Mobile-Flawless Infinite Marquee */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .marquee-wrapper {
          display: flex;
          width: max-content;
          animation: marquee 45s linear infinite;
          will-change: transform;
        }
        .marquee-wrapper:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Intro Screen Overlay (Grand Celestial Gates) */}
      <AnimatePresence>
        {!hasEntered && <WelcomeIntro onEnter={() => setHasEntered(true)} />}
      </AnimatePresence>

      {/* Midnight Background Layer */}
      <CelestialBackground isDiyaLit={isDiyaLit} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-[100svh] text-[#E0E6ED] overflow-x-hidden">
        <PopUpHero isDiyaLit={isDiyaLit} />
        <RealTimeCounter isDiyaLit={isDiyaLit} />
        <GoldenAuraTimeline isDiyaLit={isDiyaLit} />
        <EmbossedStats isDiyaLit={isDiyaLit} />
        <MajesticDiya lit={isDiyaLit} setLit={setIsDiyaLit} />
        <CuratedGallery isDiyaLit={isDiyaLit} />

        <footer className="py-8 md:py-12 text-center backdrop-blur-md border-t border-[#F4D06F]/10">
          <p className="font-sans font-medium tracking-[0.2em] md:tracking-[0.4em] text-[8px] md:text-[10px] uppercase text-[#8B9BB4] px-4">
            made with{" "}
            <Heart
              className="inline w-3 h-3 text-[#F4D06F] mx-1"
              fill="currentColor"
            />{" "}
            under the stars
          </p>
        </footer>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 0. INTRO SCREEN: Grand Celestial Gates Design with Astrolabe Seal
// ----------------------------------------------------------------------
function WelcomeIntro({ onEnter }) {
  return (
    <motion.div
      key="intro-screen"
      className="fixed inset-0 z-[100] pointer-events-none flex overflow-hidden bg-[#050914]"
    >
      {/* LEFT GATE */}
      <motion.div
        exit={{ x: "-100vw" }}
        transition={{ duration: 1.6, ease: [0.64, 0.04, 0.15, 1], delay: 0.4 }}
        className="absolute top-0 left-0 w-1/2 h-[100svh] bg-[#03050B] pointer-events-auto z-20 flex items-center justify-end overflow-visible border-r border-[#F4D06F]/20 shadow-[20px_0_50px_rgba(0,0,0,0.8)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(244,208,111,0.1)_0%,transparent_70%)]" />
      </motion.div>

      {/* RIGHT GATE */}
      <motion.div
        exit={{ x: "100vw" }}
        transition={{ duration: 1.6, ease: [0.64, 0.04, 0.15, 1], delay: 0.4 }}
        className="absolute top-0 right-0 w-1/2 h-[100svh] bg-[#03050B] pointer-events-auto z-20 flex items-center justify-start overflow-visible border-l border-[#F4D06F]/20 shadow-[-20px_0_50px_rgba(0,0,0,0.8)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(244,208,111,0.1)_0%,transparent_70%)]" />
      </motion.div>

      {/* CENTRAL ASTROLABE SEAL */}
      <motion.div
        exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="relative flex flex-col items-center justify-center text-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-[#F4D06F]/30 pointer-events-auto bg-[#050914]/80 backdrop-blur-2xl shadow-[0_0_60px_rgba(244,208,111,0.15)] mx-auto group"
        >
          {/* Subtle line extending top and bottom of the gate intersection */}
          <div className="absolute -top-40 bottom-auto left-1/2 w-[1px] h-40 bg-gradient-to-t from-[#F4D06F]/50 to-transparent -translate-x-1/2" />
          <div className="absolute top-auto -bottom-40 left-1/2 w-[1px] h-40 bg-gradient-to-b from-[#F4D06F]/50 to-transparent -translate-x-1/2" />

          {/* ORBITING RINGS (Astrolabe Effect) */}
          <div className="absolute inset-[-10px] rounded-full border border-dashed border-[#F4D06F]/20 animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-4 md:inset-6 rounded-full border border-[#F4D06F]/10" />
          <div className="absolute inset-8 md:inset-10 rounded-full border border-dotted border-[#F4D06F]/30 animate-[spin_40s_linear_infinite_reverse]" />

          {/* CONTENT INSIDE THE SEAL */}
          <div className="relative z-10 flex flex-col items-center justify-center pt-2">
            <Moon className="text-[#F4D06F] w-6 h-6 md:w-8 md:h-8 mb-4 md:mb-6 animate-pulse opacity-90 fill-[#F4D06F]/20" />

            <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-white mb-1 drop-shadow-[0_0_15px_rgba(244,208,111,0.3)]">
              Arjun
            </h1>
            <h2 className="font-serif italic text-[#F4D06F] text-5xl md:text-6xl mb-3 md:mb-4 leading-none pr-2">
              Aagman
            </h2>
            <p className="text-[9px] md:text-[11px] text-[#8B9BB4] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-6 md:mb-8 font-medium">
              1 Year of Joy
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(244,208,111,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnter}
              className="relative px-6 md:px-8 py-2 md:py-3 bg-[#F4D06F]/10 text-[#F4D06F] rounded-full tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-[10px] font-bold border border-[#F4D06F]/50 overflow-hidden group/btn outline-none transition-all"
            >
              <span className="relative z-10 group-hover/btn:text-[#050914] transition-colors duration-300">
                Unlock The Stars
              </span>
              <div className="absolute inset-0 bg-[#F4D06F] transform scale-y-0 group-hover/btn:scale-y-100 transition-transform origin-bottom duration-500 ease-out z-0" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ----------------------------------------------------------------------
// BACKGROUND: Stardust & Glowing Nebulas
// ----------------------------------------------------------------------
function CelestialBackground({ isDiyaLit }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate static stars for twinkling
    const generatedStars = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050914]">
      {/* Dynamic Nebulas */}
      <motion.div
        animate={{
          x: ["-5%", "5%", "-5%"],
          y: ["-5%", "5%", "-5%"],
          scale: isDiyaLit ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-[-10%] left-[-20%] w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] rounded-full blur-[100px] md:blur-[140px] transition-colors duration-[2000ms] ${
          isDiyaLit ? "bg-[#B84A39]/30" : "bg-[#1C2541]/40"
        }`}
      />

      <motion.div
        animate={{
          x: ["5%", "-5%", "5%"],
          y: ["5%", "-5%", "5%"],
          scale: isDiyaLit ? [1, 1.3, 1] : 1,
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-[-10%] right-[-20%] w-[130vw] h-[130vw] md:w-[90vw] md:h-[90vw] rounded-full blur-[120px] md:blur-[160px] transition-colors duration-[2000ms] ${
          isDiyaLit ? "bg-[#F4D06F]/20" : "bg-[#0B132B]/60"
        }`}
      />

      {/* Twinkling Stars Layer */}
      <div className="absolute inset-0 z-10">
        {stars.map((star, i) => (
          <motion.div
            key={`star-${i}`}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </div>

      {/* Ambient Vignette for cinematic depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)] z-20" />
    </div>
  );
}

// ----------------------------------------------------------------------
// 1. HERO: Cinematic Spotlight
// ----------------------------------------------------------------------
function PopUpHero({ isDiyaLit }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-12 md:pt-32 md:pb-16 px-4"
    >
      <motion.div
        style={{ y: yPos, opacity: opacityFade }}
        className="w-full max-w-6xl flex flex-col items-center z-20"
      >
        <div className="text-center mb-10 md:mb-16">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={`flex items-center justify-center gap-2 md:gap-4 text-[10px] sm:text-xs md:text-sm mb-4 md:mb-6 tracking-[0.3em] md:tracking-[0.5em] uppercase font-medium transition-colors duration-1000 ${
              isDiyaLit ? "text-[#FFB66B]" : "text-[#F4D06F]"
            }`}
          >
            <div className="w-6 md:w-16 h-px bg-current opacity-50" />
            Celestial Celebration
            <div className="w-6 md:w-16 h-px bg-current opacity-50" />
          </motion.span>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-none font-light text-white drop-shadow-lg"
          >
            Arjun Turns{" "}
            <span className="font-serif italic text-[#F4D06F] relative">
              One
              <Sparkles className="absolute -top-4 -right-6 md:-top-6 md:-right-10 w-6 h-6 md:w-8 md:h-8 text-white opacity-50 animate-pulse" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 md:mt-8 text-sm sm:text-lg md:text-2xl tracking-[0.3em] md:tracking-[0.4em] font-light text-[#8B9BB4]"
          >
            25 • 04 • 2026
          </motion.p>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 1.5,
            delay: 0.4,
          }}
          className={`relative w-full max-w-[92vw] sm:max-w-[85vw] md:max-w-4xl p-2 md:p-3 rounded-[1.5rem] md:rounded-[3rem] mx-auto transition-all duration-[2000ms] ${
            isDiyaLit
              ? "shadow-[0_0_60px_rgba(244,208,111,0.15)]"
              : "shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          }`}
        >
          {/* Glowing border trick */}
          <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[3rem] bg-gradient-to-b from-[#F4D06F]/40 to-transparent p-[1px] md:p-[2px] opacity-70">
            <div className="w-full h-full bg-[#050914] rounded-[calc(1.5rem-2px)] md:rounded-[calc(3rem-2px)]" />
          </div>

          <div className="relative w-full rounded-[1.3rem] md:rounded-[2.8rem] overflow-hidden bg-black z-10 border border-white/5">
            <img
              src={image_0}
              alt="Arjun's First Birthday Celebration"
              loading="eager"
              className="w-full h-auto max-h-[50svh] md:max-h-[65svh] object-cover object-center transform hover:scale-105 transition-transform duration-[3s] ease-out block mx-auto opacity-90 hover:opacity-100"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 2. REAL-TIME COUNTER: Stardust Digits
// ----------------------------------------------------------------------
function RealTimeCounter({ isDiyaLit }) {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const birthDate = new Date("2025-04-25T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diffInMs = now.getTime() - birthDate.getTime();
      if (diffInMs < 0) return;

      const totalSeconds = Math.floor(diffInMs / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      const totalWeeks = Math.floor(totalDays / 7);

      let totalMonths =
        (now.getFullYear() - birthDate.getFullYear()) * 12 +
        (now.getMonth() - birthDate.getMonth());
      if (now.getDate() < birthDate.getDate()) totalMonths--;

      let totalYears = now.getFullYear() - birthDate.getFullYear();
      if (
        now.getMonth() < birthDate.getMonth() ||
        (now.getMonth() === birthDate.getMonth() &&
          now.getDate() < birthDate.getDate())
      )
        totalYears--;

      setTimeElapsed({
        years: totalYears,
        months: totalMonths,
        weeks: totalWeeks,
        days: totalDays,
        hours: totalHours,
        minutes: totalMinutes,
        seconds: totalSeconds,
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Total Years", value: timeElapsed.years },
    { label: "Total Months", value: timeElapsed.months },
    { label: "Total Weeks", value: timeElapsed.weeks },
    { label: "Total Days", value: timeElapsed.days },
    { label: "Total Hours", value: timeElapsed.hours },
    { label: "Total Minutes", value: timeElapsed.minutes },
    { label: "Total Seconds", value: timeElapsed.seconds },
  ];

  return (
    <section className="py-16 md:py-32 px-4 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-xs md:text-lg tracking-[0.3em] md:tracking-[0.4em] uppercase font-light text-[#F4D06F] mb-4 flex items-center justify-center gap-2 md:gap-3">
            <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#F4D06F]/50" /> Time in
            Orbit <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#F4D06F]/50" />
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 w-full">
          {timeUnits.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center justify-center w-[46%] sm:w-[30%] lg:w-[13%] px-3 py-6 md:py-8 stellar-card rounded-2xl md:rounded-3xl group hover:border-[#F4D06F]/40 transition-colors"
            >
              <span className="text-2xl md:text-4xl font-light text-white mb-2 tabular-nums drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:text-[#F4D06F] transition-colors">
                {unit.value.toLocaleString()}
              </span>
              <span className="text-[8px] md:text-[11px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-medium text-[#8B9BB4] text-center group-hover:text-white transition-colors">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 3. TIMELINE: Constellation Path
// ----------------------------------------------------------------------
function GoldenAuraTimeline({ isDiyaLit }) {
  const milestones = [
    {
      year: "A New Light",
      title: "Arjun's Arrival",
      desc: "The day our family grew by two little feet and one giant, beautiful heart.",
    },
    {
      year: "Pure Joy",
      title: "That First Smile",
      desc: "The moment he looked up and smiled, completely melting everyone's heart.",
    },
    {
      year: "Exploring",
      title: "The First Steps",
      desc: "Wobbly legs, holding our hands, and stepping into a world of family adventures.",
    },
    {
      year: "25 Apr 2026",
      title: "Completing Year One",
      desc: "A full circle around the sun. 365 days of love, blessings, and watching our little boy grow.",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative max-w-4xl mx-auto px-4 md:px-6">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-2xl md:text-5xl font-light tracking-wide text-white mb-4 md:mb-6">
          Our Constellation
        </h2>
        <div className="w-12 md:w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[#F4D06F] to-transparent opacity-50" />
      </div>

      <div className="relative">
        {/* Central Glowing Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#F4D06F]/40 to-transparent md:-translate-x-1/2 shadow-[0_0_10px_rgba(244,208,111,0.5)]" />

        <div className="flex flex-col gap-10 md:gap-24">
          {milestones.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node - Glowing Star */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#F4D06F] -translate-x-1/2 md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(244,208,111,0.8)] border-2 border-[#050914]" />

                <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-16 flex justify-start md:justify-center">
                  <div
                    className={`w-full max-w-sm stellar-card p-6 md:p-8 rounded-2xl md:rounded-3xl ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 mb-3 md:mb-4 border border-[#F4D06F]/30 rounded-full font-medium tracking-widest uppercase text-[8px] md:text-[10px] text-[#F4D06F] bg-[#F4D06F]/5">
                      {item.year}
                    </span>
                    <h3 className="text-lg md:text-2xl font-serif text-white mb-2 md:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-base leading-relaxed text-[#8B9BB4]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 4. STATS: Floating Orbits
// ----------------------------------------------------------------------
function EmbossedStats({ isDiyaLit }) {
  const stats = [
    { v: "6", l: "Little Teeth" },
    { v: "1k+", l: "Cuddles" },
    { v: "2k+", l: "Diapers" },
    { v: "∞", l: "Smiles" },
  ];

  return (
    <section className="py-16 md:py-20 my-8 md:my-12 border-y border-[#F4D06F]/10 bg-gradient-to-b from-transparent via-[#131B32]/30 to-transparent">
      <div className="flex justify-center gap-4 sm:gap-6 md:gap-20 px-2 flex-wrap max-w-6xl mx-auto">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className="relative w-[40vw] h-[40vw] sm:w-[35vw] sm:h-[35vw] max-w-[160px] max-h-[160px] md:max-w-[180px] md:max-h-[180px] rounded-full flex flex-col items-center justify-center bg-transparent border border-[#F4D06F]/20 group"
          >
            {/* Orbit rings */}
            <div className="absolute inset-1 md:inset-2 border border-dashed border-[#F4D06F]/10 rounded-full animate-[spin_30s_linear_infinite] group-hover:border-[#F4D06F]/30 transition-colors" />

            <span className="text-3xl md:text-5xl font-light text-white mb-1 group-hover:scale-110 transition-transform duration-500">
              {s.v}
            </span>
            <span className="text-[8px] md:text-[11px] uppercase tracking-wider md:tracking-widest font-medium text-[#F4D06F]">
              {s.l}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 5. DIYA: Supernova Igniter
// ----------------------------------------------------------------------
function MajesticDiya({ lit, setLit }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (lit) {
      const newParticles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x: Math.random() * 200 - 100,
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 0.5,
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [lit]);

  return (
    <section className="py-20 md:py-32 flex justify-center items-center px-4 relative overflow-hidden">
      <div className="text-center w-full max-w-2xl relative z-10">
        <h2 className="text-2xl md:text-5xl font-light mb-4 md:mb-6 tracking-wide text-white">
          Ignite The Stars
        </h2>
        <p className="mb-12 md:mb-16 text-xs md:text-lg font-light text-[#8B9BB4] tracking-wide px-4">
          Tap the Diya to shower Arjun's universe with blessings and light.
        </p>

        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto flex items-center justify-center">
          {/* Deep Space Rings */}
          <div className="absolute inset-0 rounded-full border border-[#F4D06F]/10 animate-[spin_15s_linear_infinite]" />
          <div className="absolute inset-4 md:inset-6 rounded-full border border-[#F4D06F]/20 stellar-card" />
          <div
            className={`absolute inset-8 md:inset-12 rounded-full transition-all duration-[2000ms] ${
              lit
                ? "bg-[#F4D06F]/20 shadow-[0_0_50px_rgba(244,208,111,0.4)]"
                : "bg-transparent"
            }`}
          />

          <button
            onClick={() => setLit(true)}
            className="relative z-20 group outline-none"
          >
            {!lit && (
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[#F4D06F] rounded-full blur-xl"
              />
            )}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-all duration-1000 ${
                lit
                  ? "bg-[#FFF5EA] shadow-[0_0_80px_rgba(244,208,111,1)]"
                  : "bg-[#050914] border border-[#F4D06F]/50 shadow-[0_0_20px_rgba(244,208,111,0.2)]"
              }`}
            >
              <Flame
                strokeWidth={1.2}
                className={`transition-all duration-1000 transform w-10 h-10 md:w-12 md:h-12 ${
                  lit
                    ? "text-[#FF8C00] fill-[#FFB66B] scale-125 drop-shadow-[0_0_10px_rgba(255,140,0,0.8)]"
                    : "text-[#F4D06F] scale-100"
                }`}
              />
            </motion.div>
          </button>

          <AnimatePresence>
            {lit &&
              particles.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: p.x,
                    y: -100 - Math.random() * 150,
                    scale: [0, 1.8, 0.5],
                  }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  {p.id % 3 === 0 ? (
                    <Sparkles
                      size={16}
                      className="md:w-5 md:h-5 text-white opacity-90 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                    />
                  ) : p.id % 2 === 0 ? (
                    <Heart
                      size={14}
                      className="md:w-4 md:h-4 fill-[#FFB66B] text-[#FFB66B] opacity-80"
                    />
                  ) : (
                    <Star
                      size={12}
                      className="md:w-3.5 md:h-3.5 fill-[#F4D06F] text-[#F4D06F] opacity-90"
                    />
                  )}
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <div className="h-10 md:h-12 mt-12 md:mt-16">
          <AnimatePresence>
            {lit && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 md:gap-3 stellar-card px-6 md:px-8 py-2 md:py-3 rounded-full border-[#F4D06F]/50 shadow-[0_0_30px_rgba(244,208,111,0.2)]"
              >
                <Sparkles className="text-[#F4D06F] w-3 h-3 md:w-4 md:h-4" />
                <span className="text-[10px] md:text-sm tracking-widest uppercase font-semibold text-white">
                  The Stars Align For Arjun
                </span>
                <Sparkles className="text-[#F4D06F] w-3 h-3 md:w-4 md:h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 6. NEW CURATED GALLERY: Mobile-Perfect Flawless Alignment
// ----------------------------------------------------------------------
function CuratedGallery({ isDiyaLit }) {
  const halfTrack = [...galleryImages, ...galleryImages, ...galleryImages];
  const loopedImages = [...halfTrack, ...halfTrack];

  return (
    <section className="py-16 md:py-32 overflow-hidden relative border-t border-[#F4D06F]/10 bg-[#03050B]">
      <div className="w-full">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-base md:text-xl font-medium tracking-[0.4em] md:tracking-[0.5em] uppercase inline-block relative text-[#F4D06F]">
            Stellar Memories
            <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-[#F4D06F] to-transparent" />
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Deep shadow edges to blend the infinite scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-[#03050B] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#03050B] to-transparent" />

          {/* Marquee Wrapper uses robust flex + w-max + shrink-0 on children to guarantee perfect cross-device scaling */}
          <div className="marquee-wrapper items-center">
            {loopedImages.map((item, index) => {
              const rotateClass =
                index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]";

              return (
                <div
                  key={`${item.id}-${index}`}
                  className={`w-[75vw] sm:w-[320px] md:w-[400px] shrink-0 px-3 md:px-8 flex flex-col items-center transform ${rotateClass} hover:rotate-0 transition-transform duration-500`}
                >
                  {/* Aspect-Ratio guarantees images never distort or break the grid on any phone */}
                  <div className="group relative w-full aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl stellar-card border border-[#F4D06F]/20 p-2 md:p-3 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                    <div className="relative w-full h-full rounded-md md:rounded-lg overflow-hidden bg-black">
                      <img
                        src={item.src}
                        alt={item.caption}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                  </div>

                  <div className="mt-4 md:mt-8 px-4 text-center bg-[#050914] rounded-full px-4 md:px-6 py-1.5 md:py-2 border border-white/5">
                    <p className="text-[10px] md:text-sm font-sans tracking-[0.2em] md:tracking-widest uppercase text-[#E0E6ED] group-hover:text-[#F4D06F] transition-colors">
                      {item.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
