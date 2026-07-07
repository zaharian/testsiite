import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, MessageSquare, ShieldAlert } from 'lucide-react';

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function RequestModal({ isOpen, onClose, initialCategory = '' }: RequestModalProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [category, setCategory] = useState(initialCategory || 'design_from_scratch');
  const [details, setDetails] = useState('');
  const [nda, setNda] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});

  // Reset state on open/close
  React.useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setName('');
      setContact('');
      setDetails('');
      setErrors({});
      if (initialCategory) {
        setCategory(initialCategory);
      }
    }
  }, [isOpen, initialCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; contact?: string } = {};
    if (!name.trim()) newErrors.name = 'Пожалуйста, введите ваше имя';
    if (!contact.trim()) newErrors.contact = 'Укажите Telegram или Email для связи';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate sending data
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content Card */}
          <motion.div
            id="modal-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-2xl shadow-purple-500/10 z-10"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <button
              id="modal-close-btn"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <form id="request-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white tracking-tight">Обсудить проект</h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    Расскажите о вашей идее, и мы подготовим смету со сроками в течение 3 дней.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
                      Ваше имя *
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Александр"
                      className={`w-full px-4 py-3 bg-zinc-900/50 border rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.name ? 'border-red-500' : 'border-zinc-800 focus:border-purple-500'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Contact field */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
                      Контакты (Telegram или Email) *
                    </label>
                    <input
                      id="input-contact"
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="@username или example@mail.ru"
                      className={`w-full px-4 py-3 bg-zinc-900/50 border rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.contact ? 'border-red-500' : 'border-zinc-800 focus:border-purple-500'
                      }`}
                    />
                    {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
                  </div>

                  {/* Category select */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
                      Что требуется сделать?
                    </label>
                    <select
                      id="input-category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    >
                      <option value="design_from_scratch">Лендинг или сайт с нуля</option>
                      <option value="redesign">Обновить текущий дизайн</option>
                      <option value="design_system">Разработать Design System</option>
                      <option value="ux_audit">Провести UX-аудит</option>
                      <option value="mobile_adapt">Мобильная адаптация</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
                      Опишите в двух словах
                    </label>
                    <textarea
                      id="input-details"
                      rows={3}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Например, мобильное приложение по аренде транспорта..."
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
                    />
                  </div>

                  {/* NDA Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group mt-2 select-none">
                    <input
                      id="input-nda"
                      type="checkbox"
                      checked={nda}
                      onChange={(e) => setNda(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                      nda ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-zinc-700 bg-transparent'
                    }`}>
                      {nda && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      Подписать NDA (соглашение о неразглашении) до обсуждения деталей проекта.
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    id="submit-form-btn"
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-white/5"
                  >
                    <span>Отправить заявку</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 mt-3 text-center">
                    <ShieldAlert className="w-3 h-3 text-zinc-500" />
                    <span>Мы гарантируем конфиденциальность ваших данных</span>
                  </div>
                </div>
              </form>
            ) : (
              <motion.div
                id="success-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8 space-y-4"
              >
                <div className="p-4 bg-emerald-500/10 rounded-full text-emerald-400 animate-pulse border border-emerald-500/20">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white tracking-tight">Заявка отправлена!</h3>
                  <p className="text-zinc-400 text-sm max-w-sm">
                    Спасибо, <span className="text-white font-medium">{name}</span>! Мы уже изучаем ваши требования. Свяжемся с вами в Telegram или по почте <span className="text-white font-medium">{contact}</span> в ближайшее время.
                  </p>
                </div>

                {nda && (
                  <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-3 text-xs text-emerald-400 max-w-sm mt-4">
                    Мы автоматически сгенерировали проект NDA и вышлем его вместе с первым ответом.
                  </div>
                )}

                <button
                  id="success-close-btn"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium rounded-xl transition-colors mt-6"
                >
                  Закрыть окно
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
