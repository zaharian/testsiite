import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, AlertCircle, Layers, ZoomIn, Smartphone } from 'lucide-react';
import { ServiceItem } from '../types';

const defaultServices: ServiceItem[] = [
  {
    id: 'serv-1',
    title: 'Запустить лендинг или веб-платформу с нуля',
    description: 'Нужен сайт для запуска нового продукта или услуги. Разработчики готовы верстать, но нет дизайна. Конкуренты уже в рынке — каждая неделя задержки это потерянные клиенты. Мы спроектируем полную структуру, разработаем стильный интерфейс и предоставим чистый UI-kit.'
  },
  {
    id: 'serv-2',
    title: 'Обновить устаревший дизайн сайта',
    description: 'Ваш сайт работает, но выглядит как в 2015 году. Пользователи уходят к конкурентам с более современными интерфейсами. Метрики падают, но непонятно, как именно редизайн повлияет на бизнес. Мы обновим визуальный язык сайта без остановки текущих бизнес-процессов.'
  },
  {
    id: 'serv-3',
    title: 'Создать Design System для корпоративного портала',
    description: 'Компания растёт — каждый месяц нужны новые страницы и функции. Каждый экран дизайнерится с нуля. Разработчики постоянно уточняют цвета, отступы, размеры. Процесс буксует. Мы создадим системные стили, компоненты и токены для разработки на React, Vue или Angular.'
  },
  {
    id: 'serv-4',
    title: 'Провести UX-аудит и найти точки роста',
    description: 'Сайт работает, но конверсия низкая. Пользователи добавляют товары в корзину, но не оформляют заказы. Аналитика показывает проблемы, но непонятно, что именно чинить в первую очередь. Мы проанализируем поведение пользователей и предложим конкретные решения.'
  },
  {
    id: 'serv-5',
    title: 'Адаптировать сайт под мобильные устройства',
    description: 'Сайт отлично работает на компьютерах, но с телефонов заходит 60%+ трафика — и конверсия в 3 раза ниже десктопа. Google понижает в выдаче из-за плохого mobile experience. Мы спроектируем адаптивные сетки и touch-friendly элементы интерфейса.'
  }
];

const iconsMap = [
  <Sparkles className="w-5 h-5 text-purple-400" />,
  <AlertCircle className="w-5 h-5 text-emerald-400" />,
  <Layers className="w-5 h-5 text-pink-400" />,
  <ZoomIn className="w-5 h-5 text-blue-400" />,
  <Smartphone className="w-5 h-5 text-orange-400" />
];

export default function Capabilities() {
  const [expandedId, setExpandedId] = useState<string | null>('serv-1');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="capabilities-section" className="py-20 border-t border-zinc-900 bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left sticky titles */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Наши возможности</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Что мы можем <br className="hidden lg:inline" />сделать для вас
            </h2>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              От лендинга до корпоративного портала — индивидуальный подход и проработка деталей на каждом этапе проекта.
            </p>
          </div>

          {/* Right Expandable Accordion Rows */}
          <div className="lg:col-span-7 space-y-4">
            {defaultServices.map((service, index) => {
              const isExpanded = expandedId === service.id;
              return (
                <div
                  id={`accordion-${service.id}`}
                  key={service.id}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isExpanded 
                      ? 'border-purple-500/30 bg-zinc-900/40' 
                      : 'border-zinc-900 bg-zinc-950/20 hover:border-zinc-800'
                  }`}
                >
                  <button
                    id={`accordion-btn-${service.id}`}
                    onClick={() => toggleExpand(service.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-zinc-950 rounded-xl border border-zinc-900 shrink-0">
                        {iconsMap[index]}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-purple-400' : ''
                    }`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`accordion-content-${service.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-900/40 ml-14 max-w-xl">
                          {service.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
