export interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  services: string[]; // ID услуг, входящих в пакет
}
