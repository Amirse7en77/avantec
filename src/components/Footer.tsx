import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpStagger } from '../animation/fadeUpstagger';



const Footer: React.FC = () => {
  const columns = [
    {
      title: 'آوانتک',
      content: (
        <p className="text-[#a0a3bd] text-sm">
          نسل جدید سیستم‌های امنیتی و کنترلی مبتنی بر اینترنت. امنیت و هوشمندی محیط‌های مسکونی و صنعتی.
        </p>
      ),
    },
    {
      title: 'لینک‌های مفید',
      content: (
        <ul className="text-[#a0a3bd] text-sm space-y-1">
          <li><a href="#features" className="hover:text-[#f6905c]">ویژگی‌ها</a></li>
          <li><a href="#apps" className="hover:text-[#f6905c]">اپلیکیشن</a></li>
          <li><a href="#downloads" className="hover:text-[#f6905c]">دانلود</a></li>
          <li><a href="#contact" className="hover:text-[#f6905c]">تماس با ما</a></li>
        </ul>
      ),
    },
    {
      title: 'پشتیبانی',
      content: (
        <ul className="text-[#a0a3bd] text-sm space-y-1">
          <li><a href="#" className="hover:text-[#f6905c]">راهنمای کاربری</a></li>
          <li><a href="#faq" className="hover:text-[#f6905c]">سوالات متداول</a></li>
          <li><a href="#" className="hover:text-[#f6905c]">پشتیبانی فنی</a></li>
          <li><a href="#" className="hover:text-[#f6905c]">گارانتی</a></li>
        </ul>
      ),
    },
    {
      title: 'تماس',
      content: (
        <>
          <p className="text-[#a0a3bd] text-sm">تلفن: 021-88888888</p>
          <p className="text-[#a0a3bd] text-sm">ایمیل: info@avantec.ir</p>
          <p className="text-[#a0a3bd] text-sm">آدرس: تهران، خیابان ولیعصر</p>
        </>
      ),
    },
  ];

  return (
    <footer className="bg-[#0a0b1f] pt-16 pb-6 px-4 border-t border-[#f6905c33]">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="grid gap-8 md:grid-cols-4 mb-12 text-right">
          {columns.map((col, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpStagger}
              custom={i}
            >
              <h3 className="text-[#f6905c] font-bold mb-2 ">{col.title}</h3>
              {col.content}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-[#a0a3bd] text-sm border-t border-[#f6905c1a] pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          &copy; 2025 آوانتک. تمامی حقوق محفوظ است.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
