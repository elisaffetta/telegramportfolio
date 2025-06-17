export type ServiceCategory = 'strategy' | 'content' | 'technical' | 'lead' | 'presentation';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  category: ServiceCategory;
  features: string[];
  icon: string;
  isPopular?: boolean;
  steps?: string[];
}
