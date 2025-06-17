export interface ProfileInfo {
  name: string;
  title: string;
  bio: string;
  photo: string;
  achievements: string[];
  expertise: ExpertiseArea[];
}

export interface ExpertiseArea {
  title: string;
  description: string;
  icon: string;
}

export const profileInfo: ProfileInfo = {
  name: 'Елисавета Наговицына',
  title: 'Стратег по развитию цифровых продуктов и личных брендов',
  bio: 'Я помогаю экспертам в Telegram создавать комплексные маркетинговые экосистемы, которые превращают их в лидеров ниши. С опытом в создании и масштабировании собственных проектов, я сочетаю креативное мышление с техническими навыками и бизнес-аналитикой для достижения измеримых результатов.',
  photo: '/images/profile/elisa.jpg',
  achievements: [
    'Со-основатель NeuroScribe (57,000 пользователей)',
    'Создатель НейроШтат (B2B SaaS с 50 ИИ-сотрудниками)',
    'Со-владелец агентства 50funnels',
    '1000+ телеграм-постов и 500+ SEO-статей',
    '13+ Telegram-ботов и 6 веб-приложений',
    'Опыт питчинга перед ВТБ, Сбер, Альфа-банк'
  ],
  expertise: [
    {
      title: 'Стратегическое развитие',
      description: 'Полный цикл создания и развития цифровых продуктов от идеи до масштабирования',
      icon: 'BarChart'
    },
    {
      title: 'Контент-маркетинг',
      description: 'Создание экспертного контента, упаковка и позиционирование для различных платформ',
      icon: 'FileText'
    },
    {
      title: 'Техническая реализация',
      description: 'Разработка Telegram-ботов, веб-приложений и автоматизация бизнес-процессов',
      icon: 'Code'
    },
    {
      title: 'AI-интеграция',
      description: 'Промт-инжиниринг и интеграция ИИ в бизнес-процессы и продукты',
      icon: 'Brain'
    }
  ]
};
