import { motion } from 'motion/react';
import { CheckCircle2, Star, Zap, Rocket, Users, FileText } from 'lucide-react';
import { AudienceCard } from '../types';

interface AudienceProps {
  onContactClick: (category: string) => void;
}

const defaultCards: AudienceCard[] = [
  {
    id: 'aud-1',
    type: 'startup',
    title: 'Стартапам и основателям',
    description: 'Для тех, кто запускает веб-продукт с нуля, например, интернет-магазин, сервис или лендинг для презентаций инвесторам.',
    bullets: [
      'Увидите дизайн-концепт за 3 дня — moodboards и ключевые экраны для питча инвесторам',
      'Получите готовый веб-дизайн за 4-6 недель с UI-kit для быстрой разработки',
      'Проверите гипотезы на прототипе с 15 пользователями до написания кода',
      'Сэкономите до 30% бюджета благодаря базовому ТЗ и чёткой смете',
      'Получите адаптив для всех устройств — пользователи зайдут с любого экрана'
    ],
    ctaText: 'Обсудить идею проекта'
  },
  {
    id: 'aud-2',
    type: 'developers',
    title: 'Компаниям с разработчиками',
    description: 'Для тех, у кого есть своя команда разработки, но нужен профессиональный и масштабируемый UI/UX для веб-платформы.',
    bullets: [
      'Интегрируемся с вашей командой за 1 неделю в ваши процессы и инструменты',
      'Передадим Design System под ваш стек — готовые компоненты для React, Vue, Angular',
      'Подготовим макеты со спецификациями — разработчики верстают в 2 раза быстрее',
      'Проведём онбординг вашей команде за 2 дня для самостоятельной поддержки',
      'Будем на связи 3 месяца для правок и консультирования по внедрению'
    ],
    ctaText: 'Обсудить интеграцию'
  },
  {
    id: 'aud-3',
    type: 'business',
    title: 'Бизнесу с действующим сайтом',
    description: 'Для продуктовых команд, где есть сайт или веб-портал с устаревшим дизайном, и требуется редизайн для улучшения метрик.',
    bullets: [
      'Проведём UX-аудит за 5 дней — найдём 5-7 точек роста конверсии и удержания',
      'Обновим дизайн экран за экраном — разработка продолжается параллельно без простоев',
      'Сохраним айдентику бренда через цвета и шрифты — обновление UI без потери узнаваемости',
      'Поможем с A/B тестированием 5 гипотез на реальных пользователях',
      'Обеспечим PageSpeed 90+ и правильную SEO-структуру с первого дня'
    ],
    ctaText: 'Заказать UX-аудит'
  }
];

const iconsMap = {
  startup: <Rocket className="w-5 h-5 text-purple-400" />,
  developers: <Users className="w-5 h-5 text-emerald-400" />,
  business: <FileText className="w-5 h-5 text-pink-400" />
};

export default function Audience({ onContactClick }: AudienceProps) {
  return (
    <section id="audience-section" className="py-20 border-t border-zinc-900 bg-zinc-950 relative">
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Сегменты рынка</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Кому мы помогаем
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Работаем со стартапами, продуктовыми компаниями и бизнесом. Создаём дизайн веб-платформ на любом этапе: от лендинга до сложных интерфейсов.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {defaultCards.map((card, idx) => (
            <motion.div
              id={card.id}
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/30 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle top bar glowing light */}
              <div className={`absolute top-0 inset-x-0 h-[2px] transition-all duration-500 ${
                card.type === 'startup' ? 'bg-purple-500/50 group-hover:bg-purple-500' :
                card.type === 'developers' ? 'bg-emerald-500/50 group-hover:bg-emerald-500' :
                'bg-pink-500/50 group-hover:bg-pink-500'
              }`} />

              <div className="space-y-6">
                
                {/* Card Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 shrink-0">
                      {iconsMap[card.type]}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{card.title}</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed min-h-[50px]">
                    {card.description}
                  </p>
                </div>

                {/* Bullets List */}
                <div className="border-t border-zinc-800/60 pt-5">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-4">
                    Что сделаем для вас:
                  </span>
                  <ul className="space-y-3.5">
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          card.type === 'startup' ? 'text-purple-400' :
                          card.type === 'developers' ? 'text-emerald-400' :
                          'text-pink-400'
                        }`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  id={`btn-${card.id}`}
                  onClick={() => {
                    const mappedCat = 
                      card.type === 'startup' ? 'design_from_scratch' :
                      card.type === 'developers' ? 'design_system' : 'ux_audit';
                    onContactClick(mappedCat);
                  }}
                  className="w-full py-4 text-center text-sm font-semibold text-white bg-zinc-900 hover:bg-white hover:text-black border border-zinc-800 hover:border-white rounded-xl active:scale-98 transition-all cursor-pointer"
                >
                  {card.ctaText}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
