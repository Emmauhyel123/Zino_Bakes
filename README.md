# Crumb & Cream Bakehouse (React + Tailwind + Vite)

## Run it
    npm install
    npm run dev        # local preview
    npm run build      # production build in /dist

## Add your media
Open `src/assets.js` and replace each `[INSERT_...]` placeholder with a file path or URL
(put files in `/public`, then use e.g. `/media/hero.mp4`).

## Where things live
- `src/data.js`        menu items, social tiles, reviews, nav links
- `src/components/`    one file per section (Navbar, Hero, MenuCarousel, ProductModal, SocialGrid, Testimonials, ContactForm, Footer)
- `src/index.css`      custom CSS: waves, reveal, modal, fades
- `tailwind.config.js` palette (cream, vanilla, blush, peach, espresso) and fonts
- `ContactForm.jsx`    form currently logs to console; connect to your backend or Formspree
