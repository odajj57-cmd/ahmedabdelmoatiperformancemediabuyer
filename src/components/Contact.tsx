import { motion } from '@/lib/nomotion';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { WHATSAPP_URL, LINKEDIN_URL } from '@/lib/links';


const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="fluid-h2 font-bold text-primary">يلا بينا بداية أول حملة إعلانية من هنا</h2>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          <motion.a
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل معي عبر واتساب"
            className="group relative isolate flex flex-col items-center justify-center w-full overflow-hidden bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white rounded-2xl py-4 sm:py-5 px-5 sm:px-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-[hsl(142,70%,45%)]/30"
          >
            <FaWhatsapp
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[2.5em] text-gold-watermark opacity-[0.28]"
            />
            <span className="relative z-10 fluid-h3 font-bold mb-2 text-center">
              من الإعلان لشراء المنتج أو الخدمة جاهز نبني Funnel ونحول البيانات لقرارات ربحية في
              البراند؟
            </span>
            <span className="relative z-10 fluid-label text-white font-semibold">*دوس على الشريط*</span>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل معي عبر لينكد إن"
            className="group relative isolate flex flex-col items-center justify-center w-full overflow-hidden bg-[hsl(201,100%,35%)] hover:bg-[hsl(201,100%,30%)] text-white rounded-2xl py-4 sm:py-5 px-5 sm:px-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-[hsl(201,100%,35%)]/30"
          >
            <FaLinkedinIn
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[2.5em] text-white opacity-[0.28]"
            />
            <span className="relative z-10 fluid-h3 font-bold mb-2 text-center">
              عايز تعرف أكتر عني ؟
            </span>
            <span className="relative z-10 fluid-label text-white font-semibold">*دوس على الشريط*</span>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
