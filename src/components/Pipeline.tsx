"use client";
import { motion } from "framer-motion";
import { Briefcase, Users, UserCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Pipeline() {
  const steps = [
    {
      title: "Clients",
      icon: Briefcase,
      desc: "Companies post international roles through Arcon Jobs to reach vetted local recruiters.",
      cta: { href: "/register/client", label: "Post Jobs" },
    },
    {
      title: "Partners",
      icon: Users,
      desc: "Certified recruitment partners source, screen, and manage candidates locally.",
      cta: { href: "/register/partner", label: "Become a Partner" },
    },
    {
      title: "Candidates",
      icon: UserCheck,
      desc: "Candidates access opportunities exclusively through our partner network.",
      note: "Direct applications on Arcon Jobs are not accepted.",
      cta: null,
    },
  ] as const;

  return (
    <section id="how-it-works" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#561530]">How Arcon Jobs Works</h2>
          <p className="mt-3 text-[#6B3A58]">
            We connect global <span className="font-semibold">Clients</span> with certified{" "}
            <span className="font-semibold">Partners</span> who place the best{" "}
            <span className="font-semibold">Candidates</span>.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-[#811844]/10 bg-[#fff9fc] p-6 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#811844]/10 p-3">
                  <s.icon className="h-6 w-6 text-[#811844]" />
                </div>
                <h3 className="text-xl font-semibold text-[#561530]">{s.title}</h3>
              </div>
              <p className="mt-4 text-[#6B3A58]">{s.desc}</p>

              {s.note && (
                <p className="mt-3 text-sm font-medium text-[#811844]">{s.note}</p>
              )}

              {s.cta && (
                <div className="mt-5">
                  <Link
                    href={s.cta.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#811844] px-4 py-2 text-white shadow hover:opacity-90"
                  >
                    {s.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Arrows between cards on md+ */}
        <div className="pointer-events-none mt-8 hidden justify-center gap-8 md:flex">
          <ArrowRight className="h-6 w-6 text-[#811844]" />
          <ArrowRight className="h-6 w-6 text-[#811844]" />
        </div>
      </div>
    </section>
  );
}
