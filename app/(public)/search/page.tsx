import Card from "@/components/Card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { products } from "@/constants/data-dev/products";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// export async function generateMetadata(props: { searchParams: SearchParams }) {
//   const searchParams = await props.searchParams;
//   const query = searchParams.q;
// }

export default async function SearchPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.q;

  return (
    <MaxWidthWrapper className="pt-6">
      <h1 className="mb-6 text-3xl">
        Result for <span className="font-bold text-primary-two">{query}</span>
      </h1>
      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="w-full">
            <Card data={product} />
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
