"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-b from-[#5a0f2f] via-[#811844] to-[#561530] pt-20 pb-10 text-white overflow-hidden">
      {/* ✨ soft gloss layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative container grid gap-12 md:grid-cols-4 z-10">
        {/* 🏢 Brand / Logo + Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-block bg-white p-2 rounded-xl shadow-md mb-4"
          >
            <Image
              src="/images/logo.png"
              alt="Arcon Jobs Logo"
              width={180}
              height={180}
              className="object-contain brightness-125"
            />
          </Link>

          <p className="text-sm leading-relaxed text-white/85">
            Arcon Jobs empowers businesses and partners worldwide —
            bridging Clients, Partners, and Candidates across continents since 2019.
          </p>

          <div className="mt-5">
            <Link
              href="/solutions/client"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#f7bfd8] hover:text-white transition"
            >
              View Client Solutions <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* ⚡ Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="#about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/solutions/client" className="hover:text-white transition">
                For Clients
              </Link>
            </li>
            <li>
              <Link href="/solutions/partner" className="hover:text-white transition">
                For Partners
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* 📞 Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-[#f7bfd8]" />
              <span>
                Aleja Wolności 77B,
                <br />
                42-202 Częstochowa, Poland
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#f7bfd8]" />
              <a
                href="tel:+48123456789"
                className="hover:text-white transition"
              >
                +48 123 456 789
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#f7bfd8]" />
              <a
                href="mailto:info@arconjobs.com"
                className="hover:text-white transition"
              >
                info@arconjobs.com
              </a>
            </li>
          </ul>
        </motion.div>

        {/* 🌐 Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-lg font-semibold mb-4 text-white">
            Connect With Us
          </h4>
          <p className="text-sm text-white/80 mb-4">
            Follow our journey of building global connections.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Facebook, link: "https://facebook.com" },
              { Icon: Instagram, link: "https://instagram.com" },
              { Icon: Linkedin, link: "https://linkedin.com" },
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="rounded-full bg-white/15 p-3 border border-white/20 shadow hover:bg-white/25 transition"
              >
                <Icon size={20} className="text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 🪪 Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 border-t border-white/20 pt-6 text-center"
      >
        <p className="text-sm text-white/80">
          © {new Date().getFullYear()} <strong>Arcon Jobs</strong>. All rights reserved.  
          <br className="sm:hidden" /> Crafted with ❤️ in Poland.
        </p>
      </motion.div>
    </footer>
  );
}
