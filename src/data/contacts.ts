export interface ContactInfo {
  type: string;
  value: string;
  url?: string;
  icon: string;
}

export const contactInfo: ContactInfo[] = [
  {
    type: 'Telegram',
    value: '@elisaffetta',
    url: 'https://t.me/elisaffetta',
    icon: 'MessageCircle'
  },
  {
    type: 'Email',
    value: 'elisaffetta@gmail.com',
    url: 'mailto:elisaffetta@gmail.com',
    icon: 'Mail'
  },
  {
    type: 'Instagram',
    value: '@elisaffetta',
    url: 'https://instagram.com/elisaffetta',
    icon: 'Instagram'
  }
];

export const projects = [
  {
    name: 'NeuroScribe',
    url: 'https://neuroscribe.ru',
    description: 'ИИ-платформа с 57,000+ пользователей'
  },
  {
    name: 'НейроШтат',
    url: 'https://neuroshtat.ru',
    description: 'B2B SaaS с ИИ-сотрудниками'
  }
];
