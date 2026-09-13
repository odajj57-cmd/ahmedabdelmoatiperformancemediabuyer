import { useRef, useState, type PointerEvent } from 'react';
import brandBaseeta from '@/assets/brands/experience/IMG-20260912-WA0066.jpg.asset.json';
import brandEbano from '@/assets/brands/experience/IMG-20260912-WA0067.jpg.asset.json';
import brandOrigami from '@/assets/brands/experience/IMG-20260912-WA0068.jpg.asset.json';
import brandCore from '@/assets/brands/experience/IMG-20260912-WA0069.jpg.asset.json';
import brandMisan from '@/assets/brands/experience/IMG-20260912-WA0070.jpg.asset.json';
import brandAboElwafa from '@/assets/brands/experience/IMG-20260912-WA0071.jpg.asset.json';
import brandArtika from '@/assets/brands/experience/IMG-20260912-WA0072.jpg.asset.json';
import brandRadwan from '@/assets/brands/experience/IMG-20260912-WA0073.jpg.asset.json';
import brandFinalShot from '@/assets/brands/experience/IMG-20260912-WA0074.jpg.asset.json';

const brands = [
  { name: 'بسيطة', image: brandBaseeta.url },
  { name: 'Ebano', image: brandEbano.url },
  { name: 'Origami', image: brandOrigami.url },
  { name: 'Core Contracting & Design', image: brandCore.url },
  { name: 'Misan', image: brandMisan.url },
  { name: 'Abo Elwafa Furniture', image: brandAboElwafa.url },
  { name: 'Artika Luxury Furniture', image: brandArtika.url },
  { name: 'Radwan El Bedweihy Furniture', image: brandRadwan.url },
  { name: 'Final Shot', image: brandFinalShot.url },
];

const BrandCards = ({ duplicate = false }: { duplicate?: boolean }) => (
  <div className="brand-marquee-group" aria-hidden={duplicate || undefined}>
    {brands.map((brand) => (
      <article className="brand-card group" key={`${duplicate ? 'copy-' : ''}${brand.name}`}>
        <img
          src={brand.image}
          alt={duplicate ? '' : `شعار ${brand.name}`}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </article>
    ))}
  </div>
);

const BrandExperience = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    dragStart.current = { x: event.clientX, scrollLeft: viewport.scrollLeft };
    setIsDragging(true);
    setIsPaused(true);
    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport || !isDragging) return;

    viewport.scrollLeft = dragStart.current.scrollLeft - (event.clientX - dragStart.current.x);
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

  return (
    <section
      id="experience"
      dir="rtl"
      className="overflow-hidden bg-background py-8 sm:py-10"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="experience-heading"
          className="fluid-h2 mb-8 text-center font-bold text-primary sm:mb-10"
        >
          نماذج من البراندات والقطاعات اللي اشتغلت عليها
        </h2>

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
            aria-label="شعارات البراندات والقطاعات"
          >
            <div className={`brand-marquee-track ${isPaused ? 'is-paused' : ''}`}>
              <BrandCards />
              <BrandCards duplicate />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandExperience;