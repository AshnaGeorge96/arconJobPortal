"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Target, Globe2, Users, Handshake, Briefcase, Lightbulb } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff9fc] via-[#ffe6f0] to-[#fff8fa] py-24"
    >
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        {/* ✨ Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-[#811844] md:text-5xl"
          >
            About <span className="text-[#561530]">Arcon Jobs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-4 max-w-3xl text-lg text-[#561530]/90"
          >
            Arcon Jobs connects global <b>Clients</b> and certified <b>Partners</b> to create
            meaningful international opportunities — empowering <b>Candidates</b> through trust,
            compliance, and collaboration.
          </motion.p>
        </div>

        {/* 🌐 Who We Are */}
        <div className="mb-24 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-3xl font-bold text-[#561530]">
              Connecting Businesses & Talent Across Borders
            </h3>
            <p className="mb-4 leading-relaxed text-[#561530]/90">
              Since 2019, Arcon Jobs has been building bridges between Europe, Asia, and the Middle East.
              We work with businesses looking to expand internationally and with trusted partners who
              bring local expertise to global hiring.
            </p>
            <p className="leading-relaxed text-[#561530]/90">
              Our strength lies in simplifying the complex — from recruitment and visa consulting to
              business expansion — creating a seamless experience for Clients, Partners, and Candidates alike.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Global collaboration at Arcon Jobs"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* 💼 How We Create Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h3 className="mb-4 text-3xl font-bold text-[#561530]">
            How We Create Global Impact
          </h3>
          <p className="mx-auto max-w-3xl leading-relaxed text-[#561530]/90">
            Every successful connection starts with understanding the flow — 
            <b> Clients → Partners → Candidates</b>.  
            We provide the systems, tools, and network that make this collaboration efficient and compliant.
          </p>
        </motion.div>

        {/* 🔄 Role Cards */}
        <div className="mb-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Briefcase className="h-9 w-9 text-[#811844]" />,
              title: "Clients",
              desc: "Businesses seeking global recruitment or expansion. We provide access to verified partners who manage hiring and compliance locally.",
            },
            {
              icon: <Handshake className="h-9 w-9 text-[#811844]" />,
              title: "Partners",
              desc: "Certified recruitment agencies and consultants who connect candidates to client roles while ensuring quality and transparency.",
            },
            {
              icon: <Users className="h-9 w-9 text-[#811844]" />,
              title: "Candidates",
              desc: "Talented individuals gaining opportunities through our partner network. All candidate placements are managed via certified partners.",
            },
          ].map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 12px 35px rgba(86,21,48,0.15)",
              }}
              className="flex flex-col items-center rounded-2xl border border-[#811844]/10 bg-white/90 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:border-[#811844]/40"
            >
              <div className="mb-3 rounded-xl bg-[#fce8f1] p-3">{role.icon}</div>
              <h5 className="mb-2 text-xl font-semibold text-[#811844]">
                {role.title}
              </h5>
              <p className="text-sm leading-relaxed text-[#561530]/80">
                {role.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🎯 Mission / Vision */}
        <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-2">
          {[
            {
              icon: <Target className="h-10 w-10 text-[#811844]" />,
              title: "Our Mission",
              text: "To empower global employment and business growth by connecting trusted partners, qualified talent, and ambitious enterprises under one reliable platform.",
            },
            {
              icon: <Lightbulb className="h-10 w-10 text-[#811844]" />,
              title: "Our Vision",
              text: "To be the world’s most trusted bridge between Clients, Partners, and Candidates — driving collaboration, integrity, and global opportunity.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 35px rgba(129,24,68,0.15)",
              }}
              className="group rounded-2xl border border-[#811844]/10 bg-white/90 p-8 shadow-md backdrop-blur-md transition-all duration-500 hover:border-[#811844]/30"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[#fce8f1] p-3 shadow-sm">
                {item.icon}
              </div>
              <h4 className="mb-3 text-2xl font-bold text-[#811844]">
                {item.title}
              </h4>
              <p className="leading-relaxed text-[#561530]/90">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* 🌍 Values */}
        <div className="mb-12 text-center">
          <h4 className="mb-4 text-3xl font-bold text-[#811844]">
            Our Core Values
          </h4>
          <p className="mx-auto mb-12 max-w-3xl text-[#561530]/90">
            Trust, transparency, collaboration, and growth — these principles guide how Arcon
            Jobs builds long-term relationships between clients, partners, and candidates worldwide.
          </p>
        </div>

        {/* 💎 Value Cards */}
        <div className="mb-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Handshake className="h-9 w-9 text-[#811844]" />,
              title: "Integrity",
              desc: "Every partnership we form is built on honesty, compliance, and trust.",
            },
            {
              icon: <Globe2 className="h-9 w-9 text-[#811844]" />,
              title: "Global Collaboration",
              desc: "Empowering cross-border teamwork through reliable partnerships.",
            },
            {
              icon: <Users className="h-9 w-9 text-[#811844]" />,
              title: "People First",
              desc: "We prioritize human connection and meaningful, long-term success.",
            },
            {
              icon: <Lightbulb className="h-9 w-9 text-[#811844]" />,
              title: "Innovation",
              desc: "Constantly evolving to simplify international hiring and business mobility.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 12px 35px rgba(86,21,48,0.15)",
              }}
              className="flex flex-col items-center rounded-2xl border border-[#811844]/10 bg-white/90 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:border-[#811844]/40"
            >
              <div className="mb-3 rounded-xl bg-[#fce8f1] p-3">{value.icon}</div>
              <h5 className="mb-2 text-xl font-semibold text-[#811844]">
                {value.title}
              </h5>
              <p className="text-sm leading-relaxed text-[#561530]/80">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🚀 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-gradient-to-r from-[#811844] to-[#561530] py-16 text-center text-white shadow-lg"
        >
          <h3 className="mb-4 text-3xl font-bold">
            Join the Arcon Network Today
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Whether you’re a client seeking global talent or a partner helping candidates reach
            their dreams, Arcon Jobs is your trusted gateway to international success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register/client">
              <button className="rounded-full bg-white px-6 py-3 font-semibold text-[#811844] transition hover:bg-[#fce8f1]">
                For Clients
              </button>
            </Link>
            <Link href="/register/partner">
              <button className="rounded-full border border-white px-6 py-3 transition hover:bg-white/10">
                For Partners
              </button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/80">
            *Candidates access opportunities through certified partners. Direct applications are not accepted.*
          </p>
        </motion.div>
      </div>
    </section>
  );
}
