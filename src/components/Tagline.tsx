"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Tagline() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* ✅ Subtle transparent background with soft overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-tagline.jpg"
          alt="Background"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        {/* elegant glass-like overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 backdrop-blur-[2px]" />
      </div>

      <div className="container text-center md:text-left">
        {/* 🏆 Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#811844] tracking-tight text-center"
        >
          Our Success Journey
        </motion.h2>

        {/* ✨ Tagline Headline */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-2xl md:text-3xl font-semibold text-[#561530] max-w-3xl mx-auto text-center"
        >
          Empowering Global Careers and Seamless Visa Solutions
        </motion.h3>

        {/* 💬 Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-lg text-[#561530]/80 max-w-2xl mx-auto leading-relaxed text-center"
        >
          We connect ambitious talent with international opportunities and guide them through every
          step of the process — from job placement to visa approval — ensuring a smooth and trusted
          journey toward global success.
        </motion.p>
      </div>
    </section>
  );
}
