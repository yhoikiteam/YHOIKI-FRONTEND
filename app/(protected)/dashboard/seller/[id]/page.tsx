import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import Card from "@/components/Card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { products } from "@/constants/data-dev/products";
import { cn } from "@/utils/cn";

export default async function DashboadSeller({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  if (!id) return notFound();

  const ratingAll: number = 3.4;

  const resultRatingAll =
    ratingAll === 0 ? "0.0" : Math.floor(ratingAll * 10) / 10;

  return (
    <MaxWidthWrapper className="pt-6">
      <div className="mx-auto flex max-w-screen-sm flex-col items-center gap-6 lg:max-w-full lg:flex-row lg:items-start">
        <div className="flex w-full max-w-sm flex-col items-center rounded-xl border-2 p-4 md:max-w-xs">
          <div className="aspect-square w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary-one">
            <Image
              src="/images/megan.png"
              alt="profile"
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="text-center text-xl font-bold">Muhammad Sumbul</h2>
          <p className="px-6 text-center text-sm text-davy-gray">
            &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit&quot;
          </p>
          <div className="mt-2 flex items-center">
            <div className="relative h-6 min-w-32 overflow-hidden">
              <div
                className={cn(
                  "absolute left-0 z-20 flex items-center overflow-hidden [&_svg]:size-6",
                )}
                style={{
                  width: `${(Number(resultRatingAll || "0") / 5) * 100}%`,
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M24.9228 6.23047C24.9228 16.554 33.2916 24.9228 43.6151 24.9228C33.2916 24.9228 24.9228 33.2916 24.9228 43.6151C24.9228 33.2916 16.554 24.9228 6.23047 24.9228C16.554 24.9228 24.9228 16.554 24.9228 6.23047Z"
                      stroke="#75c57e"
                      strokeWidth="8.3077"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ))}
              </div>
              <div className="absolute left-0 z-10 flex items-center [&_svg]:size-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.9228 6.23047C24.9228 16.554 33.2916 24.9228 43.6151 24.9228C33.2916 24.9228 24.9228 33.2916 24.9228 43.6151C24.9228 33.2916 16.554 24.9228 6.23047 24.9228C16.554 24.9228 24.9228 16.554 24.9228 6.23047Z"
                      stroke="#e5e7eb"
                      strokeWidth="8.3077"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <div className="space-x-2">
              <span className="font-bold">{Number(resultRatingAll)}</span>
              <span className="text-sm">(657 reviews)</span>
            </div>
          </div>
          <Button size="lg" className="mt-4 w-full">
            Preview Public Mode
          </Button>
          <div className="mt-6 w-full space-y-4 border-t-2 px-6 pt-4">
            <div className="flex w-full justify-between">
              <span className="text-davy-gray">From</span>
              <span>Indonesia</span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-davy-gray">Member since</span>
              <span>Des 2024</span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-davy-gray">Avg. Response time</span>
              <span>1 hour</span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-davy-gray">Recent Delivery</span>
              <span>4 days</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="mb-4 rounded-xl border-2 px-4 py-2 text-lg font-bold">
            ACTIVE <span className="text-primary-two">GIGS</span>
          </h1>
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="w-full">
                <Card data={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
