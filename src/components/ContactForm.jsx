import { useState } from 'react';
import Reveal from './Reveal.jsx';
import WaveDivider from './WaveDivider.jsx';

const EMPTY = { name: '', email: '', type: 'Custom cake', date: '', message: '' };
const field = 'mt-1.5 w-full rounded-2xl border border-espresso/15 bg-white/80 px-4 py-3 text-espresso placeholder:text-espresso/40 focus:border-peach focus:outline-none';

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your backend, Formspree, or an email service.
    console.log('Order inquiry', form);
    setSent(true);
    setForm(EMPTY);
  };

  return (
    <section id="order" className="bg-cream">
      <div className="bg-cream"><WaveDivider fill="#f7e7c6" flip /></div>
      <div className="-mt-px bg-vanilla/70 pb-20 pt-10">
        <Reveal className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="font-serif text-4xl font-bold sm:text-5xl">Start an order</h2>
            <p className="mt-4 leading-relaxed text-espresso/80">
              Tell us about your celebration, or a brand collaboration. We reply within two working days.
            </p>
          </div>

          <div className="md:col-span-3">
            {sent ? (
              <div className="rounded-[2rem] bg-white/80 p-8 text-center" role="status">
                <h3 className="font-serif text-2xl font-bold">Inquiry received</h3>
                <p className="mt-3 text-espresso/75">Thanks for writing. We will email you within two working days.</p>
                <button onClick={() => setSent(false)} className="mt-6 rounded-full bg-espresso px-6 py-3 font-bold text-cream">Send another inquiry</button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5 rounded-[2rem] bg-white/60 p-6 sm:grid-cols-2 sm:p-8">
                <label className="block text-sm font-bold">Your name
                  <input required value={form.name} onChange={set('name')} className={field} placeholder="Ada Bello" autoComplete="name" />
                </label>
                <label className="block text-sm font-bold">Email
                  <input required type="email" value={form.email} onChange={set('email')} className={field} placeholder="you@example.com" autoComplete="email" />
                </label>
                <label className="block text-sm font-bold">What do you need?
                  <select value={form.type} onChange={set('type')} className={field}>
                    <option>Custom cake</option><option>Pastry box</option><option>Event catering</option><option>Content collaboration</option>
                  </select>
                </label>
                <label className="block text-sm font-bold">Date needed
                  <input type="date" value={form.date} onChange={set('date')} className={field} />
                </label>
                <label className="block text-sm font-bold sm:col-span-2">Details
                  <textarea required rows={5} value={form.message} onChange={set('message')} className={field}
                            placeholder="Flavours, servings, colours, inspiration..." />
                </label>
                <button type="submit" className="rounded-full bg-espresso px-8 py-3.5 font-bold text-cream transition hover:opacity-90 sm:col-span-2">Send inquiry</button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
