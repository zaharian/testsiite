import { motion } from 'motion/react';
import { StatItem } from '../types';
import { Trophy, Star, Award, Heart } from 'lucide-react';

const defaultStats: StatItem[] = [
  {
    id: 'stat-1',
    value: 'ТОП-10',
    label: 'Рейтинга Рунета в категории разработка дизайна',
  },
  {
    id: 'stat-2',
    value: '550+',
    label: 'Проектов успешно запущено в App Store и Google Play',
  },
  {
    id: 'stat-3',
    value: '10+',
    label: 'Лет непрерывной разработки для стартапов и бизнеса',
  },
  {
    id: 'stat-4',
    value: '210+',
    label: 'Профессиональных специалистов: iOS, Android, Fullstack',
  },
];

const awards = [
  { text: 'Best Design Award 2023', icon: <Award className="w-4 h-4 text-purple-400" /> },
  { text: 'ТОП-10 Рейтинг Рунета 2022-2024', icon: <Trophy className="w-4 h-4 text-emerald-400" /> },
  { text: 'Clutch Top Developers 2024', icon: <Star className="w-4 h-4 text-pink-400" /> },
  { text: '4.9 на Clutch (67 отзывов)', icon: <Heart className="w-4 h-4 text-red-400" /> },
];

export default function Stats() {
  return (
    <section id="stats-section" className="py-16 border-t border-zinc-900 bg-zinc-950/40 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Header */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Наш масштаб</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Наш опыт <br className="hidden lg:inline" />в цифрах
            </h2>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Многократно подтвержденная экспертиза в проектировании и программировании сложных цифровых продуктов.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {defaultStats.map((stat, index) => (
              <motion.div
                id={stat.id}
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/10 border border-zinc-900/80 hover:border-zinc-800 hover:bg-zinc-900/30 transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-500 font-sans tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-400 font-medium mt-2 leading-relaxed">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Endless Marquee Ticker Row */}
        <div className="relative w-full overflow-hidden py-5 border-y border-zinc-900 bg-zinc-950/60 rounded-xl">
          <div className="flex w-max gap-8 animate-marquee whitespace-nowrap">
            {/* First Set */}
            {Array(3).fill(awards).flat().map((award, i) => (
              <div key={`award-set1-${i}`} className="flex items-center gap-2 px-4">
                {award.icon}
                <span className="text-xs md:text-sm font-semibold tracking-wide text-zinc-400 hover:text-white transition-colors uppercase">
                  {award.text}
                </span>
                <span className="text-zinc-700 mx-4">•</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Styled Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
