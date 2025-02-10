"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { users } from "@/constants/data-dev/user";
import Testimony from "./Testimony";

const HeroSection = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <MaxWidthWrapper>
      <section className="w-full pt-10">
        <div className="mx-auto grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-0">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-davy-gray">
              Looking for{" "}
              <span className="border border-dashed border-gray-300 p-0.5 text-green-500">
                Digital
              </span>{" "}
              Needs from <span className="text-green-500">Technology</span> and
              Also{" "}
              <span className="border border-dashed border-gray-300 p-0.5 text-green-500">
                Learning
              </span>{" "}
              Technology.
            </h1>
            <p className="mt-4 font-semibold text-davy-gray md:mr-20">
              At Yholix you can find all your digital needs. Come on, start
              searching now and see the prices and discounts! Want to learn
              about technology now? Visit the course menu!
            </p>
            <div className="mt-6 flex gap-4">
              <Button>Get Started</Button>
              <Button>Help</Button>
            </div>
            <div className="mt-4">
              <p className="flex items-center gap-1 text-[13px] text-dark-gray">
                <span className="text-xl"> &copy;</span>Copyright Yhoiki 2024.
                All right reveserd.
              </p>
            </div>
          </div>

          <div className="relative mx-8 h-full lg:ml-0">
            <div className="mr-16 h-full overflow-hidden rounded-3xl">
              <Image
                src="/images/Hero.png"
                alt="Hero Image"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-6 top-4 w-[270px] rounded-3xl border border-light-gray bg-gainsboro/50 p-4 text-end shadow-xl backdrop-blur-md">
              <span className="rounded-full bg-primary-gradient px-10 py-1 text-sm font-bold text-white">
                Course
              </span>
              <p className="mt-2 text-sm text-gray-700">
                Yhoiki Team also provides courses to train your skills, which
                are trained by experienced mentors.
              </p>
            </div>

            <div className="absolute -bottom-6 -left-10 w-[270px] rounded-3xl border border-light-gray bg-gainsboro/50 p-4 shadow-xl backdrop-blur-md">
              <span className="rounded-full bg-primary-gradient px-10 py-1 text-sm font-bold text-white">
                Freelance
              </span>
              <p className="mt-2 text-sm text-gray-700">
                Yhoiki Team provides various kinds of needs that are sold and of
                course handled professionally.
              </p>
            </div>
          </div>
        </div>

        <div ref={emblaRef} className="w-full overflow-hidden py-20">
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
