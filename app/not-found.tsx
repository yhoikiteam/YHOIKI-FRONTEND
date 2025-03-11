import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NotFoundLayout from "@/layouts/NotFoundLayout";

export default function NotFound() {
  return (
    <NotFoundLayout>
      <MaxWidthWrapper>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <span className="text-5xl font-bold sm:text-6xl">OUUPSS</span>
          <div className="flex flex-col items-center sm:flex-row sm:gap-4">
            <div className="flex items-center gap-4">
              <span className="text-shadow-custom text-5xl font-bold text-primary-two sm:text-6xl">
                PAGE
              </span>
              <div className="flex items-center">
                <span className="text-shadow-custom bg-gradient-to-r from-primary-two to-black bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
                  N
                </span>
                <Image
                  src="/svg/not-found.svg"
                  alt="not-found"
                  width={100}
                  height={100}
                  className="w-16 flex-shrink-0 sm:w-20"
                />
                <span className="text-shadow-custom text-5xl font-bold sm:text-6xl">
                  T
                </span>
              </div>
            </div>
            <span className="text-shadow-custom text-5xl font-bold sm:text-6xl">
              FOUND
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
    </NotFoundLayout>
  );
}
