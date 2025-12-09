import NoDataFound from '@/components/common/NoData';
import ProductsGrid from '@/components/ProductsGrid';

import { getProductsByCategory } from '@/lib/api/products';

interface Props {
  params: {
    category: string;
  };
}

export default async function ProductsByCategoryPage({ params }: Props) {
  const { category } = await params;
  const data = await getProductsByCategory(category);
  const categoryName = category;

  if (!data?.products?.length) {
    return <NoDataFound />;
  }

  return (
    <div className="px-6 h-[calc(100vh-116px)]">
      <h1 className="mb-6 text-2xl font-semibold capitalize">
        {categoryName.replace(/-/g, ' ')}: {data.products.length}
      </h1>

      <ProductsGrid products={data.products} />
    </div>
  );
}
