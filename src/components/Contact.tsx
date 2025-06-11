import React from "react";


import { motion } from "framer-motion";

import { fadeInUp } from "../animation/fadeInUp";
import { contactItems } from "../constants/contactItems";
import ContactForm from "./ContactForm";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Contact: React.FC = () => {
  console.log(contactItems)
  

  return (
    <section id="contact" className="bg-[#0e1030] py-24 px-4 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white ">
            آماده پاسخگویی به شما هستیم
          </h2>
          <p className="text-[#a0a3bd] text-lg mt-4">
            تیم متخصص آوانتک در خدمت شماست. برای مشاوره رایگان و راهنمایی با ما
            تماس بگیرید
          </p>
        </motion.div>

        {/* Contact Cards & Form */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="flex items-center gap-4 p-6 rounded-2xl bg-[#1a1d3a] border border-[#f6905c1a] hover:shadow-lg transition"
              >
                <button onClick={item.action} className="w-14 h-14 bg-gradient-to-br from-[#f6905c] to-[#e07a47] text-white rounded-full flex items-center justify-center text-lg cursor-pointer">
                  {item.icon}
                </button>
                <div>
                  <h4 className="text-white font-bold ">
                    {item.title}
                  </h4>
                  <p className="text-[#a0a3bd] text-sm">{item.desc}</p>
                  <a
                    
                    className="text-[#f6905c] hover:text-[#ffb189] text-sm font-semibold"
                  >
                    {item.label}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <ContactForm />
        </motion.div>

       
      </div>
    </section>
  );
};

export default Contact;
