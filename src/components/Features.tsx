import React from 'react';
import { features } from '../constants/features';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animation/fadeInUp';



const Features: React.FC = () => {
  return (
    <section id="features" className="bg-[#0a0b1f] py-24 px-4">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white ">
            ویژگی‌های آوانتک A7
          </h2>
          <p className="text-[#a0a3bd] text-lg max-w-xl mx-auto mt-4">
            سیستم امنیتی هوشمند با قابلیت‌های پیشرفته برای محیط‌های مسکونی و صنعتی
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1d3a] p-10 rounded-2xl border border-[#f6905c1a] hover:shadow-xl hover:-translate-y-1 transition relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index + 1}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#f6905c] to-[#e07a47] rounded-xl flex items-center justify-center text-white text-xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-4 ">
                {feature.title}
              </h3>
              <p className="text-[#a0a3bd] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
