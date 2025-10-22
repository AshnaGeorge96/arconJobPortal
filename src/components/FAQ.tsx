"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "Can candidates apply directly on Arcon Jobs?",
    a: "No. Candidates access opportunities exclusively through our certified recruitment partners. This ensures every candidate is verified, guided, and supported locally — maintaining quality and compliance across borders.",
  },
  {
    q: "Who is Arcon Jobs primarily for?",
    a: "Arcon Jobs is built for two key audiences: Clients — companies offering international roles, and Partners — verified recruitment firms who connect local talent with global opportunities. Candidates are reached through these partners.",
  },
  {
    q: "How do I become an Arcon partner?",
    a: "Simply visit our Partner Registration page and submit your firm’s details. Once verified, you'll gain access to client requests and exclusive partnership tools for managing roles in your region.",
  },
  {
    q: "What advantages do clients get?",
    a: "Clients gain access to a trusted network of pre-verified recruitment partners worldwide. Arcon handles compliance, documentation, and international mobility, ensuring a seamless hiring experience.",
  },
  {
    q: "Where can I get more information?",
    a: "For inquiries or collaboration opportunities, visit our Contact page or reach us directly at info@arconjobs.com. Our team responds within 24 hours.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff9fc] via-[#ffe6f0] to-[#fff8fa] py-24"
    >
      {/* 🌸 Background gloss */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.7),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* ✨ Section Header */}
        <h2 className="text-4xl font-extrabold text-[#811844] md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-[#561530]/90">
          Quick answers about how Arcon Jobs connects <strong>Clients</strong>,{" "}
          <strong>Partners</strong>, and <strong>Candidates</strong> across the globe.
        </p>

        {/* 🔘 FAQ List */}
        <div className="mt-12 divide-y divide-[#811844]/10 rounded-3xl border border-[#811844]/10 bg-white/80 shadow-[0_10px_35px_rgba(86,21,48,0.08)] backdrop-blur-md text-left">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer px-6 py-5 hover:bg-[#fff3f7] transition-all"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#561530] group-hover:text-[#811844]">
                  {item.q}
                </h3>
                <motion.div
                  animate={{ rotate: open === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-[#811844]" />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-3 text-[#561530]/85 leading-relaxed text-sm"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* 🌐 CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#561530]/70">
            Still have questions?{" "}
            <a
              href="/contact"
              className="font-semibold text-[#811844] hover:underline"
            >
              Contact our team
            </a>{" "}
            — we’re happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}
