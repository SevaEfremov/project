export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specs: Record<string, string>;
  stock: number;
  rating: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Categories = 'CPU' | 'GPU' | 'RAM' | 'Motherboard' | 'Storage' | 'Power Supply' | 'Case' | 'Cooling';