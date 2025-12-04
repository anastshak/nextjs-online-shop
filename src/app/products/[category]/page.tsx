import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/lib/api/products';
import type { Product } from '@/lib/types';

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
    return <div className="flex items-center justify-center m-[25%]">No products found</div>;
  }

  return (
    <div className="px-6 h-[calc(100vh-116px)]">
      <h1 className="mb-6 text-2xl font-semibold capitalize">{categoryName}</h1>

      <div className="grid grid-cols-4 gap-6 pb-10">
        {data.products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
