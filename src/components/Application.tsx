import React from 'react';
import { FaAndroid, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image1 from './../../public/images/Mockup-iphone-2-1-1-1.png'
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Application: React.FC = () => {
  return (
    <section id="apps" className="bg-[#0e1030] py-24 px-4">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* App Placeholder */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="w-full max-w-sm h-[500px]     flex items-center justify-center text-[#a0a3bd] text-lg text-center px-4">
           <img src={image1}/>
          </div>
        </motion.div>

        {/* Text + Buttons */}
        <motion.div
          className="text-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white  mb-4">
            کنترل در لحظه
          </h2>
          <p className="text-[#a0a3bd] text-lg leading-relaxed mb-6">
            با اپلیکیشن اختصاصی آوانتک، همه جا و هر زمان بر وضعیت سیستم امنیتی خود نظارت داشته باشید. دریافت اعلانات لحظه‌ای و کنترل کامل دستگاه.
          </p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center "
            variants={fadeInUp}
            custom={2}
          >
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-3 bg-[#1a1d3a] border border-[#f6905c33] rounded-xl text-white hover:bg-[#f6905c] transition"
            >
              <FaAndroid /> دانلود اپلیکیشن اندروید
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-3 bg-[#1a1d3a] border border-[#f6905c33] rounded-xl text-white hover:bg-[#f6905c] transition"
            >
              <FaGlobe /> وب‌اپ (PWA)
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Application;
