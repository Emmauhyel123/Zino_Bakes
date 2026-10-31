import { ASSETS } from '../assets.js';
import { InstagramIcon, TikTokIcon, YouTubeIcon } from './Icons.jsx';
import WaveDivider from './WaveDivider.jsx';

const SOCIALS = [
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'TikTok', href: '#', Icon: TikTokIcon },
  { label: 'YouTube', href: '#', Icon: YouTubeIcon },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-cream">
      <div className="bg-vanilla/70"><WaveDivider fill="#3b2a24" /></div>
      <img src={ASSETS.pattern} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 pb-12 pt-6 text-center">
        <img src={ASSETS.logo} alt="Crumb & Cream logo" className="media-fallback h-20 w-20 rounded-full object-cover" />
        <p className="font-serif text-2xl">Come by for something warm.</p>
        <p className="text-cream/70">Open Tuesday to Sunday, 7am until sold out.</p>
        <ul className="flex gap-4">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} aria-label={label} className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/30 transition hover:bg-peach hover:text-espresso"><Icon /></a>
            </li>
          ))}
        </ul>
        <small className="text-cream/50">&copy; {new Date().getFullYear()} Crumb &amp; Cream Bakehouse</small>
      </div>
    </footer>
  );
}
