import { motion } from "framer-motion";
import { fadeInUp } from "../animation/fadeInUp";
import { FaPaperPlane } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  contactFormSchema,
  type contactType,
} from "../validation/contactFormSchema";


const ContactForm: React.FC = () => {
  

  
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<contactType>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: contactType) => {
    console.log("Form submitted:", data);
    reset()
  };

  return (
    <div>
      <motion.div
        variants={fadeInUp}
        className="p-8 rounded-2xl bg-[#1a1d3a] border border-[#f6905c1a] shadow"
      >
        <h3 className="text-white font-bold text-xl mb-2 ">
          درخواست مشاوره رایگان
        </h3>
        <p className="text-[#a0a3bd] text-sm mb-6">
          فرم زیر را پر کنید تا کارشناسان ما با شما تماس بگیرند
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              {...register("fullname")}
              className="w-full p-3 rounded bg-[#0e1030] text-white border border-[#f6905c33] focus:outline-none focus:border-[#f6905c]"
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullname.message}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <input
                type="email"
                placeholder="ایمیل"
                {...register("email")}
                className="w-full p-3 rounded bg-[#0e1030] text-white border border-[#f6905c33] focus:outline-none focus:border-[#f6905c]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="tel"
                placeholder="شماره تماس"
                {...register("phone", {
                  onChange: (e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 11);
                    e.target.value = value;
                  },
                })}
                className="w-full p-3 rounded bg-[#0e1030] text-white border border-[#f6905c33] focus:outline-none focus:border-[#f6905c]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <select
              {...register("subject")}
              className="w-full p-3 rounded bg-[#0e1030] text-white border border-[#f6905c33] focus:outline-none focus:border-[#f6905c]"
            >
              <option value="">موضوع درخواست را انتخاب کنید</option>
              <option value="مشاوره و راهنمایی">مشاوره و راهنمایی</option>
              <option value="خرید محصول">خرید محصول</option>
              <option value="پشتیبانی فنی">پشتیبانی فنی</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="پیام شما"
              {...register("textBox")}
              className="w-full p-3 rounded bg-[#0e1030] text-white border border-[#f6905c33] focus:outline-none focus:border-[#f6905c]"
            />
            {errors.textBox && (
              <p className="text-red-500 text-sm mt-1">
                {errors.textBox.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#f6905c] to-[#e07a47] text-white font-bold hover:-translate-y-1 transition"
          >
            ارسال درخواست <FaPaperPlane />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
