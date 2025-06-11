import React from 'react';
import { securityItems } from '../constants/securityItems';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Security: React.FC = () => {
  return (
    <section className="bg-[#0a0b1f] py-24 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          امنیت، هر آنچه که فکرش را بکنید!
        </motion.h2>

        <motion.p
          className="text-[#a0a3bd] text-lg mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          سیستم امنیتی آوانتک با بهره‌گیری از جدیدترین تکنولوژی‌ها
        </motion.p>

        <motion.div
          className="grid gap-8 mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {securityItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1d3a] p-8 rounded-2xl border border-[#f6905c1a] hover:border-[#f6905c] transition transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#f6905c] to-[#e07a47] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-white text-xl font-bold ">{item.title}</h3>
              <p className="text-[#a0a3bd] mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
