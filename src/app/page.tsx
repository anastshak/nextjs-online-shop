import MiniPagination from '@/components/MiniPagination';
import ProductsGrid from '@/components/ProductsGrid';

import { getAllProducts } from '@/lib/api/products';

interface HomePageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const PAGE_SIZE = 12;

  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const skip = (currentPage - 1) * PAGE_SIZE;

  const data = await getAllProducts({
    limit: PAGE_SIZE,
    skip,
  });

  const totalPages = Math.ceil(data.total / PAGE_SIZE);

  return (
    <section className="px-6 h-[calc(100vh-116px)]">
      {/* добавить какой-то заголовок + сортировки */}
      <h1 className="mb-6 text-2xl font-semibold">All products</h1>

      <ProductsGrid products={data.products} />

      <MiniPagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
