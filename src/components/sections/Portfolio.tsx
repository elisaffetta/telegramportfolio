"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { cases } from '@/data/cases';
import { Case } from '@/types/case';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCaseClick = (caseItem: Case) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container">
        <FadeIn direction="up" className="text-center mb-16">
          <span className="text-primary font-medium">Портфолио</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Успешные кейсы
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ознакомьтесь с реальными примерами моей работы с экспертами и брендами
            из разных ниш. Каждый кейс демонстрирует комплексный подход к решению задач.
          </p>
        </FadeIn>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <FadeIn 
              key={caseItem.id} 
              direction="up" 
              delay={0.1 + index * 0.1} 
              className="h-full"
            >
              <Card 
                className="h-full cursor-pointer overflow-hidden transition-all hover:shadow-lg"
                onClick={() => handleCaseClick(caseItem)}
              >
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <Image 
                    src={caseItem.image || '/images/cases/placeholder.jpg'} 
                    alt={caseItem.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded-md">
                      {caseItem.category}
                    </span>
                  </div>
                </div>
                
                <CardContent>
                  <CardTitle>{caseItem.title}</CardTitle>
                  <p className="text-text-secondary text-sm mb-4">{caseItem.client}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseItem.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-background text-text-secondary text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {caseItem.tags.length > 3 && (
                      <span className="px-2 py-1 bg-background text-text-secondary text-xs rounded-md">
                        +{caseItem.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-primary text-sm font-medium">
                    Подробнее <ArrowRight size={14} className="ml-1" />
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Case Detail Modal */}
      {selectedCase && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title={selectedCase.title}
        >
          <div className="space-y-6">
            <div className="relative h-56 w-full rounded-lg overflow-hidden">
              <Image 
                src={selectedCase.image || '/images/cases/placeholder.jpg'} 
                alt={selectedCase.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Галерея скриншотов */}
            {selectedCase.screenshots && selectedCase.screenshots.length > 0 && (
              <div>
                <h4 className="text-lg font-medium mb-3">Скриншоты проекта</h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedCase.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                      <Image 
                        src={screenshot} 
                        alt={`${selectedCase.title} - скриншот ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-medium">Клиент</h4>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                  {selectedCase.category}
                </span>
              </div>
              <p className="text-text-secondary">{selectedCase.client}</p>
            </div>
            
            {selectedCase.description && (
              <div>
                <h4 className="text-lg font-medium mb-2">О проекте</h4>
                <p className="text-text-secondary">{selectedCase.description}</p>
              </div>
            )}
            
            <div>
              <h4 className="text-lg font-medium mb-2">Результаты</h4>
              <ul className="space-y-2">
                {selectedCase.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-text-secondary">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Теги</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCase.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-background text-text-secondary text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="w-full">Хочу так же</Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Portfolio;
