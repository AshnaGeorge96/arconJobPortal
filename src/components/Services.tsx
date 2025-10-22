"use client";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Globe2,
  FileText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      group: "For Clients",
      color: "from-[#fce8f1] to-[#f9d6e3]",
      items: [
        {
          icon: Briefcase,
          title: "Global Hiring & Recruitment",
          desc: "Post international job openings and collaborate with trusted local partners for compliant, efficient hiring.",
        },
        {
          icon: ShieldCheck,
          title: "Business Setup & Compliance",
          desc: "Get complete support for documentation, contracts, and workforce regulations across borders.",
        },
        {
          icon: Globe2,
          title: "International Expansion Support",
          desc: "Simplify market entry and talent placement with our global business facilitation services.",
        },
      ],
      cta: { label: "Post Jobs", href: "/register/client" },
    },
    {
      group: "For Partners",
      color: "from-[#fff1f7] to-[#ffe6f0]",
      items: [
        {
          icon: Users,
          title: "Verified Partner Network",
          desc: "Access verified client listings and manage candidate pipelines with our secure partner dashboard.",
        },
        {
          icon: FileText,
          title: "Recruitment Collaboration Tools",
          desc: "Simplify communication, track candidates, and report directly to global clients.",
        },
        {
          icon: ShieldCheck,
          title: "Ongoing Training & Compliance",
          desc: "Stay certified with Arcon’s ongoing partner accreditation and compliance support.",
        },
      ],
      cta: { label: "Join as Partner", href: "/register/partner" },
    },
    {
      group: "For Candidates (via Partners)",
      color: "from-[#fffafc] to-[#ffeef5]",
      items: [
        {
          icon: UserCheck,
          title: "Career Opportunities",
          desc: "Discover verified global roles referred by our recruitment partners.",
        },
        {
          icon: Globe2,
          title: "Visa & Mobility Guidance",
          desc: "Our partners provide dedicated support for relocation, visa, and onboarding.",
        },
        {
          icon: ShieldCheck,
          title: "Trusted Partner Channel",
          desc: "Candidates access roles only through certified partners — direct applications are not accepted.",
        },
      ],
      cta: null,
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 bg-gradient-to-b from-[#fff9fc] via-[#ffe6f0] to-[#fce8f2]"
    >
      {/* 🌸 Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.9),transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 text-center">
        {/* 🏆 Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative inline-block mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#811844] tracking-tight">
            Empowering Clients, Partners & Global Talent
          </h2>
          <div className="absolute left-1/2 -bottom-3 h-[3px] w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#811844] via-[#a83264] to-[#561530] shadow-[0_0_10px_rgba(129,24,68,0.4)]" />
        </motion.div>

        <p className="max-w-2xl mx-auto text-lg text-[#561530]/90 leading-relaxed mb-16">
          Arcon Jobs bridges global clients and recruitment partners through a
          unified platform that enables compliant hiring, visa facilitation, and
          cross-border business collaboration.
        </p>

        {/* 🔧 Service Groups */}
        <div className="space-y-20">
          {services.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#811844] mb-8">
                {group.group}
              </h3>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{
                        y: -8,
                        scale: 1.03,
                        boxShadow: "0 12px 40px rgba(129,24,68,0.15)",
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`group relative rounded-3xl border border-[#811844]/10 bg-white/90 p-8 shadow-[0_6px_25px_rgba(86,21,48,0.08)] transition-all duration-500 backdrop-blur-sm`}
                    >
                      <div
                        className={`mx-auto mb-5 w-fit rounded-2xl bg-gradient-to-br ${group.color} p-4 shadow-inner`}
                      >
                        <Icon className="w-8 h-8 text-[#811844]" />
                      </div>
                      <h4 className="text-xl font-semibold text-[#561530] mb-2 group-hover:text-[#811844] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-[#561530]/80 text-sm leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {group.cta && (
                <div className="mt-8">
                  <Link
                    href={group.cta.href}
                    className="inline-block rounded-full bg-[#811844] text-white px-8 py-3 font-semibold shadow hover:bg-[#561530] transition"
                  >
                    {group.cta.label}
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 🧾 Candidate Access Note */}
        <p className="mt-20 text-sm text-[#561530]/80 max-w-2xl mx-auto">
          <em>Note:</em> Candidates access opportunities on Arcon Jobs exclusively through certified recruitment partners. Direct applications are not accepted.
        </p>
      </div>
    </section>
  );
}
