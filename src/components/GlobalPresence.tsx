"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Globe2, Building2, Users, Handshake } from "lucide-react";

export default function GlobalPresence() {
  const regions = [
    {
      name: "Europe",
      desc: "Our strategic hub — driving business, trade, and mobility across 8+ EU nations through trusted client-partner collaborations.",
      countries: ["Poland", "Germany", "France", "Spain", "Italy", "Portugal", "Netherlands", "Czech Republic"],
      flag: "https://flagcdn.com/w80/eu.png",
      icon: <Building2 className="w-7 h-7 text-[#811844]" />,
    },
    {
      name: "Middle East",
      desc: "Bridging Gulf innovation with European talent — connecting local partners with clients seeking specialized expertise.",
      countries: ["United Arab Emirates", "Qatar", "Saudi Arabia"],
      flag: "https://flagcdn.com/w80/ae.png",
      icon: <Handshake className="w-7 h-7 text-[#811844]" />,
    },
    {
      name: "Asia",
      desc: "India — our key growth region for high-skilled candidates and partner recruitment centers powering European projects.",
      countries: ["India"],
      flag: "https://flagcdn.com/w80/in.png",
      icon: <Users className="w-7 h-7 text-[#811844]" />,
    },
  ];

  return (
    <section
      id="presence"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-[#fff8fa] via-[#ffe6f0] to-[#fff9fc]"
    >
      {/* 🌍 Subtle background layer */}
      <div className="absolute inset-0">
        <Image
          src="/images/europe-map.png"
          alt="World map background"
          fill
          priority
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/75 to-[#fff9fc]/90" />
      </div>

      {/* 🌐 Content */}
      <div className="container relative z-10 text-center">
        {/* ✨ Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#811844]"
        >
          Our Global Network
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-[#561530]/90 leading-relaxed"
        >
          Arcon Jobs builds a bridge between continents — connecting <strong>Clients</strong> in
          Europe and the Middle East with <strong>Partners</strong> and <strong>Candidates</strong> across Asia.
          Our trusted network ensures growth, compliance, and opportunity at every step.
        </motion.p>

        {/* 🌎 Region Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {regions.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative group rounded-3xl border border-[#811844]/15 bg-gradient-to-br from-white/80 to-[#fff1f6]/80 backdrop-blur-md p-8 shadow-[0_6px_20px_rgba(86,21,48,0.08)] hover:shadow-[0_12px_30px_rgba(129,24,68,0.15)] transition-all overflow-hidden"
            >
              {/* glowing hover border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#811844]/20 via-transparent to-[#561530]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="flex items-center gap-3">
                  {r.icon}
                  <Image
                    src={r.flag}
                    alt={`${r.name} flag`}
                    width={50}
                    height={35}
                    className="rounded-md shadow-sm"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-[#811844]">
                  {r.name}
                </h3>
                <p className="text-sm text-[#561530]/90 leading-relaxed">
                  {r.desc}
                </p>

                <ul className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-[#561530]/80">
                  {r.countries.map((c, j) => (
                    <li
                      key={j}
                      className="px-3 py-1 rounded-full bg-[#811844]/5 border border-[#811844]/10 hover:bg-[#811844]/10 transition"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🌐 CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex flex-wrap justify-center gap-5"
        >
          <Link
            href="/solutions/client"
            className="rounded-full bg-[#811844] px-6 py-3 font-semibold text-white shadow hover:bg-[#561530] transition"
          >
            View Client Solutions
          </Link>
          <Link
            href="/solutions/partner"
            className="rounded-full border border-[#811844] px-6 py-3 font-semibold text-[#811844] hover:bg-[#fce8f1] transition"
          >
            Become a Partner
          </Link>
        </motion.div>

        {/* 🌸 Footer Note */}
        <p className="mt-10 text-sm text-[#561530]/70">
          <em>Note:</em> Candidates access Arcon Jobs opportunities via our certified
          recruitment partners only. Direct applications are not accepted.
        </p>
      </div>
    </section>
  );
}
