import React from "react";
import { HiMiniPhoneArrowUpRight } from "react-icons/hi2";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import avantec from "./../assets/images/خروجی عکس آوانتک.png";
const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-[#0e1030] to-[#1a1d3a] pt-32 px-4"
    >
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <motion.div
          className="space-y-6 text-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center text-center md:text-right space-y-6">
            <h1 className="text-6xl   bg-clip-text text-transparent p-4 font-bold ">
              <span className="text-[white]">دزدگیر اماکن </span>
              <span className="text-[#f6905c]">آوانتک</span>
            </h1>
            <p className="text-lg text-[#a0a3bd] leading-relaxed max-w-md">
              نسل جدید سیستم‌های امنیتی و کنترلی مبتنی بر اینترنت با قابلیت
              نظارت و مدیریت از راه دور
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 ">
            <Link
              to="features"
              smooth
              duration={500}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#f6905c] to-[#e07a47] text-white font-bold shadow hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
            >
              ویژگی‌های محصول
            </Link>
            <div className="group cursor-pointer">
              <Link
              to="contact"
              smooth
              duration={500}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#f6905c] text-white font-bold hover:bg-[#f6905c] hover:text-white transition-all duration-300 group"
            >
              ارتباط با ما
              <HiMiniPhoneArrowUpRight className="text-2xl relative z-10 group-hover:rotate-15 group-hover:scale-120 transition-transform duration-300 " />
            </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="w-full max-w-md h-96   rounded-xl flex items-center justify-center text-[#a0a3bd] text-lg">
            <img src={avantec} className="object-cover w-[400px] h-[400px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
