"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    src: "/images/arcon-pipeline-illustration.svg",
    alt: "Arcon Jobs — Connecting Clients and Partners",
    caption:
      "A clear flow: Clients trust Arcon Jobs to connect them with certified Partners who reach verified Candidates.",
    isIllustration: true,
  },
  { src: "/images/undraw_hello_ccwj.svg", alt: "Global Clients Collaborating" },
  {
    src: "/images/undraw_in-the-office_e7pg.svg",
    alt: "Certified Partners at Work",
  },
  {
    src: "/images/undraw_success-factors_i417.svg",
    alt: "Candidate Skill Empowerment",
  },
  {
    src: "/images/undraw_working-together_r43a.svg",
    alt: "Corporate Partnerships",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-gradient-to-br from-[#fff5f9] via-[#ffe4ef] to-[#f8cfe2] py-24"
    >
      {/* 💫 decorative glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_70%)]" />

      <div className="container relative z-10 px-6 text-center">
        {/* 🌟 Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mb-10 inline-block"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-[#811844] drop-shadow-sm md:text-5xl">
            Our Global Impact — Connecting Clients & Partners
          </h2>
          <div className="absolute -bottom-3 left-1/2 h-[4px] w-28 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#561530] via-[#a83264] to-[#811844] shadow-[0_0_12px_rgba(129,24,68,0.5)]" />
        </motion.div>

        <p className="mx-auto mb-16 max-w-2xl text-lg leading-relaxed text-[#561530]/90">
          At Arcon Jobs, we build the bridge between <b>Clients</b>,{" "}
          <b>Partners</b>, and <b>Candidates</b> — creating a seamless hiring
          pipeline that drives global growth.
        </p>

        {/* 🧭 Connection tagline bar */}
        <div className="mx-auto mb-12 max-w-3xl rounded-full bg-gradient-to-r from-[#811844] via-[#a83264] to-[#561530] px-6 py-3 text-sm font-medium text-white shadow-md md:text-base">
          👔 Clients → Arcon Jobs → 🤝 Partners → 👩‍💼 Candidates — Empowering
          growth across borders.
        </div>

        {/* 🖼️ Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-3xl border border-[#811844]/10 bg-white/70 p-6 shadow-[0_10px_40px_rgba(86,21,48,0.15)] backdrop-blur-md transition-all hover:shadow-[0_12px_45px_rgba(86,21,48,0.25)] md:p-10"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            className="rounded-2xl"
          >
            {slides.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className={`object-contain transition-transform duration-500 ${
                      s.isIllustration
                        ? "p-6 md:p-10 lg:p-16"
                        : "object-cover hover:scale-105"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    priority={i === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* 📈 Updated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-10 text-center md:grid-cols-4"
        >
          {[
            { value: "97%", label: "Partner Visa Success" },
            { value: "89%", label: "Client–Partner Job Match Rate" },
            { value: "50+", label: "Global Partner Countries" },
            { value: "12+", label: "Candidate Mobility Programs" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[#811844]/10 bg-gradient-to-b from-white/90 to-[#fff2f6]/80 p-6 shadow-md transition hover:shadow-lg"
            >
              <h3 className="mb-2 text-4xl font-extrabold text-[#811844] drop-shadow-sm md:text-5xl">
                {stat.value}
              </h3>
              <p className="font-medium text-[#561530]/90">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Candidate access disclaimer */}
        <p className="mx-auto mt-12 max-w-2xl text-sm text-[#561530]/80">
          <em>Note:</em> Candidates access opportunities on Arcon Jobs
          exclusively through our certified recruitment partners. Direct
          applications are not accepted.
        </p>
      </div>

      {/* soft fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#ffe4ef] to-transparent" />
    </section>
  );
}
