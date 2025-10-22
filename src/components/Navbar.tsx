"use client";
import { useState, useEffect } from "react";
import { Menu, X, LogIn, Users, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔘 Scroll behavior
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={clsx(
        "relative text-sm font-semibold tracking-wide transition-all duration-300",
        "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#811844] after:transition-all after:duration-300 hover:after:w-full",
        "text-[#811844] hover:text-[#561530]"
      )}
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[#811844]/15 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white/30 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Arcon Jobs Logo"
            width={180}
            height={180}
            priority
            className="object-contain"
          />
        </Link>

        {/* ✅ Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          <NavLink href="/" label="Home" />
          <NavLink href="#about" label="About" />
          <NavLink href="#services" label="Services" />
          <NavLink href="#contact" label="Contact" />
        </nav>

        {/* ✅ Right Section */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="register/client"
            className="flex items-center gap-2 rounded-full border border-[#811844]/30 bg-white/60 px-4 py-2 font-medium text-[#811844] shadow-[0_2px_10px_rgba(129,24,68,0.1)] backdrop-blur-md transition-all hover:bg-[#811844]/10 hover:shadow-[0_4px_15px_rgba(129,24,68,0.25)]"
          >
            <Briefcase size={16} /> For Clients
          </Link>
          <Link
            href="register/partner"
            className="flex items-center gap-2 rounded-full border border-[#811844]/30 bg-white/60 px-4 py-2 font-medium text-[#811844] shadow-[0_2px_10px_rgba(129,24,68,0.1)] backdrop-blur-md transition-all hover:bg-[#811844]/10 hover:shadow-[0_4px_15px_rgba(129,24,68,0.25)]"
          >
            <Users size={16} /> For Partners
          </Link>

          {/* login */}
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-full bg-[#811844] px-5 py-2 text-white font-semibold shadow-[0_3px_15px_rgba(129,24,68,0.25)] transition hover:bg-[#561530]"
          >
            <LogIn size={18} />
            Login
          </Link>
        </div>

        {/* ✅ Mobile menu toggle */}
        <button
          className="text-[#811844] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-[#811844]/20 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="container flex flex-col items-center gap-4 py-6 text-center">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About" />
              <NavLink href="/services" label="Services" />
              <NavLink href="/contact" label="Contact" />

              <Link
                href="/clients"
                className="flex items-center gap-2 rounded-full border border-[#811844]/30 bg-white/60 px-5 py-2 text-sm font-medium text-[#811844] hover:bg-[#811844]/10 transition-all"
              >
                <Briefcase size={16} />
                For Clients
              </Link>

              <Link
                href="/partners"
                className="flex items-center gap-2 rounded-full border border-[#811844]/30 bg-white/60 px-5 py-2 text-sm font-medium text-[#811844] hover:bg-[#811844]/10 transition-all"
              >
                <Users size={16} />
                For Partners
              </Link>

              <Link
                href="/login"
                className="mt-2 w-10/12 rounded-full bg-[#811844] px-5 py-2 font-semibold text-white shadow-[0_3px_15px_rgba(129,24,68,0.25)] transition hover:bg-[#561530]"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
