import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { faqList } from '../constants/faqList';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../animation/fadeInUp';




const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#0a0b1f] py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white ">سوالات متداول</h2>
          <p className="text-[#a0a3bd] text-lg mt-4">
            پاسخ سوالات رایج درباره آوانتک A7 را در اینجا بیابید
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <motion.div
              key={index}
              className={`rounded-xl overflow-hidden border border-[#f6905c1a] bg-[#1a1d3a] transition-all ${activeIndex === index ? 'shadow-lg' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index + 1}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-white text-right hover:bg-[#f6905c0d]"
              >
                <span className="text-base font-bold ">{faq.question}</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-[#f6905c]' : ''}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    
                    
                    className="px-6 pb-4 text-[#a0a3bd] text-sm leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
