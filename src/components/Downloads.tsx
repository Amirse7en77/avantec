import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animation/fadeInUp';

// Animation variants


const Downloads: React.FC = () => {
  return (
    <section id="downloads" className="bg-[#0e1030] py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          دانلود کاتالوگ و مستندات
        </motion.h2>

        <motion.p
          className="text-[#a0a3bd] text-lg mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          راهنمای کامل استفاده و مشخصات فنی محصول
        </motion.p>

        <motion.div
          className="bg-[#1a1d3a] mt-12 p-10 rounded-2xl border border-[#f6905c33] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          <h3 className="text-2xl text-white font-bold mb-2 ">
            راهنمای کاربری آوانتک A7
          </h3>
          <p className="text-[#a0a3bd] mb-6">
            دانلود راهنمای کامل نصب، راه‌اندازی و استفاده از سیستم آوانتک A7
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#f6905c] to-[#e07a47] text-white font-bold transition hover:-translate-y-1"
          >
            <FaDownload /> دانلود راهنما
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Downloads;
