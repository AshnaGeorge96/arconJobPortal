"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Handshake, Users, Briefcase } from "lucide-react";

const partners = [
  { name: "TalentBridge", logo: "/images/Google-Logo.wine.svg" },
  { name: "WorkConnect", logo: "/images/Microsoft-Logo.wine.svg" },
  { name: "GlobalHire", logo: "/images/Amazon_(company)-Logo.wine.svg" },
  { name: "EuroLink", logo: "/images/Airbnb-Logo.wine.svg" },
  { name: "SkyRecruit", logo: "/images/Siemens-Logo.wine.svg" },
  { name: "CareerPath", logo: "/images/Volkswagen_Group-Logo.wine.svg" },
];

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-[#fff9fc] via-[#fff4f7] to-[#ffe6f0]"
    >
      {/* background tint */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.8),transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 text-center px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#811844]">
            Our Certified Partner Network
          </h2>
          <p className="mt-4 text-lg text-[#561530]/90 max-w-3xl mx-auto leading-relaxed">
            Partners are at the heart of Arcon Jobs — connecting <b>Clients</b> and <b>Candidates</b> 
            across continents. Through our certified network, we ensure transparency, compliance, 
            and quality in every international placement.
          </p>
        </motion.div>

        {/* Pipeline mini illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-20"
        >
          {[
            { icon: <Briefcase className="h-8 w-8 text-[#811844]" />, title: "Clients", desc: "Businesses offering global roles and projects." },
            { icon: <Handshake className="h-8 w-8 text-[#811844]" />, title: "Partners", desc: "Certified recruiters managing hiring and compliance." },
            { icon: <Users className="h-8 w-8 text-[#811844]" />, title: "Candidates", desc: "Talented professionals connected via partners." },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/90 border border-[#811844]/10 rounded-2xl shadow-[0_8px_25px_rgba(86,21,48,0.08)] p-6 w-64 hover:shadow-[0_10px_35px_rgba(129,24,68,0.15)] transition-all duration-500"
            >
              <div className="flex justify-center mb-3">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#811844] mb-2">{step.title}</h3>
              <p className="text-sm text-[#561530]/90 leading-relaxed">{step.desc}</p>
              {i < 2 && (
                <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 hidden md:block">
                  <div className="h-[2px] w-10 bg-gradient-to-r from-[#811844] to-[#561530]" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center justify-center"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-[#811844]/10 shadow-[0_8px_25px_rgba(86,21,48,0.08)] hover:shadow-[0_8px_25px_rgba(129,24,68,0.25)] transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={50}
                className="object-contain opacity-80 hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            href="/register/partner"
            className="rounded-full bg-[#811844] px-6 py-3 font-semibold text-white transition hover:bg-[#561530]"
          >
            Become a Partner
          </Link>
          <Link
            href="/solutions/client"
            className="rounded-full border border-[#811844] px-6 py-3 font-semibold text-[#811844] hover:bg-[#fce8f1] transition"
          >
            View Client Solutions
          </Link>
        </div>

        {/* Note for transparency */}
        <p className="mt-10 text-sm text-[#561530]/80">
          <em>Note:</em> Candidates access Arcon Jobs opportunities through certified partners only.
          Direct applications are not accepted.
        </p>
      </div>
    </section>
  );
}
