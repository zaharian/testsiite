import { motion } from 'motion/react';
import { Calendar, Shield, Cpu, ChevronRight, Sparkles } from 'lucide-react';

interface GreenBannerProps {
  onContactClick: () => void;
}

const steps = [
  { text: 'Сроки и детальную дорожную карту', icon: <Calendar className="w-4 h-4 text-emerald-400" /> },
  { text: 'Смету с точной разбивкой по этапам', icon: <Sparkles className="w-4 h-4 text-emerald-400" /> },
  { text: 'Рекомендации по технологическому стеку', icon: <Cpu className="w-4 h-4 text-emerald-400" /> },
  { text: 'Подписанный NDA ещё до звонка, если нужно', icon: <Shield className="w-4 h-4 text-emerald-400" /> },
];

export default function GreenBanner({ onContactClick }: GreenBannerProps) {
  return (
    <section id="green-banner-section" className="py-12 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glow Container Card */}
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 via-zinc-950 to-zinc-900/40 p-8 md:p-12 shadow-2xl shadow-emerald-500/5">
          
          {/* Neon side elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Texts */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
                <span>Индивидуальный подход</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                И всем остальным
              </h2>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl">
                Если вы не нашли свой сценарий выше — это совершенно не значит, что мы не сможем помочь. Просто оставьте заявку, опишите задачу, и мы проведем предварительный анализ бесплатно.
              </p>
              
              {/* Grid of details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/60 border border-zinc-900">
                    <div className="p-2 bg-emerald-950/40 rounded-lg border border-emerald-500/10">
                      {step.icon}
                    </div>
                    <span className="text-xs font-semibold text-zinc-300">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Button */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <div className="text-center lg:text-right space-y-4 max-w-xs">
                <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                  Ответ в течение 3 дней
                </p>
                <button
                  id="green-banner-btn"
                  onClick={onContactClick}
                  className="w-full sm:w-auto px-8 py-5 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-2xl active:scale-95 transition-all shadow-xl shadow-emerald-500/10 cursor-pointer"
                >
                  <span>Оставить заявку</span>
                  <ChevronRight className="w-5 h-5 shrink-0" />
                </button>
                <p className="text-[11px] text-zinc-500 italic">
                  Бесплатная консультация с аналитиком проекта
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
