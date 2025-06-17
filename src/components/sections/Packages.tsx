"use client";

import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { packages } from '@/data/packages';
import { services } from '@/data/services';
import { Package } from '@/types/package';
import { Check } from 'lucide-react';

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePackageClick = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  // Helper function to get service details by ID
  const getServiceById = (id: string) => {
    return services.find(service => service.id === id);
  };

  return (
    <section id="packages" className="py-20 bg-gradient-warm">
      <div className="container">
        <FadeIn direction="up" className="text-center mb-16">
          <span className="text-primary font-medium">Пакетные предложения</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Комплексные решения для разных задач
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Выберите оптимальный пакет услуг, который соответствует вашим целям и бюджету.
            Каждый пакет включает набор взаимодополняющих сервисов для максимального результата.
          </p>
        </FadeIn>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <FadeIn 
              key={pkg.id} 
              direction="up" 
              delay={0.1 + index * 0.1} 
              className="h-full"
            >
              <Card 
                className={`h-full relative overflow-hidden ${
                  pkg.isPopular ? 'border-primary shadow-lg' : ''
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-[30%] translate-y-[-10%]">
                      Популярный
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <div className="text-center">
                    <h3 className="text-xl font-display font-bold">{pkg.name}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-display font-bold text-primary">
                        {pkg.price.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-text-secondary text-center mb-6">
                    {pkg.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-0.5">
                          <Check size={16} />
                        </span>
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={pkg.isPopular ? 'default' : 'outline'}
                    onClick={() => handlePackageClick(pkg)}
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title={`Пакет "${selectedPackage.name}"`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-2">Описание</h4>
              <p className="text-text-secondary">{selectedPackage.description}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Что включено</h4>
              <ul className="space-y-2">
                {selectedPackage.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">
                      <Check size={16} className="mt-1" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Услуги в составе пакета</h4>
              <div className="space-y-3">
                {selectedPackage.services.map((serviceId) => {
                  const service = getServiceById(serviceId);
                  return service ? (
                    <div key={serviceId} className="p-3 bg-background rounded-md">
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium">{service.title}</h5>
                        <span className="text-text-tertiary text-sm">{service.duration}</span>
                      </div>
                      <p className="text-text-secondary text-sm mt-1">{service.description}</p>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-text-secondary">Стоимость пакета</span>
                <span className="text-primary text-xl font-display font-bold">
                  {selectedPackage.price.toLocaleString('ru-RU')} ₽
                </span>
              </div>
              
              <Button className="w-full">Заказать пакет</Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Packages;
