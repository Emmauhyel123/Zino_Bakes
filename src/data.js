import { ASSETS } from './assets.js';

export const PRODUCTS = [
  { id: 1, name: 'Vanilla Bean Layer Cake', price: '$58', tag: 'Best seller', tint: '#f7e7c6', image: ASSETS.pastry,
    blurb: 'Three tender vanilla layers, whipped mascarpone and a crown of fresh berries.',
    ingredients: ['Madagascar vanilla', 'Cultured butter', 'Mascarpone', 'Seasonal berries'], serves: 'Serves 8 to 10' },
  { id: 2, name: 'Almond Croissant', price: '$6', tag: 'Fri to Sun', tint: '#f2b79c', image: ASSETS.pastry,
    blurb: 'Twice-baked, filled with frangipane and dusted with toasted almond flakes.',
    ingredients: ['Laminated dough', 'Almond frangipane', 'Flaked almonds', 'Orange blossom syrup'], serves: 'Single pastry' },
  { id: 3, name: 'Peach Blush Tart', price: '$34', tag: 'Seasonal', tint: '#f4cfc6', image: ASSETS.pastry,
    blurb: 'Buttery shortcrust, vanilla custard and glazed peach slices in a petal pattern.',
    ingredients: ['Shortcrust', 'Vanilla custard', 'Ripe peaches', 'Apricot glaze'], serves: 'Serves 6' },
  { id: 4, name: 'Brown Butter Cookies', price: '$14', tag: 'Box of 4', tint: '#e8cfa3', image: ASSETS.pastry,
    blurb: 'Crisp edges, soft centres and a flake of sea salt on each one.',
    ingredients: ['Brown butter', 'Dark chocolate', 'Muscovado sugar', 'Sea salt'], serves: 'Box of 4' },
  { id: 5, name: 'Honey Cardamom Buns', price: '$16', tag: 'Daily', tint: '#f7e7c6', image: ASSETS.pastry,
    blurb: 'Soft knotted buns brushed with cardamom honey and pearl sugar.',
    ingredients: ['Whole milk', 'Cardamom', 'Wildflower honey', 'Pearl sugar'], serves: 'Box of 4' },
  { id: 6, name: 'Rose Pistachio Cupcakes', price: '$24', tag: 'Gift box', tint: '#f4cfc6', image: ASSETS.pastry,
    blurb: 'Rose-scented sponge, pistachio buttercream and a sugared petal.',
    ingredients: ['Rose water', 'Pistachio', 'Buttercream', 'Sugared petals'], serves: 'Box of 6' },
];

export const SOCIAL = [
  { id: 1, type: 'video', src: ASSETS.reel, ratio: 'aspect-[9/16]', caption: 'Lamination, folded in 60 seconds' },
  { id: 2, type: 'image', src: ASSETS.brandPhoto, ratio: 'aspect-square', caption: 'Saturday morning spread' },
  { id: 3, type: 'image', src: ASSETS.brandPhoto, ratio: 'aspect-[4/5]', caption: 'Flour-dusted hands' },
  { id: 4, type: 'video', src: ASSETS.reel, ratio: 'aspect-[3/4]', caption: 'Piping rosettes' },
  { id: 5, type: 'image', src: ASSETS.brandPhoto, ratio: 'aspect-[3/4]', caption: 'Tart in golden light' },
  { id: 6, type: 'video', src: ASSETS.reel, ratio: 'aspect-square', caption: 'The first slice' },
  { id: 7, type: 'image', src: ASSETS.brandPhoto, ratio: 'aspect-[9/16]', caption: 'Behind the counter' },
];

export const REVIEWS = [
  { id: 1, name: 'Amara O.', role: 'Wedding cake client', image: ASSETS.review,
    text: 'Our wedding cake looked like a painting and tasted even better. Guests are still asking where it came from.' },
  { id: 2, name: 'Daniel K.', role: 'Weekly regular', image: ASSETS.review,
    text: 'The almond croissants are the reason I wake up early on Fridays. Flaky, buttery and never too sweet.' },
  { id: 3, name: 'Tola B.', role: 'Birthday order', image: ASSETS.review,
    text: 'I asked for something peachy and soft. What arrived was perfect, down to the handwritten card.' },
];

export const NAV_LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#feed', label: 'Feed' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#order', label: 'Order' },
];
