import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Audience from './components/Audience';
import GreenBanner from './components/GreenBanner';
import Capabilities from './components/Capabilities';
import GradientCTA from './components/GradientCTA';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import RequestModal from './components/RequestModal';
import { NavLink } from './types';

const navLinks: NavLink[] = [
  { id: 'projects', label: 'Проекты', href: '#portfolio' },
  { id: 'features', label: 'Преимущества', href: '#features-section' },
  { id: 'stats', label: 'Опыт в цифрах', href: '#stats-section' },
  { id: 'audience', label: 'Кому помогаем', href: '#audience-section' },
  { id: 'capabilities', label: 'Услуги', href: '#capabilities-section' },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialCategory, setModalInitialCategory] = useState('');

  const openContactModal = (category: string = '') => {
    setModalInitialCategory(category);
    setIsModalOpen(true);
  };

  return (
    <div id="landing-app" className="min-h-screen bg-[#0B0C10] text-zinc-300 font-sans selection:bg-purple-500/30 selection:text-white scroll-smooth">
      {/* Decorative top header grid glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-purple-950/10 via-zinc-950/0 to-transparent pointer-events-none" />

      {/* Navigation */}
      <Navbar onContactClick={() => openContactModal()} links={navLinks} />

      {/* Main Content Layout */}
      <main id="main-content">
        {/* 1. Hero banner with custom grid */}
        <Hero onContactClick={() => openContactModal('design_from_scratch')} />

        {/* 2. Key Features list */}
        <Features />

        {/* 3. Scale and Numbers stats */}
        <Stats />

        {/* 4. Target audience 3 cards */}
        <Audience onContactClick={(cat) => openContactModal(cat)} />

        {/* 5. Emerald Custom green-glow banner */}
        <GreenBanner onContactClick={() => openContactModal('other')} />

        {/* 6. Capabilities lists */}
        <Capabilities />

        {/* 7. Special gradient prompt banner */}
        <GradientCTA onContactClick={() => openContactModal('design_from_scratch')} />

        {/* 8. Beautiful high fidelity Portfolio cards */}
        <Portfolio onContactClick={(projName) => openContactModal(`other`)} />
      </main>

      {/* Footer Details */}
      <Footer links={navLinks} />

      {/* Contact discussion modal */}
      <RequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCategory={modalInitialCategory}
      />
    </div>
  );
}
