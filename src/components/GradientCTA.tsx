import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface GradientCTAProps {
  onContactClick: () => void;
}

export default function GradientCTA({ onContactClick }: GradientCTAProps) {
  return (
    <section id="gradient-cta-section" className="py-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Gradient Shell */}
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 border border-zinc-800 bg-gradient-to-r from-purple-900/60 via-pink-900/40 to-orange-950/50 shadow-2xl shadow-purple-500/5 group text-left">
          
          {/* Animated abstract light bubbles */}
          <div className="absolute top-1/2 -left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] group-hover:translate-x-12 transition-transform duration-1000 pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            
            {/* Title & Tag */}
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-pink-300 animate-pulse" />
                <span className="text-[10px] font-bold text-pink-100 uppercase tracking-widest">Готовые решения</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                30+ готовых дизайн-направлений для IT-проекта
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Сэкономьте время и бюджет с нашими готовыми отраслевыми решениями, адаптированными под ваши бизнес-цели.
              </p>
            </div>

            {/* Action Trigger */}
            <div className="shrink-0">
              <button
                id="gradient-cta-btn"
                onClick={onContactClick}
                className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2.5 bg-white text-black font-bold rounded-2xl hover:bg-zinc-100 active:scale-95 transition-all cursor-pointer shadow-xl shadow-black/10 group/btn"
              >
                <span>Выберите своё!</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
