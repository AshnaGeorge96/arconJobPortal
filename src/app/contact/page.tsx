"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Briefcase, Handshake } from "lucide-react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff8fa] via-[#ffe6f0] to-[#fff9fc] py-24"
    >
      {/* ✨ Soft gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.8),transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        {/* ✨ Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-[#811844] md:text-5xl"
          >
            Connect with <span className="text-[#561530]">Arcon Jobs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-lg text-[#561530]/90"
          >
            We’re here to connect <b>Clients</b> seeking global talent and <b>Partners</b> building
            opportunities worldwide. Let’s collaborate to simplify international hiring and
            business growth.
          </motion.p>
        </div>

        {/* 📨 Main Section */}
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* 📍 Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="mb-4 text-2xl font-bold text-[#811844]">
              Let’s Collaborate
            </h3>
            <p className="mb-6 text-[#561530]/90">
              Whether you're a company looking to post international roles or a certified partner
              ready to collaborate — reach out to our team and join the Arcon network.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#fce8f1] p-3">
                  <MapPin className="h-6 w-6 text-[#811844]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#811844]">Office</h4>
                  <p className="text-[#561530]/90">
                    Aleja Wolności 77B
                    <br />
                    42-202 Częstochowa, Poland
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#fce8f1] p-3">
                  <Mail className="h-6 w-6 text-[#811844]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#811844]">Email</h4>
                  <p className="text-[#561530]/90">info@arconjobs.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#fce8f1] p-3">
                  <Phone className="h-6 w-6 text-[#811844]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#811844]">Phone</h4>
                  <p className="text-[#561530]/90">+48 123 456 789</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#fce8f1] p-3">
                  <Clock className="h-6 w-6 text-[#811844]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#811844]">Working Hours</h4>
                  <p className="text-[#561530]/90">
                    Mon – Fri: 9 AM – 6 PM
                    <br />
                    Sat: 10 AM – 3 PM
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/register/client"
                className="inline-flex items-center gap-2 rounded-full bg-[#811844] px-6 py-3 font-semibold text-white transition hover:bg-[#561530]"
              >
                <Briefcase className="h-5 w-5" />
                For Clients
              </a>
              <a
                href="/register/partner"
                className="inline-flex items-center gap-2 rounded-full border border-[#811844] px-6 py-3 font-semibold text-[#811844] transition hover:bg-[#fce8f1]"
              >
                <Handshake className="h-5 w-5" />
                For Partners
              </a>
            </div>
          </motion.div>

          {/* ✍️ Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-[#811844]/10 bg-white/90 p-8 shadow-lg backdrop-blur-md"
          >
            <h3 className="mb-6 text-2xl font-semibold text-[#811844]">
              Send a Business Inquiry
            </h3>
            <p className="mb-6 text-sm text-[#561530]/80">
              Use this form for client or partner inquiries. For job applications,
              please contact our certified partners directly.
            </p>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-[#561530]/80">
                  Name <span className="text-[#811844]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-[#811844]/20 px-4 py-3 transition focus:border-[#811844] focus:outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-medium text-[#561530]/80">
                  Email <span className="text-[#811844]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-[#811844]/20 px-4 py-3 transition focus:border-[#811844] focus:outline-none"
                  required
                />
              </div>

              {/* Organization */}
              <div>
                <label className="mb-1 block text-sm font-medium text-[#561530]/80">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="Organization name"
                  className="w-full rounded-lg border border-[#811844]/20 px-4 py-3 transition focus:border-[#811844] focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-sm font-medium text-[#561530]/80">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-[#811844]/20 px-4 py-3 transition focus:border-[#811844] focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-[#811844] py-3 font-semibold text-white transition hover:bg-[#561530]"
            >
              Send Message
            </button>

            {/* ✅ Success Toast */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-[-60px] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#811844] px-6 py-3 text-white shadow-lg"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Message sent! We’ll get back soon.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>

        {/* 🗺 Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-3xl border border-[#811844]/10 shadow-[0_8px_40px_rgba(129,24,68,0.1)]"
        >
          {/* Tint overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-[#811844]/10 via-transparent to-[#561530]/10 backdrop-blur-sm" />

          <iframe
            title="Arcon Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.897239659439!2d19.11998517696902!3d50.81293567163164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710b54b2c1f1b3d%3A0x35b8c48009e509ad!2sAleja%20Wolno%C5%9Bci%2077B%2C%2042-202%20Cz%C4%99stochowa%2C%20Poland!5e0!3m2!1sen!2spl!4v1730109000000!5m2!1sen!2spl"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="relative z-0"
          ></iframe>

          {/* Glass Label */}
          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/50 bg-white/70 px-6 py-3 text-sm font-medium text-[#561530] shadow-[0_4px_20px_rgba(86,21,48,0.1)] backdrop-blur-lg">
            <MapPin className="h-5 w-5 text-[#811844]" />
            <span>Our Office — Częstochowa, Poland</span>
          </div>
        </motion.div>

        {/* Note */}
        <p className="mt-12 text-center text-sm text-[#561530]/80">
          <em>Note:</em> Candidates access opportunities on Arcon Jobs exclusively through certified partners.
          Direct applications are not accepted.
        </p>
      </div>
    </section>
  );
}
