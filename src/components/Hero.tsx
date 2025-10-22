"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Users, UserCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <main className="overflow-hidden bg-[#fff9fc] text-[#561530]">
      {/* 🌍 HERO SECTION */}
      <section className="relative mt-16 flex h-[90vh] items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
            alt="Global collaboration"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="container relative z-10 grid items-center gap-10 px-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Bridging Clients, Partners & Candidates — Globally.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-200 md:text-xl">
              Arcon Jobs connects <strong>Clients</strong> who have global hiring needs
              with certified <strong>Partners</strong> who source and manage the best
              <strong> Candidates</strong> — ensuring trust, quality, and compliance.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/register/client"
                className="rounded-full bg-[#811844] px-6 py-3 font-semibold text-white transition hover:bg-[#561530]"
              >
                For Clients: Post Jobs
              </Link>
              <Link
                href="/register/partner"
                className="rounded-full border border-white/80 px-6 py-3 text-white transition hover:bg-white hover:text-[#811844]"
              >
                For Partners: Join Network
              </Link>
            </div>

            {/* Candidate Note */}
            <p className="mt-3 text-sm text-white/90">
              Candidates access opportunities exclusively through our certified
              partners. Direct applications on Arcon Jobs are not accepted.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔄 MINI PIPELINE PREVIEW */}
      <section className="relative bg-gradient-to-b from-[#fff9fc] via-[#ffe6f0] to-[#fff8fa] py-16">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-3xl font-bold text-[#811844]"
          >
            How Arcon Jobs Connects the World
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Briefcase size={36} />,
                title: "Clients",
                desc: "Submit job requirements and collaborate with certified partners to hire globally.",
              },
              {
                icon: <Users size={36} />,
                title: "Partners",
                desc: "Recruit and manage candidates locally while serving verified international clients.",
              },
              {
                icon: <UserCheck size={36} />,
                title: "Candidates",
                desc: "Gain access to global roles exclusively via our trusted partner network.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#811844]/10 bg-white p-6 shadow-[0_6px_20px_rgba(86,21,48,0.08)]"
              >
                <div className="mb-4 flex justify-center text-[#811844]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#811844] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#561530]/80 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-4 text-[#811844]">
            <ArrowRight className="h-6 w-6" />
            <ArrowRight className="h-6 w-6" />
          </div>
        </div>
      </section>
    </main>
  );
}
