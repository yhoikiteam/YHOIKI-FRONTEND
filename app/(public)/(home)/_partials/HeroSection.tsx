"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Button, buttonVariants } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { users } from "@/constants/data-dev/user";
import { cn } from "@/utils/cn";
import Testimony from "./Testimony";

const HeroSection = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <MaxWidthWrapper>
      <section className="w-full pt-16">
        <div className="mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-0">
          <div className="w-full max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight text-davy-gray">
              Looking for{" "}
              <span className="border border-dashed border-gray-300 bg-primary-gradient bg-clip-text p-0.5 text-transparent">
                Digital
              </span>{" "}
              Needs from{" "}
              <span className="bg-primary-gradient bg-clip-text text-transparent">
                Technology
              </span>{" "}
              and Also{" "}
              <span className="border border-dashed border-gray-300 bg-primary-gradient bg-clip-text p-0.5 text-transparent">
                Learning
              </span>{" "}
              Technology.
            </h1>
            <p className="mt-4 text-davy-gray md:mr-10">
              At Yholix you can find all your digital needs. Come on, start
              searching now and see the prices and discounts! Want to learn
              about technology now? Visit the course menu!
            </p>
            <div className="mt-6 flex gap-4">
              <Button>Get Started</Button>
              <Button>Help</Button>
            </div>
            <div className="mt-4">
              <p className="flex items-center gap-1 text-sm text-davy-gray">
                <span className="text-xl"> &copy;</span>Copyright Yhoiki 2024.
                All right reveserd.
              </p>
            </div>
          </div>

          <div className="mx-4 mt-16 h-full sm:mx-8 sm:mt-20 sm:h-full md:mt-0 lg:ml-0">
            <div className="relative aspect-video rounded-3xl sm:mr-4">
              <Image
                src="/images/Hero.png"
                alt="Hero Image"
                width={600}
                height={400}
                className="relative z-[2] h-full w-full rounded-2xl object-cover sm:z-[1]"
              />
              <div className="absolute -right-4 -top-[75px] z-[1] w-[180px] overflow-hidden rounded-2xl border border-light-gray bg-gainsboro/50 p-2 pb-3 text-end shadow-xl backdrop-blur-md sm:-right-6 sm:w-[270px] sm:p-5 md:-top-8">
                <span
                  className={cn(
                    buttonVariants(),
                    "h-[20px] px-7 text-[8px] font-semibold sm:h-[25px] sm:text-xs",
                  )}
                >
                  Course
                </span>
                <p className="mt-1 pr-4 text-[8px] font-medium text-davy-gray sm:mt-2 sm:text-xs">
                  Yhoiki Team also provides courses to train your skills, which
                  are trained by experienced mentors.
                </p>
              </div>

              <div className="absolute -bottom-6 -left-4 z-[3] w-[180px] overflow-hidden rounded-2xl border border-light-gray bg-gainsboro/50 p-2 shadow-xl backdrop-blur-md sm:-left-10 sm:w-[270px] sm:p-5 lg:-bottom-10 xl:-bottom-6">
                <span
                  className={cn(
                    buttonVariants(),
                    "h-[20px] px-7 text-[8px] font-semibold sm:h-[25px] sm:text-xs",
                  )}
                >
                  Freelance
                </span>
                <p className="mt-1 pl-4 text-[8px] font-medium text-davy-gray sm:mt-2 sm:text-xs">
                  Yhoiki Team provides various kinds of needs that are sold and
                  of course handled professionally.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={emblaRef}
          className="mb-6 mt-10 w-full overflow-hidden md:mb-10 md:mt-14"
        >
          <div className="flex justify-between gap-4">
            {users.slice(0, 4).map((user, index) => (
              <div key={index}>
                <Testimony
                  gambar={user.imagePath}
                  nama={user.name}
                  komennya={user.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
