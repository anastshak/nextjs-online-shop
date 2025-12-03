import { BASE_API } from './config';

export async function getCategories() {
  const res = await fetch(`${BASE_API}/products/category-list`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}
