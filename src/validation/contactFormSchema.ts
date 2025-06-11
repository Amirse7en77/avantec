import { z } from "zod";

// ✅ Zod schema
export const contactFormSchema = z.object({
  fullname: z
    .string()
    .min(6, "حداقل باید 6 حرف باشد")
    .max(30, "نام شما نمیتواند بیشتر از 30 حرف باشد"),

  email: z
    .string()
    .email("لطفا ایمیل را صحیح وارد کنید"),

  phone: z
    .string()
    .regex(/^\d{11}$/, "شماره موبایل باید 11 رقم باشد"),

  subject: z.enum(["مشاوره و راهنمایی", "خرید محصول", "پشتیبانی فنی"], {
    errorMap: () => ({ message: "لطفا یک موضوع را انتخاب نمایید" }),
  }),

  textBox: z
    .string()
    .min(6, "حداقل باید 6 حرف باشد")
    .max(100, "حداکثر کاراکتر 100 حرف است"),
});

// ✅ Typescript type inferred from schema
export type contactType = z.infer<typeof contactFormSchema>;
