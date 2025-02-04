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
      <section className="w-full bg-white pt-10">
        <div className="mx-auto grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-[#535753]">
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
            <p className="mt-4 font-semibold text-[#535753]">
              At Yholix you can find all your digital needs. Come on, start
              searching now and see the prices and discounts! Want to learn
              about technology now? Visit the course menu!
            </p>
            <div className="mt-6 flex gap-4">
              <Button>Get Started</Button>
              <Button>Help</Button>
            </div>
            <div className="mt-4">
              <p className="flex items-center gap-1 text-[13px] text-[#A8A8A8]">
                <span className="text-xl"> &copy;</span>Copyright Yhoiki 2024.
                All right reveserd.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/Hero.png"
              alt="Hero Image"
              width={600}
              height={400}
              className="rounded-3xl"
            />
            <div className="absolute -right-6 top-4 w-[270px] rounded-3xl border border-[#CCCCCC] bg-[#D9D9D9BF]/50 p-4 text-end shadow-xl backdrop-blur-md">
              <span className="rounded-full bg-button-gradient px-10 py-1 text-sm font-bold text-white">
                Course
              </span>
              <p className="mt-2 text-sm text-gray-700">
                Yhoiki Team also provides courses to train your skills, which
                are trained by experienced mentors.
              </p>
            </div>

            <div className="absolute -bottom-6 -left-10 w-[270px] rounded-3xl border border-[#CCCCCC] bg-[#D9D9D9BF]/50 p-4 shadow-xl backdrop-blur-md">
              <span className="rounded-full bg-button-gradient px-10 py-1 text-sm font-bold text-white">
                Freelance
              </span>
              <p className="mt-2 text-sm text-gray-700">
                Yhoiki Team provides various kinds of needs that are sold and of
                course handled professionally.
              </p>
            </div>
          </div>
        </div>

        <div ref={emblaRef} className="w-full overflow-hidden py-12">
          <div className="flex gap-6">
            {users.slice(0, 5).map((user, index) => (
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
