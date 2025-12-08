export interface Category {
  slug: string;
  name: string;
  url: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  discountPercentage: number;
  category: string;
}

export interface ProductsRequestResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
