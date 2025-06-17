import { Package } from '@/types/package';

export const packages: Package[] = [
  {
    id: 'start',
    name: 'Старт',
    price: 35000,
    description: 'Идеальное решение для экспертов, которые только начинают свой путь в Telegram или хотят обновить свое позиционирование.',
    features: [
      'Экспертная упаковка',
      'Разработка Tone of Voice',
      'Контент-план на 1 месяц',
      '10 экспертных постов',
      'Простой бот для лид-магнита'
    ],
    services: [
      'expert-packaging',
      'tone-of-voice',
      'content-plan',
      'expert-posts',
      'lead-magnet-bot'
    ]
  },
  {
    id: 'growth',
    name: 'Рост',
    price: 55000,
    description: 'Комплексное решение для экспертов, которые хотят активно масштабировать свое присутствие и увеличить продажи.',
    features: [
      'Экспертная упаковка',
      'Брендбук и визуальная идентичность',
      'Контент-план на 3 месяца',
      '20 экспертных постов',
      'Создание визуального контента',
      'Лид-магнит + дизайн',
      'Настройка воронки продаж'
    ],
    services: [
      'expert-packaging',
      'brandbook',
      'content-plan',
      'expert-posts',
      'visual-content',
      'lead-magnet',
      'sales-funnel'
    ],
    isPopular: true
  },
  {
    id: 'scale',
    name: 'Масштаб',
    price: 85000,
    description: 'Премиальное решение для экспертов, готовых к серьезному масштабированию бизнеса и выходу на новый уровень.',
    features: [
      'Экспертная упаковка',
      'Брендбук и визуальная идентичность',
      'Позиционирование и стратегия',
      'Контент-план на 3 месяца',
      '30 экспертных постов',
      'Создание визуального контента',
      'Telegram-бот с ИИ',
      'Лендинг под услуги',
      'Настройка воронки продаж',
      'Email-последовательности',
      'Продающая презентация'
    ],
    services: [
      'expert-packaging',
      'brandbook',
      'positioning',
      'content-plan',
      'expert-posts',
      'visual-content',
      'ai-bot',
      'landing-page',
      'sales-funnel',
      'email-sequences',
      'sales-presentation'
    ]
  }
];
