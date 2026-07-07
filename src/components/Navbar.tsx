import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Send, MessageSquareCode } from 'lucide-react';
import { NavLink } from '../types';

interface NavbarProps {
  onContactClick: () => void;
  links: NavLink[];
}

export default function Navbar({ onContactClick, links }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav id="app-navbar" className="sticky top-0 z-40 w-full border-b border-zinc-900/50 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a id="logo-link" href="#" className="flex items-center gap-2 group">
              <span className="text-xl font-extrabold tracking-wider text-white flex items-center">
                <span className="text-purple-500 mr-1 animate-pulse">//</span>Purrweb
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                id={`nav-${link.id}`}
                key={link.id}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              id="tg-contact-link"
              href="https://t.me/purrweb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-zinc-400 hover:text-purple-400 hover:bg-zinc-900/50 rounded-xl transition-all border border-transparent hover:border-zinc-800"
              title="Написать в Telegram"
            >
              <Send className="w-5 h-5 rotate-45" />
            </a>
            <button
              id="navbar-contact-btn"
              onClick={onContactClick}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl cursor-pointer active:scale-95 transition-all"
            >
              Связаться
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              id="mobile-tg-btn"
              href="https://t.me/purrweb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-purple-400 rounded-lg"
            >
              <Send className="w-5 h-5 rotate-45" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white focus:outline-none rounded-lg hover:bg-zinc-900 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-zinc-900 bg-zinc-950 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {links.map((link) => (
                <a
                  id={`mobile-nav-${link.id}`}
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-4 border-t border-zinc-900 flex flex-col gap-3">
                <button
                  id="mobile-navbar-contact-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full py-3 text-center text-sm font-semibold text-black bg-white rounded-xl active:scale-[0.98] transition-transform"
                >
                  Обсудить проект
                </button>
                <a
                  id="mobile-navbar-tg-btn"
                  href="https://t.me/purrweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 flex items-center justify-center gap-2 text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-xl"
                >
                  <Send className="w-4 h-4 rotate-45 text-purple-400" />
                  <span>Написать в Telegram</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
