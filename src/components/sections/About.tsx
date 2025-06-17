import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { profileInfo } from '@/data/profile';
import { Brain, BarChart, FileText, Code } from 'lucide-react';

// Map for expertise icons
const iconMap: Record<string, React.ReactNode> = {
  'Brain': <Brain className="h-6 w-6" />,
  'BarChart': <BarChart className="h-6 w-6" />,
  'FileText': <FileText className="h-6 w-6" />,
  'Code': <Code className="h-6 w-6" />,
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <FadeIn direction="up" className="text-center mb-16">
          <span className="text-primary font-medium">Обо мне</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Елисавета Наговицына
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {profileInfo.title}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                <Image 
                  src={profileInfo.photo || '/images/profile/elisa.jpg'} 
                  alt={profileInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-primary" />
              <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-secondary" />
            </div>
          </FadeIn>
          
          {/* Profile Content */}
          <div className="order-1 lg:order-2">
            <FadeIn direction="left" className="mb-6">
              <p className="text-lg text-text-secondary">
                {profileInfo.bio}
              </p>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.1} className="mb-8">
              <h3 className="text-xl font-display font-bold mb-4">Достижения</h3>
              <ul className="space-y-2">
                {profileInfo.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
        
        {/* Expertise Areas */}
        <div className="mt-20">
          <FadeIn direction="up" className="text-center mb-12">
            <h3 className="text-2xl font-display font-bold">Области экспертизы</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileInfo.expertise.map((area, index) => (
              <FadeIn 
                key={index} 
                direction="up" 
                delay={0.1 + index * 0.1} 
                className="h-full"
              >
                <div className="bg-surface rounded-lg p-6 h-full shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {iconMap[area.icon]}
                  </div>
                  <h4 className="text-lg font-display font-bold mb-2">{area.title}</h4>
                  <p className="text-text-secondary">{area.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
