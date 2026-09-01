interface LoaderProps {
  hiding: boolean;
}

const Loader = ({ hiding }: LoaderProps) => (
  <div
    aria-hidden={hiding}
    className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
      hiding ? "pointer-events-none opacity-0" : "opacity-100"
    }`}
  >
    <svg viewBox="0 0 50 50" className="lab-spinner h-12 w-12">
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-primary/20"
      />
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="90 126"
        className="text-primary"
      />
    </svg>
    <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
      Mohamed Abdelkader
    </p>
    <p className="mt-1 text-xs tracking-[0.3em] text-muted-foreground uppercase">
      Performance Marketer
    </p>
  </div>
);

export default Loader;
