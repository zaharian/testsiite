import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Figma, Cpu, Zap } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="hero-section" className="relative pt-8 pb-16 md:py-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tags Row */}
            <div className="flex flex-wrap gap-2.5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 shadow-sm shadow-purple-500/5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span>От 500 тыс. ₽</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 shadow-sm shadow-emerald-500/5"
              >
                <Zap className="w-3 h-3 text-emerald-400" />
                <span>PageSpeed 90+</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800"
              >
                <Figma className="w-3 h-3 text-zinc-400" />
                <span>Figma + UI-kit</span>
              </motion.div>
            </div>

            {/* Title & Subheading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
              >
                Разработка <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400">
                  дизайна сайта
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-zinc-400 font-medium max-w-xl leading-relaxed"
              >
                Дизайн веб-платформ, решающий бизнес-задачи — от лендинга до интернет-магазинов и сложных интерфейсов.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                id="hero-cta-primary"
                onClick={onContactClick}
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 active:scale-95 transition-all cursor-pointer shadow-lg shadow-white/5 flex items-center justify-center gap-2"
              >
                <span>Обсудить проект</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                id="hero-cta-secondary"
                href="#portfolio"
                className="px-8 py-4 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 font-semibold rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-center"
              >
                Наши проекты
              </a>
            </motion.div>
          </div>

          {/* Hero Right Content (glowing SVG web wireframe blueprint) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-6 shadow-2xl shadow-purple-500/5 backdrop-blur-sm group overflow-hidden">
              
              {/* Background grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29371a_1px,transparent_1px),linear-gradient(to_bottom,#1f29371a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

              {/* Glowing SVG Interface */}
              <svg className="w-full h-full text-zinc-700" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer frame border lines */}
                <rect x="20" y="20" width="360" height="360" rx="16" stroke="#27272a" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Top browser/app bar */}
                <circle cx="50" cy="45" r="5" fill="#ef4444" fillOpacity="0.4" />
                <circle cx="65" cy="45" r="5" fill="#eab308" fillOpacity="0.4" />
                <circle cx="80" cy="45" r="5" fill="#22c55e" fillOpacity="0.4" />
                <rect x="110" y="38" width="180" height="14" rx="7" fill="#18181b" stroke="#27272a" strokeWidth="1" />
                
                {/* Grid UI Elements */}
                <rect x="40" y="80" width="320" height="120" rx="12" fill="#09090b" stroke="#27272a" strokeWidth="1.5" className="group-hover:stroke-purple-500/50 transition-colors duration-500" />
                
                {/* SVG glowing mockup elements */}
                <line x1="60" y1="110" x2="200" y2="110" stroke="#3f3f46" strokeWidth="3" strokeLinecap="round" />
                <line x1="60" y1="130" x2="160" y2="130" stroke="#3f3f46" strokeWidth="3" strokeLinecap="round" />
                <rect x="250" y="100" width="80" height="80" rx="8" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                
                {/* Left card */}
                <rect x="40" y="220" width="145" height="120" rx="12" fill="#09090b" stroke="#27272a" strokeWidth="1.5" className="group-hover:stroke-emerald-500/30 transition-colors duration-500" />
                <circle cx="75" cy="255" r="15" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                <line x1="60" y1="290" x2="140" y2="290" stroke="#3f3f46" strokeWidth="3" strokeLinecap="round" />
                <line x1="60" y1="305" x2="110" y2="305" stroke="#3f3f46" strokeWidth="3" strokeLinecap="round" />

                {/* Right card */}
                <rect x="215" y="220" width="145" height="120" rx="12" fill="#09090b" stroke="#27272a" strokeWidth="1.5" className="group-hover:stroke-pink-500/30 transition-colors duration-500" />
                <circle cx="250" cy="255" r="15" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                <line x1="235" y1="290" x2="315" y2="290" stroke="#3f3f46" strokeWidth="3" strokeLinecap="round" />
                <line x1="235" y1="305" x2="285" y2="305" stroke="#3f3f46" strokeWidth="3" strokeLinecap="round" />

                {/* Main floating glowing device/wrench logo from original screenshot, reimagined */}
                <g className="animate-bounce" style={{ animationDuration: '6s' }}>
                  <circle cx="200" cy="200" r="45" fill="#a855f7" fillOpacity="0.15" stroke="#a855f7" strokeWidth="2" className="shadow-lg shadow-purple-500/50" />
                  <circle cx="200" cy="200" r="30" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Floating abstract pencil/key tool */}
                  <path d="M185 215L215 185M215 185L220 190M215 185L210 180" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                  <rect x="180" y="180" width="40" height="40" rx="20" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.3" />
                </g>
                
                {/* Interactive cursor */}
                <g className="translate-x-12 translate-y-24 group-hover:translate-x-32 group-hover:translate-y-4 transition-all duration-1000 ease-out">
                  <path d="M120 180L135 195L128 197L133 207L129 209L124 199L118 203L120 180Z" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
                  <circle cx="120" cy="180" r="12" fill="#a855f7" fillOpacity="0.2" className="animate-ping" style={{ animationDuration: '2s' }} />
                </g>
              </svg>

              {/* Overlay glow tags */}
              <div className="absolute top-4 right-4 bg-zinc-900/90 border border-zinc-800 rounded-lg px-2.5 py-1 text-[10px] font-mono text-zinc-500 select-none">
                GRID_SYSTEM: ON
              </div>
              
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 rounded-lg px-2.5 py-1 text-[10px] font-mono text-zinc-400 select-none">
                <Cpu className="w-3 h-3 text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span>DYNAMIC_RENDERING</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
