import CategorySection from "@/app/(public)/(home)/partials/CategorySection";
import HeroSection from "@/app/(public)/(home)/partials/HeroSection";
import { Button } from "@/components/Button";
import CategoryBar from "@/components/CategoryBar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn } from "@/utils/cn";

export default function Page() {
  return (
    <>
      <MaxWidthWrapper className="pt-6 lg:pb-6">
        <CategoryBar />
      </MaxWidthWrapper>
      <HeroSection />
      <CategorySection />
      <div className="my-8 w-full lg:p-8">
        <div className="flex flex-col items-center justify-center gap-10 bg-primary-gradient px-2 py-12 sm:px-4 lg:rounded-3xl lg:p-24">
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-6 sm:gap-6">
            {[...Array(5)].map((_, i) => (
              <Button
                key={i}
                className={cn(
                  "bg-platinum px-8 py-6 text-base text-davy-gray [&_svg]:size-5",
                )}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.31 14.01C3.3 14.11 2.5 14.97 2.5 16C2.5 16.55 2.72 17.05 3.09 17.41C3.45 17.78 3.95 18 4.5 18H9.5V19.5C9.5 20.88 10.62 22 12 22C13.38 22 14.5 20.88 14.5 19.5V18H19.39C20.45 18 21.4 17.23 21.49 16.18C21.54 15.56 21.32 14.99 20.91 14.59C20.59 14.26 20.17 14.05 19.69 14.01M4.31 14.01C4.37 14 4.43 14 4.5 14H19.5C19.57 14 19.63 14 19.69 14.01M4.31 14.01L3.83 5.3C3.65 3.53 5.04 2 6.81 2H17.19C18.96 2 20.35 3.53 20.17 5.3L19.69 14.01M7.99 2V7M12 2V4"
                    stroke="url(#paint0_linear_1401_3717)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1401_3717"
                      x1="11.9985"
                      y1="2"
                      x2="11.9985"
                      y2="22"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#75C57E" />
                      <stop offset="1" stopColor="#34A853" />
                    </linearGradient>
                  </defs>
                </svg>
                Programing
              </Button>
            ))}
          </div>
          <p className="text-center text-3xl font-bold text-light md:text-4xl">
            Want to Learn and Get a Certificate? What are you waiting for!
            <br />• • •
          </p>
        </div>
      </div>
      <CategorySection />
    </>
  );
}
