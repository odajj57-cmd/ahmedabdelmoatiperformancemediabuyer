import { useEffect, useState } from "react";
import Loader from "./Loader";
import Reveal from "./Reveal";

const services = [
  { title: "Media Buying", body: "Meta & TikTok campaigns built around one measurable business goal." },
  { title: "Creative Testing", body: "Structured hooks, angles and formats tested until winners emerge." },
  { title: "Audience Strategy", body: "Segments defined by intent and value, not guesswork." },
  { title: "Tracking & Data", body: "Clean events, reliable attribution, decisions you can trust." },
  { title: "Optimization", body: "Budget follows proof — daily reads, weekly reallocation." },
  { title: "Scaling", body: "Controlled scale that protects efficiency while volume grows." },
];

const results = [
  { value: "4.56x", label: "Blended ROAS" },
  { value: "0.06 EGP", label: "Cost / Engagement" },
  { value: "809K", label: "Store Revenue" },
  { value: "+47%", label: "Monthly Growth" },
];

const cases = [
  { name: "E-Commerce Performance", body: "11,187 EGP in sales from a 2,454 EGP budget — 4.56x ROAS." },
  { name: "AXIS Design Pass", body: "60,259 real engagements at 0.14 EGP each." },
  { name: "Messaging Campaign", body: "640 direct conversations at 1.60 EGP per chat." },
];

const LabExperience = () => {
  const [hiding, setHiding] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 1400);
    const t2 = setTimeout(() => setDone(true), 1950);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div dir="ltr" className="min-h-screen bg-background text-foreground">
      {!done && <Loader hiding={hiding} />}

      <div className={hiding ? "lab-enter" : "opacity-0"}>
        <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <span className="text-sm font-bold tracking-widest uppercase">MA</span>
          <a
            href="#contact"
            className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Get in touch
          </a>
        </header>

        <section className="mx-auto max-w-5xl px-6 pt-16 pb-24 sm:pt-24">
          <Reveal as="h1" className="text-4xl leading-tight font-bold sm:text-6xl">
            Ahmed Abdel Moati
          </Reveal>
          <Reveal delay={80} as="p" className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Performance Marketer turning campaign data into profitable business decisions.
          </Reveal>
          <Reveal delay={160} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
            >
              See the work
            </a>
            <a
              href="#services"
              className="rounded-xl border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-card"
            >
              What I do
            </a>
          </Reveal>
        </section>

        <section id="about" className="mx-auto max-w-5xl border-t border-border px-6 py-20">
          <Reveal as="h2" className="text-2xl font-bold sm:text-3xl">
            About
          </Reveal>
          <Reveal delay={80} as="p" className="mt-4 max-w-3xl text-muted-foreground">
            I build paid media systems on Meta and TikTok with a simple loop: Test, Analyze,
            Optimize, Scale. Every budget shift is backed by numbers, not opinions.
          </Reveal>
        </section>

        <section id="services" className="mx-auto max-w-5xl border-t border-border px-6 py-20">
          <Reveal as="h2" className="text-2xl font-bold sm:text-3xl">
            Services
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl border-t border-border px-6 py-20">
          <Reveal as="h2" className="text-2xl font-bold sm:text-3xl">
            Results
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {results.map((r, i) => (
              <Reveal key={r.label} delay={i * 70}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center">
                  <p className="text-2xl font-bold text-primary sm:text-3xl">{r.value}</p>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                    {r.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-5xl border-t border-border px-6 py-20">
          <Reveal as="h2" className="text-2xl font-bold sm:text-3xl">
            Case Studies
          </Reveal>
          <div className="mt-8 space-y-4">
            {cases.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <article className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-semibold">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl border-t border-border px-6 py-24">
          <Reveal as="h2" className="text-2xl font-bold sm:text-3xl">
            Let's talk
          </Reveal>
          <Reveal delay={80} as="p" className="mt-3 text-muted-foreground">
            Ready to turn campaign data into profitable decisions?
          </Reveal>
          <Reveal delay={160} className="mt-6">
            <a
              href="https://wa.me/201019916503"
              className="inline-flex rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform duration-200 hover:scale-105"
            >
              Message on WhatsApp
            </a>
          </Reveal>
        </section>

        <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ahmed Abdel Moati
        </footer>
      </div>
    </div>
  );
};

export default LabExperience;
