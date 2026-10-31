import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MenuCarousel from './components/MenuCarousel.jsx';
import SocialGrid from './components/SocialGrid.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuCarousel />
        <SocialGrid />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
