import { BASE_API } from './config';

export async function getProductsByCategory(category: string) {
  const res = await fetch(`${BASE_API}/products/category/${category}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}
