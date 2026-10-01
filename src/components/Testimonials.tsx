import { useRef, useState, type PointerEvent } from 'react';
import { motion, AnimatePresence } from '@/lib/nomotion';
import { X } from 'lucide-react';
import t1 from '@/assets/testimonials/testi-11.png.asset.json';
import t2 from '@/assets/testimonials/testi-12.png.asset.json';
import t3 from '@/assets/testimonials/testi-14.png.asset.json';
import t4 from '@/assets/testimonials/testi-15.png.asset.json';
import t5 from '@/assets/testimonials/testi-16.png.asset.json';

const testimonials = [
  { id: 't1', url: t1.url, alt: 'توصية من Ibrahim Elkassem على فيسبوك' },
  { id: 't2', url: t2.url, alt: 'شهادة عميل بالتفصيل عن الشغل والنتائج' },
  { id: 't3', url: t3.url, alt: 'محادثة واتساب من عميل عن أداء الإعلان' },
  { id: 't4', url: t4.url, alt: 'رأي عميل في نتائج الحملات الإعلانية' },
  { id: 't5', url: t5.url, alt: 'تقييم عميل لتجربة العمل والنتائج' },
];

const Testimonials = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const moved = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState<string | null>(null);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    dragStart.current = { x: event.clientX, scrollLeft: viewport.scrollLeft };
    moved.current = false;
    setIsDragging(true);
    setIsPaused(true);
    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport || !isDragging) return;

    const delta = event.clientX - dragStart.current.x;
    if (Math.abs(delta) > 6) moved.current = true;
    viewport.scrollLeft = dragStart.current.scrollLeft - delta;
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport || !isDragging) return;

    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
    window.setTimeout(() => setIsPaused(false), 450);
  };

  const handleCardClick = (url: string) => {
    if (moved.current) return;
    setZoom(url);
  };

  const renderGroup = (duplicate = false) => (
    <div className="brand-marquee-group" aria-hidden={duplicate || undefined}>
      {testimonials.map((item) => (
        <button
          key={`${duplicate ? 'copy-' : ''}${item.id}`}
          type="button"
          tabIndex={duplicate ? -1 : 0}
          onClick={() => handleCardClick(item.url)}
          className="brand-card group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={duplicate ? undefined : `تكبير ${item.alt}`}
        >
          <img
            src={item.url}
            alt={duplicate ? '' : item.alt}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </button>
      ))}
    </div>
  );

  return (
    <section
      id="testimonials"
      dir="rtl"
      className="overflow-hidden bg-background py-8 sm:py-10"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="testimonials-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="fluid-h2 mb-8 text-center font-bold text-primary sm:mb-10"
        >
          آراء من عملائنا
        </motion.h2>

        <div className="brand-marquee-shell">
          <div
            ref={viewportRef}
            className={`brand-marquee-viewport ${isDragging ? 'is-dragging' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => !isDragging && setIsPaused(false)}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}
            aria-label="آراء العملاء"
          >
            <div
              className={`brand-marquee-track testimonials-marquee-track ${isPaused ? 'is-paused' : ''}`}
            >
              {renderGroup()}
              {renderGroup(true)}
            </div>
          </div>
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
