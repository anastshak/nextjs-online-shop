import MiniPagination from '@/components/MiniPagination';
import NoDataFound from '@/components/common/NoData';
import ProductsGrid from '@/components/ProductsGrid';

import { getAllProducts, searchProducts } from '@/lib/api/products';

interface HomePageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const PAGE_SIZE = 12;

  const params = await searchParams;

  const currentPage = Number(params.page) || 1;
  const query = params.search?.trim() ?? '';

  const skip = (currentPage - 1) * PAGE_SIZE;
  let data;
  let totalPages = 0;

  if (query) {
    data = await searchProducts(query);
  } else {
    data = await getAllProducts({ limit: PAGE_SIZE, skip });
    totalPages = Math.ceil(data.total / PAGE_SIZE);
  }

  if (!data?.products?.length) {
    return <NoDataFound />;
  }

  return (
    <section className="px-6 h-[calc(100vh-116px)]">
      {/* позже добавить какой-то заголовок/описание + сортировки */}
      <h1 className="mb-6 text-2xl font-semibold">
        {query ? `Search: "${query}"` : 'All products'}
      </h1>

      <ProductsGrid products={data.products} />

      {!query && <MiniPagination currentPage={currentPage} totalPages={totalPages} />}
    </section>
  );
}
