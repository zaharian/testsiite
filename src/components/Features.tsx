import { motion } from 'motion/react';
import { Smartphone, ShieldCheck, Shuffle, Search } from 'lucide-react';
import { FeatureItem } from '../types';

const defaultFeatures: FeatureItem[] = [
  {
    id: 'feat-1',
    title: 'Адаптивный дизайн для всех устройств',
    description: 'Интерфейсы безупречно отображаются и работают на любых экранах — от компактных смартфонов до сверхшироких 4K-мониторов.',
  },
  {
    id: 'feat-2',
    title: 'UI-kit + спецификация за 6 недель',
    description: 'Передаем разработчикам готовую библиотеку компонентов и исчерпывающие спецификации для быстрого и точного программирования.',
  },
  {
    id: 'feat-3',
    title: 'Оптимизация пользовательских сценариев',
    description: 'Проектируем идеальные пути пользователей, оптимизируем CTA-элементы, формы и навигацию для максимальной конверсии.',
  },
  {
    id: 'feat-4',
    title: 'SEO-friendly структура',
    description: 'Разрабатываем логичную семантическую структуру сайта, которую поисковые роботы индексируют без ошибок с первого дня запуска.',
  },
];

const icons = [
  <Smartphone className="w-6 h-6 text-purple-400" />,
  <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  <Shuffle className="w-6 h-6 text-pink-400" />,
  <Search className="w-6 h-6 text-blue-400" />,
];

export default function Features() {
  return (
    <section id="features-section" className="py-16 border-t border-zinc-900 bg-zinc-950/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">Результат работы</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-white mt-2">Что вы получите:</p>
          </div>
          <div className="text-zinc-500 text-sm max-w-xs md:text-right">
            Прозрачный процесс проектирования с фокусом на измеримые показатели вашего бизнеса.
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {defaultFeatures.map((feat, index) => (
            <motion.div
              id={feat.id}
              key={feat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 md:p-8 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/50 border border-zinc-900 hover:border-zinc-800 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all" />
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:border-zinc-700 transition-colors shrink-0 shadow-inner">
                  {icons[index]}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
