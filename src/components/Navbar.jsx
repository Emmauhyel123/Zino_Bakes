import { useEffect, useState } from 'react';
import { ASSETS } from '../assets.js';
import { NAV_LINKS } from '../data.js';
import { MenuIcon, CloseIcon } from './Icons.jsx';

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const tone = solid || open ? 'text-espresso' : 'text-cream';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid || open ? 'bg-cream/95 shadow-[0_8px_30px_-18px_rgba(59,42,36,.5)] backdrop-blur' : 'bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <nav className={`mx-auto flex h-16 max-w-6xl items-center justify-between px-5 ${tone}`} aria-label="Main">
        <a href="#top" className="flex items-center gap-3">
          <img src={ASSETS.logo} alt="Crumb & Cream logo" className="h-9 w-9 rounded-full object-cover media-fallback" />
          <span className="font-serif text-xl font-bold">Crumb &amp; Cream</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href} className="transition-opacity hover:opacity-60">{l.label}</a></li>
          ))}
        </ul>

        <button className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
                onClick={() => setOpen((o) => !o)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-espresso/10 px-5 pb-5 pt-2 text-espresso md:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 font-semibold">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
