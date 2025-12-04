import type { Category } from '../types';
import { BASE_API } from './config';

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_API}/products/categories`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error('Failed to fetch categories');

  return res.json();
}
