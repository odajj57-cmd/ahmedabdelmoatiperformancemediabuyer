import { createElement, forwardRef, type ReactNode } from "react";

/**
 * Drop-in replacement for framer-motion that renders plain DOM elements.
 * Used to keep animations only in the "إزاي بشتغل؟" section.
 */
const ANIMATION_PROPS = new Set([
  "initial",
  "animate",
  "exit",
  "transition",
  "variants",
  "viewport",
  "whileInView",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "layout",
  "layoutId",
  "drag",
  "style_",
]);

function strip(props: Record<string, unknown>) {
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(props)) {
    if (!ANIMATION_PROPS.has(key)) out[key] = props[key];
  }
  return out;
}

export const motion: any = new Proxy(
  {},
  {
    get: (_t, tag: string) =>
      forwardRef((props: Record<string, unknown>, ref) =>
        createElement(tag, { ...strip(props), ref }),
      ),
  },
);

export const AnimatePresence = ({ children }: { children?: ReactNode }) => <>{children}</>;
