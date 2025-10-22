"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted:", { email, password });
    // you’ll replace this with actual auth logic later
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#fff8fa] via-[#ffe6f0] to-[#fff9fc] px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-[#811844]/10 shadow-[0_8px_25px_rgba(86,21,48,0.1)]"
      >
        <h1 className="text-3xl font-extrabold text-center text-[#811844]">
          Welcome Back
        </h1>
        <p className="text-center text-[#561530]/80 mt-2">
          Log in to continue your journey with Arcon
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="text-left">
            <label className="block text-sm font-semibold text-[#561530]/90 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#811844]/20 focus:outline-none focus:ring-2 focus:ring-[#811844] bg-white/70 text-[#561530]"
              placeholder="you@example.com"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-semibold text-[#561530]/90 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#811844]/20 focus:outline-none focus:ring-2 focus:ring-[#811844] bg-white/70 text-[#561530]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#811844] text-white font-semibold hover:bg-[#561530] transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-[#561530]/80">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-[#811844] font-semibold hover:underline"
          >
            Register Here
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
