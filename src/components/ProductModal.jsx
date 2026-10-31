import { useEffect, useRef } from 'react';
import { CloseIcon } from './Icons.jsx';

export default function ProductModal({ product, onClose }) {
  const closeBtn = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  return (
    <div className="modal-veil fixed inset-0 z-50 flex items-center justify-center bg-espresso/70 p-4 backdrop-blur-sm"
         onClick={onClose} role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="modal-panel relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-[2rem] bg-cream shadow-2xl md:flex-row"
           onClick={(e) => e.stopPropagation()}>
        <button ref={closeBtn} onClick={onClose} aria-label="Close"
                className="absolute right-4 top-4 z-10 rounded-full bg-cream/90 p-2 shadow hover:bg-white">
          <CloseIcon />
        </button>

        <div className="media-fallback h-56 shrink-0 md:h-auto md:w-1/2">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div className="overflow-y-auto p-7 md:w-1/2">
          <p className="text-sm font-bold text-espresso/60">{product.tag}</p>
          <div className="mt-1 flex items-baseline justify-between gap-4">
            <h3 className="font-serif text-3xl font-bold leading-tight">{product.name}</h3>
            <span className="font-serif text-2xl">{product.price}</span>
          </div>
          <p className="mt-4 leading-relaxed text-espresso/85">{product.blurb}</p>

          <h4 className="mt-6 text-sm font-bold">Made with</h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {product.ingredients.map((x) => (
              <li key={x} className="rounded-full bg-vanilla px-3 py-1 text-sm">{x}</li>
            ))}
          </ul>

          <p className="mt-5 text-sm text-espresso/65">{product.serves}</p>
          <a href="#order" onClick={onClose}
             className="mt-6 block rounded-full bg-espresso py-3.5 text-center font-bold text-cream transition hover:opacity-90">
            Order this bake
          </a>
        </div>
      </div>
    </div>
  );
}
