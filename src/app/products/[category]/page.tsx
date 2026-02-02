import NoDataFound from '@/components/common/NoData';
import ProductsGrid from '@/components/ProductsGrid';

import { getProductsByCategory } from '@/lib/api/products';

export default async function ProductsByCategoryPage(props: PageProps<'/products/[category]'>) {
  const { category } = await props.params;
  const data = await getProductsByCategory(category);
  const categoryName = category;

  if (!data?.products?.length) {
    return <NoDataFound />;
  }

  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold capitalize">
        {categoryName.replace(/-/g, ' ')}: {data.products.length}
      </h1>

      <ProductsGrid products={data.products} />
    </>
  );
}
