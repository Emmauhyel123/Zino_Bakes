import { useRef, useState } from 'react';
import { PRODUCTS } from '../data.js';
import ProductModal from './ProductModal.jsx';
import Reveal from './Reveal.jsx';
import { ChevronIcon } from './Icons.jsx';

export default function MenuCarousel() {
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(null);

  const cardWidth = () => (track.current?.firstElementChild?.offsetWidth ?? 280) + 20;
  const step = (dir) => track.current?.scrollBy({ left: dir * cardWidth(), behavior: 'smooth' });
  const onScroll = () => {
    const el = track.current;
    setActive(Math.min(PRODUCTS.length - 1, Math.round(el.scrollLeft / cardWidth())));
  };

  return (
    <section id="menu" className="bg-cream py-20 transition-colors duration-700"
             style={{ background: `linear-gradient(180deg,#fdf6ec,${PRODUCTS[active].tint}66 55%,#fdf6ec)` }}>
      <Reveal className="mx-auto mb-10 flex max-w-6xl items-end justify-between gap-4 px-5">
        <div>
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">Fresh from the oven</h2>
          <p className="mt-3 max-w-md text-espresso/75">Swipe through our best sellers. Tap any bake for ingredients and pricing.</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button onClick={() => step(-1)} aria-label="Previous bake" className="rounded-full bg-white/80 p-3 shadow hover:bg-white"><ChevronIcon dir="left" /></button>
          <button onClick={() => step(1)} aria-label="Next bake" className="rounded-full bg-white/80 p-3 shadow hover:bg-white"><ChevronIcon /></button>
        </div>
      </Reveal>

      <div ref={track} onScroll={onScroll}
           className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-8 sm:px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))]">
        {PRODUCTS.map((p) => (
          <button key={p.id} onClick={() => setSelected(p)}
                  className="product-card w-[78%] shrink-0 snap-start overflow-hidden rounded-[1.75rem] bg-white text-left sm:w-72"
                  aria-label={`${p.name}, ${p.price}. Open details`}>
            <div className="media-fallback h-60" style={{ backgroundColor: p.tint }}>
              <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-serif text-xl font-bold leading-snug">{p.name}</span>
                <span className="font-bold">{p.price}</span>
              </div>
              <p className="mt-2 text-sm leading-snug text-espresso/70">{p.blurb}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-1 flex justify-center gap-2" aria-hidden="true">
        {PRODUCTS.map((p, i) => (
          <span key={p.id} className="h-2 rounded-full bg-espresso transition-all duration-500"
                style={{ width: i === active ? 28 : 8, opacity: i === active ? 0.8 : 0.22 }} />
        ))}
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
