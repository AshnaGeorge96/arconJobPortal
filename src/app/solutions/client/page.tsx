"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Globe2, ShieldCheck, Users, FileCheck } from "lucide-react";

export default function ClientSolutions() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff9fc] via-[#ffe6f0] to-[#fff8fa] text-[#561530]">
      {/* 🏆 Hero Section */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.8),transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#811844] mb-4">
            Global Hiring Solutions for Clients
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-[#561530]/90">
            Partner with Arcon Jobs to find international talent through our certified recruiter
            network — with full visa, mobility, and compliance support.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/register/client"
              className="rounded-full bg-[#811844] px-6 py-3 font-semibold text-white transition hover:bg-[#561530]"
            >
              Post a Job
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-full border border-[#811844] px-6 py-3 font-semibold text-[#811844] hover:bg-[#fce8f1] transition"
            >
              How It Works
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 💼 Why Choose Arcon */}
      <section className="py-20 bg-gradient-to-b from-[#fff8fa] via-[#fff2f7] to-[#ffe6f0]">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#811844] mb-8"
          >
            Why Choose Arcon Jobs
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <Globe2 className="h-10 w-10 text-[#811844]" />,
                title: "Global Reach",
                desc: "Access pre-screened talent from Europe, Asia, and the Middle East through our certified partners.",
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-[#811844]" />,
                title: "Full Compliance",
                desc: "Our partners manage documentation, contracts, and visas — ensuring smooth onboarding.",
              },
              {
                icon: <Users className="h-10 w-10 text-[#811844]" />,
                title: "Dedicated Network",
                desc: "Work only with verified partners who understand your industry and recruitment standards.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl bg-white/90 border border-[#811844]/10 shadow-md p-8 backdrop-blur-md hover:shadow-[0_10px_30px_rgba(86,21,48,0.15)] transition-all"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#811844] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#561530]/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔄 How It Works */}
      <section id="how-it-works" className="py-20 text-center bg-gradient-to-b from-[#fff9fc] via-[#ffeef4] to-[#fff8fa]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#811844] mb-12"
          >
            How It Works
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Post Your Job",
                desc: "Submit international hiring needs directly to Arcon Jobs.",
              },
              {
                step: "2",
                title: "Partner Match",
                desc: "We assign your request to a certified local recruitment partner.",
              },
              {
                step: "3",
                title: "Candidate Screening",
                desc: "Partners source, verify, and manage interviews and documents.",
              },
              {
                step: "4",
                title: "Onboarding & Support",
                desc: "Visa, relocation, and paperwork handled through Arcon’s network.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-2xl bg-white/90 border border-[#811844]/10 shadow-md p-8 backdrop-blur-md hover:shadow-[0_10px_25px_rgba(86,21,48,0.15)] transition-all"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#811844] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">
                  {step.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#811844]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[#561530]/80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 CTA Section */}
      <section className="py-24 text-center bg-gradient-to-r from-[#811844] to-[#561530] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Hire Globally?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-10 text-white/90">
          Join hundreds of businesses expanding their reach through Arcon’s trusted partner
          network. Post your first job or consult with our client team today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/register/client"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#811844] hover:bg-[#fce8f1] transition"
          >
            Post a Job
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
          >
            Contact Our Team
          </Link>
        </div>
      </section>

      {/* Footer Note */}
      <p className="py-8 text-center text-sm text-[#561530]/80">
        <em>Note:</em> Candidates access opportunities through certified partners. Direct
        applications are not accepted.
      </p>
    </main>
  );
}
