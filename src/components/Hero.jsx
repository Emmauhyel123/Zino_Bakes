import { ASSETS } from '../assets.js';
import WaveDivider from './WaveDivider.jsx';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-espresso">
      <div className="media-fallback absolute inset-0" aria-hidden="true" />
      <video
        src={ASSETS.heroVideo}
        autoPlay loop muted playsInline
        className="object-cover w-full h-screen relative"
        aria-label="Hands shaping and baking dough"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/35 to-espresso/70" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-5 pt-16 text-cream">
          <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Baked slowly,<br />shared warmly.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/90">
            Small-batch cakes and pastries made by hand, plus the stories behind every bake.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#menu" className="rounded-full bg-peach px-8 py-3.5 font-bold text-espresso transition hover:brightness-105">View the Menu</a>
            <a href="#order" className="rounded-full border border-cream/60 px-8 py-3.5 font-semibold transition hover:bg-cream/10">Request a custom cake</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 overflow-hidden"><WaveDivider fill="#fdf6ec" className="wave-drift" /></div>
    </section>
  );
}
