export interface Case {
  id: string;
  title: string;
  client: string;
  category: string;
  results: string[];
  image: string;
  tags: string[];
  description?: string;
  screenshots?: string[];
}
