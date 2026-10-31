import { useRef, useState } from 'react';
import { SOCIAL } from '../data.js';
import { PlayIcon, InstagramIcon } from './Icons.jsx';
import Reveal from './Reveal.jsx';
import WaveDivider from './WaveDivider.jsx';

function Tile({ item }) {
  const vid = useRef(null);
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-vanilla">
      <div className={`media-fallback ${item.ratio} w-full`}>
        {item.type === 'video' ? (
          <video ref={vid} src={item.src} loop controls playsInline preload="metadata"
                 onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
                 className="h-full w-full object-cover" aria-label={item.caption} />
        ) : (
          <img src={item.src} alt={item.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        )}
      </div>

      {item.type === 'video' && !playing && (
        <span className="play-badge pointer-events-none absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/85 text-espresso opacity-70 shadow-lg group-hover:scale-110 group-hover:opacity-100">
          <PlayIcon />
        </span>
      )}

      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/65 to-transparent p-4 pt-10 text-sm font-semibold text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {item.caption}
      </figcaption>
    </figure>
  );
}

export default function SocialGrid() {
  return (
    <section id="feed" className="bg-blush/40">
      <div className="bg-cream"><WaveDivider fill="#f9e1d9" flip /></div>
      <div className="-mt-px bg-[#f9e1d9] pb-6 pt-8">
        <Reveal className="mx-auto max-w-6xl px-5">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-4xl font-bold sm:text-5xl">From our kitchen feed</h2>
              <p className="mt-3 max-w-md text-espresso/75">Reels, recipes and quiet moments from the bakehouse, updated every week.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 font-bold text-cream hover:opacity-90">
              <InstagramIcon width={18} height={18} /> Follow along
            </a>
          </div>
          <div className="columns-2 gap-4 lg:columns-3">
            {SOCIAL.map((s) => <Tile key={s.id} item={s} />)}
          </div>
        </Reveal>
      </div>
      <WaveDivider fill="#fdf6ec" className="bg-[#f9e1d9]" />
    </section>
  );
}
