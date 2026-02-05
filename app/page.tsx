"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#0a0a0a] text-white font-sans">

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-lg space-y-12"
      >
        {/* Header */}
        <div className="space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-neutral-500 text-sm font-medium uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Under Construction
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Coming Soon.
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
            I'm crafting a new portfolio experience. Focus on simplicity and performance.
          </p>
        </div>

        {/* Progress Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-5xl font-light tracking-tighter text-white">40%</span>
            <span className="text-sm text-neutral-500 mb-2">Development Progress</span>
          </div>

          <div className="h-[2px] w-full bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "40%" }}
              transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
              className="h-full bg-white"
            />
          </div>
        </div>

        {/* Footer/Socials */}
        <div className="pt-8 border-t border-neutral-900 flex justify-between items-center text-neutral-500 text-sm">
          <p>Notify me when it's ready</p>
          <div className="flex gap-4">
            <a href="https://github.com/sandeepThapaMagar520" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/sandeep-thapa-magar-a907a3282/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:sandeepthapa520@gmail.com" className="hover:text-white transition-colors cursor-pointer"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
