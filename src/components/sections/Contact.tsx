"use client";

import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { contactInfo } from '@/data/contacts';
import { MessageCircle, Mail, Instagram } from 'lucide-react';

// Map for contact icons
const iconMap: Record<string, React.ReactNode> = {
  'MessageCircle': <MessageCircle className="h-5 w-5" />,
  'Mail': <Mail className="h-5 w-5" />,
  'Instagram': <Instagram className="h-5 w-5" />,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    
    if (!formData.email.trim() && !formData.telegram.trim()) {
      newErrors.email = 'Укажите email или Telegram для связи';
      newErrors.telegram = 'Укажите email или Telegram для связи';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Пожалуйста, введите сообщение';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          telegram: '',
          message: '',
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <FadeIn direction="up" className="text-center mb-16">
          <span className="text-primary font-medium">Контакты</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Свяжитесь со мной
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Готова обсудить ваш проект и предложить оптимальное решение для ваших задач.
            Заполните форму или свяжитесь со мной напрямую через любой удобный канал связи.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn direction="right">
            <div className="bg-surface rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-display font-bold mb-6">Отправить сообщение</h3>
              
              {isSubmitted ? (
                <div className="bg-accent/10 text-accent p-4 rounded-md">
                  <h4 className="font-medium mb-2">Сообщение отправлено!</h4>
                  <p>Спасибо за обращение. Я свяжусь с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Имя"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                  
                  <Input
                    label="Telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    error={errors.telegram}
                    placeholder="@username"
                  />
                  
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
          
          {/* Contact Info */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display font-bold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a 
                      key={index}
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-surface rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                        {iconMap[contact.icon]}
                      </div>
                      <div>
                        <p className="text-text-secondary text-sm">{contact.type}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-bold mb-6">Часто задаваемые вопросы</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-surface rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">Как происходит работа?</h4>
                    <p className="text-text-secondary">
                      После обсуждения задачи мы составляем техническое задание, согласовываем сроки и стоимость. 
                      Работа ведется поэтапно с регулярной обратной связью.
                    </p>
                  </div>
                  <div className="p-4 bg-surface rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">Какие способы оплаты?</h4>
                    <p className="text-text-secondary">
                      Работаю по предоплате 50% и постоплате 50%. Принимаю оплату на карту, 
                      через ЮMoney, USDT или безналичный расчет.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
