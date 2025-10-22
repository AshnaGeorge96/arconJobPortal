"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Lukas Meyer",
    role: "Client — HR Director, EuroTech Solutions 🇩🇪",
    image: "/images/scott-graham-5fNmWej4tAA-unsplash.jpg",
    text: "Arcon Jobs helped us hire qualified engineers through their partner network across Asia. The communication between client and partner was seamless and professional.",
    type: "client",
  },
  {
    name: "Amit Sharma",
    role: "Candidate — Software Engineer, India 🇮🇳",
    image: "/images/ankush-minda-uPIDtOdCINY-unsplash.jpg",
    text: "Through Arcon’s certified partner in Mumbai, I secured a job in Poland and got full visa support. The process was transparent and worry-free.",
    type: "candidate",
  },
  {
    name: "Katarzyna Nowak",
    role: "Partner — Global Recruiter, Poland 🇵🇱",
    image: "/images/evelina-friman-XyKX2wJ1jkI-unsplash.jpg",
    text: "Partnering with Arcon Jobs expanded my access to international clients. Their platform simplifies compliance and candidate management effortlessly.",
    type: "partner",
  },
  {
    name: "Mohammed Al Faisal",
    role: "Client — Managing Director, GulfBuild 🇦🇪",
    image: "/images/falaq-lazuardi-zaVfDlV9CkU-unsplash.jpg",
    text: "We trusted Arcon Jobs to manage our European staffing via their certified partner network. Excellent support and timely results every time.",
    type: "client",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff8fa] via-[#ffe6f0] to-[#fff9fc] py-20"
    >
      <div className="container relative z-10 text-center">
        {/* header */}
        <div className="relative mb-10 inline-block">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#811844] md:text-5xl">
            Voices from Our Network
          </h2>
          <div className="absolute -bottom-3 left-1/2 h-[3px] w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#811844] via-[#a83264] to-[#561530] shadow-[0_0_10px_rgba(129,24,68,0.4)]" />
        </div>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#561530]/90">
          Real stories from <b>Clients</b>, <b>Partners</b>, and <b>Candidates</b> who’ve experienced
          the power of Arcon Jobs — connecting global opportunities through trusted collaboration.
        </p>

        {/* testimonial tiles */}
        <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group flex flex-col items-center justify-between rounded-3xl border border-[#811844]/10 bg-white/90 p-8 text-center shadow-[0_8px_25px_rgba(86,21,48,0.08)] backdrop-blur-sm hover:shadow-[0_12px_35px_rgba(86,21,48,0.15)] transition-all duration-500 ${
                t.type === "client"
                  ? "border-[#811844]/20"
                  : t.type === "partner"
                  ? "border-[#a83264]/20"
                  : "border-[#561530]/20"
              }`}
            >
              {/* avatar */}
              <motion.div
                whileHover={{ rotate: [0, -6, 6, 0], scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <div className="relative flex-shrink-0 rounded-full overflow-hidden border-4 border-[#fce8f1] shadow-md w-[100px] h-[100px]">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* text */}
              <p className="mt-4 text-sm italic leading-relaxed text-[#561530]/90 flex-grow">
                “{t.text}”
              </p>

              {/* name & role */}
              <div className="mt-6">
                <h4 className="font-semibold text-[#811844]">{t.name}</h4>
                <p className="text-sm text-[#561530]/70">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* candidate note */}
        <p className="mt-12 text-sm text-[#561530]/80 max-w-2xl mx-auto">
          <em>Note:</em> Candidates access opportunities on Arcon Jobs exclusively through certified
          partners. Direct applications are not accepted.
        </p>
      </div>
    </section>
  );
}
