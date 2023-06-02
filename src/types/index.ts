export interface iPrompt {
  id?: string;
  rating?: string;
  name?: string;
  price?: number;
  model?: string; 
  image?: string;
  wordCount?: number;
  tested?: boolean;
  includesHQ?: boolean;
  modelVersion?: string;
  stats?: number;
  views?: number; 
}