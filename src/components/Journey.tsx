import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  'بنحط الخطة',
  'نجرب',
  'بنعمل اختبارات',
  'بحلل البيانات',
  'بنحسن',
  'نكبر',
];

// Desktop: horizontal wavy path drawn from right (1160) to left (40)
const D_W = 1200;
const D_H = 260;
const desktopPath =
  'M 1160 130 C 1085 55, 1011 55, 936 130 C 861 205, 787 205, 712 130 C 637 55, 563 55, 488 130 C 413 205, 339 205, 264 130 C 189 55, 115 55, 40 130';

// Mobile: vertical wavy path from top to bottom
const M_W = 320;
const M_H = 720;
const mobilePath =
  'M 160 20 C 80 80, 80 120, 160 155 C 240 190, 240 250, 160 290 C 80 330, 80 385, 160 425 C 240 465, 240 520, 160 560 C 80 600, 80 650, 160 690';

function nodesFor(pathD: string, width: number, height: number) {
  return { pathD, width, height };
}

const Journey = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const drawDuration = 3.2;

  const renderPath = (
    { pathD, width, height }: ReturnType<typeof nodesFor>,
    orientation: 'h' | 'v',
  ) => {
    // compute node positions along path using SVG API is not available on server,
    // so use fixed proportional coordinates matching the curve.
    const desktopNodes = [
      { x: 1160, y: 130, up: true },
      { x: 936, y: 130, up: false },
      { x: 712, y: 130, up: true },
      { x: 488, y: 130, up: false },
      { x: 264, y: 130, up: true },
      { x: 40, y: 130, up: false },
    ];
    const mobileNodes = [
      { x: 160, y: 20, up: true },
      { x: 160, y: 155, up: false },
      { x: 160, y: 290, up: true },
      { x: 160, y: 425, up: false },
      { x: 160, y: 560, up: true },
      { x: 160, y: 690, up: false },
    ];
    const nodes = orientation === 'h' ? desktopNodes : mobileNodes;

    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible"
        role="presentation"
      >
        <defs>
          <linearGradient id={`jg-${orientation}`} x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="60%" stopColor="var(--gold)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>
          <filter id={`jglow-${orientation}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* base track */}
        <path d={pathD} fill="none" stroke="var(--border)" strokeWidth="1" opacity="0.5" />

        {/* animated drawn path (looping automation) */}
        <motion.path
          d={pathD}
          fill="none"
          stroke={`url(#jg-${orientation})`}
          strokeWidth="1.6"
          strokeLinecap="round"
          filter={`url(#jglow-${orientation})`}
          initial={{ pathLength: 0, opacity: 0.6 }}
          animate={inView ? { pathLength: [0, 1, 1], opacity: [0.6, 1, 0.6] } : { pathLength: 0 }}
          transition={{
            duration: drawDuration + 1.2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.4,
          }}
        />

        {/* moving glow */}
        {inView && (
          <>
            <circle r="6" fill="var(--gold)" filter={`url(#jglow-${orientation})`}>
              <animateMotion
                dur={`${drawDuration}s`}
                repeatCount="indefinite"
                path={pathD}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.06;0.9;1"
                dur={`${drawDuration}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle r="14" fill="var(--gold)" opacity="0.18" filter={`url(#jglow-${orientation})`}>
              <animateMotion
                dur={`${drawDuration}s`}
                repeatCount="indefinite"
                path={pathD}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              />
            </circle>
          </>
        )}

        {nodes.map((n, i) => {
          const delay = (i / (nodes.length - 1)) * drawDuration * 0.95;
          return (
            <motion.g
              key={n.x + '-' + n.y}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay }}
            >
              <circle
                cx={n.x}
                cy={n.y}
                r="10"
                fill="var(--primary)"
                opacity="0.18"
                filter={`url(#jglow-${orientation})`}
              >
                <animate
                  attributeName="r"
                  values="9;16;9"
                  dur="2.6s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.1;0.3;0.1"
                  dur="2.6s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={n.x} cy={n.y} r="4" fill="var(--gold)" filter={`url(#jglow-${orientation})`} />
              <text
                x={orientation === 'h' ? n.x : n.x + 26}
                y={orientation === 'h' ? n.y + (n.up ? -30 : 42) : n.y + 6}
                textAnchor={orientation === 'h' ? 'middle' : 'start'}
                className="fill-foreground"
                style={{ fontSize: orientation === 'h' ? 18 : 16, fontWeight: 600 }}
              >
                {steps[i]}
              </text>
            </motion.g>
          );
        })}
      </svg>
    );
  };

  return (
    <section id="journey" className="py-12 sm:py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[420px] h-[420px] bg-accent rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-8 sm:mb-10"
        >
          إزاي بشتغل؟
        </motion.h2>

        <div className="hidden md:block">{renderPath(nodesFor(desktopPath, D_W, D_H), 'h')}</div>
        <div className="md:hidden">{renderPath(nodesFor(mobilePath, M_W, M_H), 'v')}</div>
      </div>
    </section>
  );
};

export default Journey;
