import { motion } from 'motion/react';
import { Smartphone, Laptop, Check, MapPin, TrendingUp, Sparkles, Star, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface PortfolioProps {
  onContactClick: (projectName: string) => void;
}

const defaultProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Thundersoft',
    category: 'Электротранспорт',
    description: 'Интегрированная система мониторинга электрошеринга: интерактивные карты, баланс батарей, бронирование в 1 клик.',
    accentColor: 'from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400',
    type: 'transport'
  },
  {
    id: 'proj-2',
    title: 'Fintarget',
    category: 'Торговая платформа',
    description: 'Высоконагруженный терминал для торговли ценными бумагами: свечные графики в реальном времени, портфельный анализ.',
    accentColor: 'from-purple-500/20 to-pink-500/20 border-pink-500/30 text-pink-400',
    type: 'trading'
  },
  {
    id: 'proj-3',
    title: 'Поговорим.онлайн',
    category: 'Платформа консультаций',
    description: 'Телемедицина и психологическая поддержка: видеозвонки, расписание специалистов, защищенный чат.',
    accentColor: 'from-teal-500/20 to-emerald-500/20 border-emerald-500/30 text-emerald-400',
    type: 'consult'
  }
];

export default function Portfolio({ onContactClick }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-20 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Наше портфолио</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Проекты Purrweb
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
            Реальные примеры разработанных нами интерфейсов. Нажмите на любой проект, чтобы обсудить похожую задачу.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {defaultProjects.map((project, idx) => (
            <motion.div
              id={`portfolio-card-${project.id}`}
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => onContactClick(project.title)}
              className="flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/10 hover:border-zinc-700 hover:bg-zinc-900/30 transition-all duration-300 overflow-hidden cursor-pointer group"
            >
              
              {/* Dynamic Mockup View Area */}
              <div className="relative aspect-[4/3] bg-zinc-950 border-b border-zinc-900/80 p-5 flex items-center justify-center overflow-hidden">
                
                {/* Thin background dots pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

                {/* PROJECT-SPECIFIC PREMIUM MOCKUPS IN CSS */}
                
                {/* 1. THUNDERSOFT (Electric Transport App) */}
                {project.type === 'transport' && (
                  <div className="relative w-[180px] h-[250px] rounded-2xl border border-cyan-500/20 bg-zinc-900/90 shadow-2xl p-3 flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    
                    {/* Navigation Map Mockup */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d0e12_1px,transparent_1px),linear-gradient(to_bottom,#0d0e12_1px,transparent_1px)] bg-[size:10px_10px] opacity-25" />
                    
                    {/* Simulated Path on Map */}
                    <svg className="absolute inset-0 w-full h-full text-cyan-500" viewBox="0 0 100 100" fill="none">
                      <path d="M20 20C40 30, 30 70, 80 80" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" className="animate-[dash_5s_linear_infinite]" />
                      <circle cx="80" cy="80" r="4" fill="#06b6d4" />
                      <circle cx="20" cy="20" r="4" fill="#3b82f6" />
                    </svg>

                    {/* Top Status */}
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-1 bg-zinc-950/80 px-2 py-0.5 rounded-full border border-zinc-800 text-[9px] font-mono text-zinc-400">
                        <MapPin className="w-2.5 h-2.5 text-cyan-400" />
                        <span>Санкт-Петербург</span>
                      </div>
                      <span className="text-[9px] font-bold text-emerald-400">82%</span>
                    </div>

                    {/* Center Pin Overlay */}
                    <div className="absolute top-[40%] left-[30%] bg-cyan-500/20 border border-cyan-400 p-1.5 rounded-full animate-ping pointer-events-none" />
                    <div className="absolute top-[40%] left-[30%] bg-cyan-950/90 border border-cyan-400 p-1 rounded-full text-cyan-300 relative z-10 shadow-lg">
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>

                    {/* Bottom Action Card overlay */}
                    <div className="bg-zinc-950/90 border border-zinc-800/80 rounded-xl p-2 space-y-1 relative z-10 shadow-lg">
                      <div className="text-[10px] font-bold text-white">Tesla Model 3</div>
                      <div className="flex items-center justify-between text-[8px] text-zinc-400">
                        <span>Запас хода: 380 км</span>
                        <span className="text-cyan-400 font-bold">14 ₽/мин</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-cyan-500" />
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. FINTARGET (Stock Trading Terminal) */}
                {project.type === 'trading' && (
                  <div className="relative w-[240px] h-[170px] rounded-xl border border-pink-500/20 bg-zinc-900/90 shadow-2xl p-3 flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    {/* Top navigation */}
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3 text-pink-400 animate-pulse" />
                        <span className="text-[9px] font-bold text-white">BTC/USDT</span>
                      </div>
                      <span className="text-[8px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1 rounded font-mono font-bold">+4.82%</span>
                    </div>

                    {/* Glowing Candle Charts Mockup */}
                    <div className="flex items-end justify-between h-20 px-2 pt-2">
                      {[30, 45, 25, 60, 50, 75, 90, 65, 80, 95].map((h, index) => (
                        <div key={index} className="flex flex-col items-center gap-0.5 w-3">
                          <div className={`w-[1px] h-3 ${index % 2 === 0 ? 'bg-emerald-500' : 'bg-red-500'}`} />
                          <div className={`w-2 rounded-sm ${index % 2 === 0 ? 'bg-emerald-500/80 h-10' : 'bg-red-500/80 h-6'}`} style={{ height: `${h / 2}px` }} />
                        </div>
                      ))}
                    </div>

                    {/* Bottom terminal numbers */}
                    <div className="flex items-center justify-between border-t border-zinc-800 pt-2 text-[9px] font-mono text-zinc-500">
                      <span>Vol: 14.8M</span>
                      <span className="text-zinc-300 font-bold">$92,481.50</span>
                    </div>
                  </div>
                )}

                {/* 3. ПОГОВОРИМ.ОНЛАЙН (Telemedicine Consultation App) */}
                {project.type === 'consult' && (
                  <div className="relative w-[180px] h-[250px] rounded-2xl border border-emerald-500/20 bg-zinc-900/90 shadow-2xl p-3 flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    
                    {/* Top doctor profile layout */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-bold">Активные врачи</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      
                      {/* Doctor list element */}
                      <div className="flex items-center gap-2 bg-zinc-950/60 p-1.5 rounded-xl border border-zinc-800">
                        <div className="relative shrink-0">
                          <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] font-bold text-emerald-300">
                            ДМ
                          </div>
                          <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 border border-zinc-900" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-[9px] font-bold text-white">Д-р Макаров</div>
                          <div className="text-[7px] text-zinc-400">Психотерапевт, 12 лет опыта</div>
                        </div>
                      </div>

                      {/* Scheduling grid card */}
                      <div className="bg-zinc-950/30 border border-zinc-850 rounded-xl p-2 space-y-1">
                        <div className="flex items-center justify-between text-[8px] text-zinc-400">
                          <span>Ближайший сеанс</span>
                          <Calendar className="w-2.5 h-2.5 text-emerald-400" />
                        </div>
                        <div className="text-[9px] font-bold text-white">Сегодня, 18:30</div>
                      </div>
                    </div>

                    {/* Message Bubble simulation */}
                    <div className="bg-zinc-950/60 rounded-xl p-2 border border-zinc-800 text-[8px] text-zinc-300 space-y-1">
                      <div className="font-bold text-emerald-400">Консультация</div>
                      <p className="line-clamp-2 italic">"Ваши анализы в норме. Рекомендую соблюдать режим сна..."</p>
                    </div>
                  </div>
                )}

                {/* Subtle project icon overlay in top corner of card area */}
                <div className="absolute top-4 right-4 bg-zinc-900/80 border border-zinc-800 rounded-lg p-1.5 text-zinc-400 group-hover:text-white transition-colors">
                  {project.type === 'trading' ? <Laptop className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
                </div>

              </div>

              {/* Bottom Card Content */}
              <div className="p-6 md:p-8 space-y-3 text-left">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-900 border ${project.accentColor}`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed min-h-[40px]">
                  {project.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </section>
  );
}
