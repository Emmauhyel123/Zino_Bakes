import { useEffect, useState } from 'react';
import { REVIEWS } from '../data.js';
import StarRating from './StarRating.jsx';
import Reveal from './Reveal.jsx';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="reviews" className="bg-cream py-20">
      <Reveal className="mx-auto max-w-4xl px-5 text-center">
        <h2 className="font-serif text-4xl font-bold sm:text-5xl">Kind words</h2>
        <p className="mx-auto mt-3 max-w-md text-espresso/75">A few notes from the people we bake for.</p>

        <div className="relative mt-12 min-h-[26rem] sm:min-h-[22rem]"
             onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
             onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
             aria-live="polite">
          {REVIEWS.map((r, idx) => (
            <blockquote key={r.id}
              className={`fade-slide absolute inset-0 flex flex-col items-center gap-6 rounded-[2rem] bg-vanilla/60 p-8 sm:flex-row sm:text-left ${
                idx === i ? 'opacity-100 translate-y-0' : 'pointer-events-none translate-y-3 opacity-0'}`}
              aria-hidden={idx !== i}>
              <div className="media-fallback h-32 w-32 shrink-0 overflow-hidden rounded-full sm:h-40 sm:w-40">
                <img src={r.image} alt={`${r.name}'s order`} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div>
                <StarRating value={5} />
                <p className="mt-4 font-serif text-xl leading-relaxed sm:text-2xl">{r.text}</p>
                <footer className="mt-5 text-sm"><strong>{r.name}</strong><span className="text-espresso/60">, {r.role}</span></footer>
              </div>
            </blockquote>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {REVIEWS.map((r, idx) => (
            <button key={r.id} onClick={() => setI(idx)} aria-label={`Show review ${idx + 1}`} aria-current={idx === i}
                    className="h-2.5 rounded-full bg-espresso transition-all duration-500"
                    style={{ width: idx === i ? 30 : 10, opacity: idx === i ? 0.8 : 0.25 }} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
