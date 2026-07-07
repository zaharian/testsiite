import { Send, Mail, MapPin, ExternalLink } from 'lucide-react';
import { NavLink } from '../types';

interface FooterProps {
  links: NavLink[];
}

export default function Footer({ links }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="border-t border-zinc-900 bg-zinc-950 py-12 md:py-16 relative">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4 md:col-span-1 text-left">
            <a href="#" className="flex items-center gap-1.5 group">
              <span className="text-xl font-black tracking-wider text-white">
                <span className="text-purple-500">//</span>Purrweb
              </span>
            </a>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Дизайн-агентство полного цикла. Проектируем и программируем сложные веб-сервисы, интернет-магазины и мобильные интерфейсы.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Навигация</h4>
            <ul className="space-y-2.5 text-xs">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group/link"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Контакты</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a
                  href="https://t.me/purrweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 rotate-45 text-purple-400" />
                  <span>Telegram: @purrweb</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@purrweb.com"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>hello@purrweb.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                <span>Офис разработки, Санкт-Петербург</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quality & Speed indicator */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Параметры качества</h4>
            <div className="space-y-3">
              <div className="bg-zinc-900/50 border border-zinc-850 p-3 rounded-xl flex items-center justify-between">
                <span className="text-[10px] text-zinc-400 font-mono">PAGESPEED SCORE</span>
                <span className="text-xs font-black text-emerald-400 font-mono">98/100</span>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-850 p-3 rounded-xl flex items-center justify-between">
                <span className="text-[10px] text-zinc-400 font-mono">FIDELITY RATING</span>
                <span className="text-xs font-black text-purple-400 font-mono">A++</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {currentYear} Purrweb. Все права защищены. Дизайн адаптирован в темную тему.
          </div>
          <div className="flex items-center gap-1">
            <span>Создано с заботой о пользователях</span>
            <span className="text-red-500 animate-pulse">❤</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
