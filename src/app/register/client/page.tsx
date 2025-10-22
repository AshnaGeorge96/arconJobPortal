"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ClientRegister() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff9fc] via-[#ffe6f0] to-[#fff8fa] py-24 px-6 text-[#561530]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#811844]"
        >
          Client Onboarding
        </motion.h1>

        <p className="mt-4 text-lg text-[#561530]/90">
          Partner with Arcon Jobs to hire globally through our certified partner network.
        </p>

        <div className="mt-10 bg-white/90 border border-[#811844]/10 rounded-2xl shadow-lg p-8 text-left">
          <h3 className="text-2xl font-semibold text-[#811844] mb-4">
            Submit Your Business Details
          </h3>
          <form className="space-y-4">
            <input type="text" placeholder="Company Name" required className="w-full rounded-lg border border-[#811844]/20 px-4 py-3 focus:border-[#811844] outline-none" />
            <input type="email" placeholder="Business Email" required className="w-full rounded-lg border border-[#811844]/20 px-4 py-3 focus:border-[#811844] outline-none" />
            <input type="text" placeholder="Country / Region" className="w-full rounded-lg border border-[#811844]/20 px-4 py-3 focus:border-[#811844] outline-none" />
            <textarea placeholder="Describe your hiring needs..." rows={4} className="w-full rounded-lg border border-[#811844]/20 px-4 py-3 focus:border-[#811844] outline-none"></textarea>
            <button type="submit" className="w-full bg-[#811844] text-white py-3 rounded-lg font-semibold hover:bg-[#561530] transition">
              Submit Request
            </button>
          </form>
        </div>

        <p className="mt-8 text-sm text-[#561530]/80">
          Looking to join as a certified recruiter instead?{" "}
          <Link href="/register/partner" className="text-[#811844] font-semibold hover:underline">
            Become a Partner
          </Link>
        </p>
      </div>
    </main>
  );
}
