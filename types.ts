export enum StrainType {
  INDICA = 'Indica',
  SATIVA = 'Sativa',
  HYBRID = 'Hybrid',
  CBD = 'CBD',
  ACCESSORY = 'Accessory'
}

export interface ProductVariant {
  weight: string;
  price: number;
  id?: string; // Optional unique ID for the variant
}

export interface Product {
  id: string;
  name: string;
  type: StrainType | string;
  category: string;
  thcPercent?: number; // Optional for accessories
  price: number; // Base price (usually lowest variant or 1oz)
  image: string;
  description?: string;
  inStock: boolean;
  // New fields
  rating?: number;
  reviews?: number;
  features?: string[];
  flavor?: string | string[]; // Can be single string or array
  texture?: string;
  material?: string;
  terpenes?: string;
  dosage?: string;
  brand?: string;
  medical?: string[];
  variants?: ProductVariant[];
}

export interface SiteSettings {
  primaryColor: string;
  announcementText: string;
  heroHeadline: string;
  contactEmail: string;
  contactPhone: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariant?: ProductVariant;
}