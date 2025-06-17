import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="order-2 lg:order-1">
            <FadeIn direction="up" className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Для экспертов и предпринимателей
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1} className="mb-6">
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Telegram-<span className="text-primary">маркетинг</span> и автоматизация
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} className="mb-8">
              <p className="text-lg text-text-secondary">
                Привет, я Елисавета! Создаю контент, который привлекает подписчиков, и разрабатываю ботов, которые превращают их в клиентов.
                Более 1000 написанных Telegram-постов для экспертов и брендов.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#services" className="whitespace-nowrap flex items-center">
                  Посмотреть услуги <ArrowRight size={16} className="ml-2 inline-block" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Связаться</Link>
              </Button>
            </FadeIn>
          </div>
          
          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <FadeIn direction="left" className="relative">
                <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-surface-elevated z-10"></div>
                <Image 
                  src="/images/hero/hero-image.jpg" 
                  alt="Елисавета Наговицына" 
                  fill
                  className="object-cover relative z-20"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply z-30" />
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-5 -left-5 rounded-lg p-4 shadow-lg z-40 bg-white/80 backdrop-blur-md border border-white/50">
                <p className="text-sm text-text-secondary mb-1">Посты</p>
                <p className="text-2xl font-display font-bold text-primary">1000+</p>
              </div>
              
              {/* Experience Card */}
              <div className="absolute -top-5 -right-5 rounded-lg p-4 shadow-lg z-40 bg-white/80 backdrop-blur-md border border-white/50">
                <p className="text-sm text-text-secondary mb-1">Опыт</p>
                <p className="text-2xl font-display font-bold text-primary">5+ лет</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
