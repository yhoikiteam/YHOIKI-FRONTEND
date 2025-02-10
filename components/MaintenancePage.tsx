import React from "react";
import Logo from "./Logo";

export default function MaintenancePage() {
  return (
    <>
      <section className="relative py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
          <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:gap-14">
            <Logo />
            <div className="flex w-full flex-col items-center justify-center gap-5">
              <div className="flex w-full flex-col items-center justify-center gap-6">
                <div className="flex w-full flex-col items-center justify-start gap-2.5">
                  <h2 className="font-manrope text-center text-3xl font-bold leading-normal text-gray-800">
                    Coming Soon: Prepare for Something Spectacular.
                  </h2>
                  <p className="text-center text-base font-normal leading-relaxed text-gray-500">
                    Apologies for the inconvenience! Sleeknote is currently
                    undergoing scheduled maintenance to enhance your experience.
                    We anticipate being back online in just a few year 🌚.
                  </p>
                </div>
              </div>
              <img
                src="https://pagedone.io/asset/uploads/1718004199.png"
                alt="under maintenance image"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
