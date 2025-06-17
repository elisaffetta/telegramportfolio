"use client";

import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { services, serviceCategories } from '@/data/services';
import { Service, ServiceCategory } from '@/types/service';
import { Layers, PenTool, Code, Target, PresentationIcon, ArrowRight, Palette, MessageSquare, FileText, Bot, BarChart, Mail, Briefcase, LineChart, Download, FileCode } from 'lucide-react';

// Map for service icons
const iconMap: Record<string, React.ReactNode> = {
  'Layers': <Layers className="h-5 w-5" />,
  'PenTool': <PenTool className="h-5 w-5" />,
  'Code': <Code className="h-5 w-5" />,
  'Target': <Target className="h-5 w-5" />,
  'PresentationIcon': <PresentationIcon className="h-5 w-5" />,
  'Palette': <Palette className="h-5 w-5" />,
  'MessageSquare': <MessageSquare className="h-5 w-5" />,
  'FileText': <FileText className="h-5 w-5" />,
  'Bot': <Bot className="h-5 w-5" />,
  'BarChart': <BarChart className="h-5 w-5" />,
  'Mail': <Mail className="h-5 w-5" />,
  'Briefcase': <Briefcase className="h-5 w-5" />,
  'LineChart': <LineChart className="h-5 w-5" />,
  'Download': <Download className="h-5 w-5" />,
  'FileCode': <FileCode className="h-5 w-5" />,
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <FadeIn direction="up" className="text-center mb-16">
          <span className="text-primary font-medium">Мои услуги</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Комплексные решения для вашего роста
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Предлагаю полный спектр услуг для развития вашего экспертного бренда — 
            от стратегии и контента до технической реализации и лидогенерации.
          </p>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn direction="up" delay={0.1} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <Button 
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('all')}
            >
              Все услуги
            </Button>
            
            {serviceCategories.map((category) => (
              <Button 
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id as ServiceCategory)}
                className="flex items-center gap-2"
              >
                {iconMap[category.icon]}
                {category.name}
              </Button>
            ))}
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <FadeIn 
              key={service.id} 
              direction="up" 
              delay={0.1 + index * 0.05} 
              className="h-full"
            >
              <Card 
                className="h-full cursor-pointer transition-all hover:translate-y-[-5px] hover:shadow-md relative group"
                onClick={() => handleServiceClick(service)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {iconMap[service.icon]}
                    </div>
                    {service.isPopular && (
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                        Популярно
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-primary font-display font-bold">
                      {service.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <div className="flex items-center">
                      <span className="text-text-tertiary text-sm mr-2">
                        {service.duration}
                      </span>
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title={selectedService.title}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-2">Описание</h4>
              <p className="text-text-secondary">{selectedService.description}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Что включено</h4>
              <ul className="space-y-2">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {selectedService.steps && (
              <div>
                <h4 className="text-lg font-medium mb-2">Этапы работы</h4>
                <ol className="space-y-2 list-decimal list-inside">
                  {selectedService.steps.map((step, index) => (
                    <li key={index} className="text-text-secondary">
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div>
                <p className="text-text-tertiary text-sm">Стоимость</p>
                <p className="text-primary text-xl font-display font-bold">
                  {selectedService.price.toLocaleString('ru-RU')} ₽
                </p>
              </div>
              <div>
                <p className="text-text-tertiary text-sm">Срок выполнения</p>
                <p className="text-text-primary font-medium">{selectedService.duration}</p>
              </div>
            </div>
            
            <Button className="w-full">Заказать услугу</Button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Services;
