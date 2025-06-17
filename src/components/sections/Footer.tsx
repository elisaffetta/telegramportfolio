import Link from 'next/link';
import { contactInfo, projects } from '@/data/contacts';
import { MessageCircle, Mail, Instagram } from 'lucide-react';

// Map for contact icons
const iconMap: Record<string, React.ReactNode> = {
  'MessageCircle': <MessageCircle className="h-5 w-5" />,
  'Mail': <Mail className="h-5 w-5" />,
  'Instagram': <Instagram className="h-5 w-5" />,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="container max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">elisaffetta</h3>
            <p className="text-white/70 mb-6">
              Стратег по развитию цифровых продуктов и личных брендов. Помогаю экспертам в Telegram 
              создавать комплексные маркетинговые экосистемы.
            </p>
            <div className="flex space-x-4">
              {contactInfo.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
                  aria-label={contact.type}
                >
                  {iconMap[contact.icon]}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="#packages" className="text-white/70 hover:text-white transition-colors">
                  Пакеты
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-white/70 hover:text-white transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-white transition-colors">
                  Обо мне
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Projects */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Проекты</h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index}>
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {project.name}
                    <p className="text-white/50 text-sm">{project.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Елисавета Наговицына. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-white/50 text-sm hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-white/50 text-sm hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
