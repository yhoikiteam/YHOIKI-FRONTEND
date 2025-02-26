import Card from "@/components/Card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { products } from "@/constants/data-dev/products";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const query = searchParams.q;
}

export default async function SearchPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.q;
  console.log(query);

  return (
    <MaxWidthWrapper className="pt-6">
      <h1 className="mb-6 bg-primary-gradient bg-clip-text text-xl font-bold text-transparent">
        Result for &quot;{query}&quot;
      </h1>
      <div className="grid-card">
        {products.map((product) => (
          <div key={product.id} className="w-full">
            <Card data={product} />
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
