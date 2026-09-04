export type ProductImage = {
  url: string;
  publicId: string;
  alt: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  sku: string;
  stock: number;
  categoryId: string;
  categorySlug: string;
  images: ProductImage[];
  image: string;
  isActive: boolean;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
};

export type ProductInput = {
  name: string;
  slug: string;
  description: string;
  price: number;
  sku: string;
  stock: number;
  categoryId: string;
  images: ProductImage[];
  isActive?: boolean;
  rating?: number;
  reviewCount?: number;
};
