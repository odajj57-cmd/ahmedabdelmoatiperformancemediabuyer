import { useState } from 'react';
import { motion, AnimatePresence } from '@/lib/nomotion';
import { X } from 'lucide-react';
import t1 from '@/assets/testimonials/IMG-20260906-WA0040.jpg.asset.json';
import t2 from '@/assets/testimonials/IMG-20260906-WA0041.jpg.asset.json';
import t3 from '@/assets/testimonials/IMG-20260906-WA0044.jpg.asset.json';

const testimonials = [
  { id: 't1', url: t1.url, alt: 'توصية من Ibrahim Elkassem على فيسبوك' },
  { id: 't2', url: t2.url, alt: 'شهادة عميل بالتفصيل عن الشغل والنتائج' },
  { id: 't3', url: t3.url, alt: 'شهادة م/ إبراهيم القاسم عن الويب سايت' },
];

const Testimonials = () => {
  const [zoom, setZoom] = useState<string | null>(null);

  return (
    <section
      id="testimonials"
      dir="rtl"
      className="bg-background py-12 sm:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="testimonials-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="fluid-h2 mb-10 text-center font-bold text-primary sm:mb-10"
        >
          شهادة من عملائي
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setZoom(item.url)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg transition-all duration-300 hover:border-gold/40 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`تكبير ${item.alt}`}
            >
              <img
                src={item.url}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(null)}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/90 p-4 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setZoom(null)}
              aria-label="إغلاق"
              className="fixed top-5 right-5 z-10 rounded-full bg-background/80 p-2 text-destructive transition-transform hover:scale-110"
            >
              <X className="h-7 w-7" strokeWidth={3} />
            </button>
            <motion.img
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              src={zoom}
              alt="شهادة عميل بحجم كامل"
              className="w-full max-w-3xl rounded-2xl border border-gold/30"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
