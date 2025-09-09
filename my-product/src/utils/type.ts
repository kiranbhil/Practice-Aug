export type productType = {
  id: string;
  name: string;
  description: string;
  price: number | null;
  category: string;
  stock: number;
  productImage: string;
  brand: string;
  rating: number;
  discount: number;
  status: boolean;
};

export type productFormType = {
  id?: string;
  name: string;
  description: string;
  price: string; // 👈 keep as string
  category: string;
  stock: string;
  productImage: string;
  brand: string;
  rating: string;
  discount: string;
  status: boolean;
};
