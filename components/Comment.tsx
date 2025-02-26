"use client";

import { Fragment, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { Button } from "./Button";

export default function Comment() {
  const [sellerResponse, setSellerResponse] = useState(false);
  const [isExpandedUser, setisExpandedUser] = useState(false);
  const [isExpandedSeller, setisExpandedSeller] = useState(false);
  const [isHelpful, setIsHelpful] = useState({
    like: false,
    dislike: false,
  });
  const COMMENT_LENGTH = 8;

  const [visibleCount, setVisibleCount] = useState(
    COMMENT_LENGTH <= 3 ? COMMENT_LENGTH : 3,
  );
  const sliceComments = [...Array(COMMENT_LENGTH)].slice(0, visibleCount);

  const MAX_LENGTH_USER = 350;
  const MAX_LENGTH_SELLER = 200;

  function helpful(label: string) {
    const keyLike = label === "like" && !isHelpful.like;
    const keyDislike = label === "dislike" && !isHelpful.dislike;

    setIsHelpful({
      like: keyLike,
      dislike: keyDislike,
    });
  }

  const textUser =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt magni sed autem praesentium exercitationem atque eius eos perspiciatis inventore in asperiores minima nobis facilis consequuntur cumque, iste accusamus! Maxime optio laboriosam consequuntur voluptatum, fugiat atque, explicabo consequatur nulla, earum dolorem ducimus recusandae fugit ad quae autem. Obcaecati laboriosam nesciunt molestias odit! Tempore nemo assumenda praesentium iusto ad! Nemo, unde! Cum ullam saepe reprehenderit corporis a deleniti repellat! Ab dignissimos dolore molestiae explicabo dolorum quis facilis accusantium accusamus, quos quae cum iure obcaecati, temporibus mollitia aut nisi consectetur maiores repudiandae! Culpa incidunt molestias minima et? Consequuntur rem cum molestias nesciunt similique?";

  const textSeller =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod numquam voluptates ab voluptas unde velit tempora voluptatibus incidunt, dolores facere error eos! Soluta quas, laudantium, amet eveniet consequatur ea dolor voluptatibus modi quae totam quos saepe, voluptas fuga a est alias eaque molestias autem!";

  return (
    <>
      <div className="mb-4 text-davy-gray">
        <span>
          1 - {visibleCount > COMMENT_LENGTH ? COMMENT_LENGTH : visibleCount}{" "}
          out of {COMMENT_LENGTH} Coments
        </span>
      </div>

      <div className="flex flex-col gap-10">
        {sliceComments.map((_, i) => (
          <div key={i}>
            <div className="w-full rounded-2xl border px-6 py-4">
              <div className="flex items-center gap-4 border-b pb-4">
                <div className="aspect-square w-14 flex-shrink-0 overflow-hidden rounded-full border border-primary-two">
                  <Image
                    src="/images/simon.png"
                    alt="profiel"
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Prabowo Subianto</p>
                  <p className="text-sm text-davy-gray">Bandung</p>
                </div>
              </div>

              <div className="mt-4 border-b pb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center [&_svg]:size-4">
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
                          stroke="#75c57e"
                          strokeWidth="8.3077"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ))}
                    <span className="ml-2 text-base font-bold text-davy-gray">
                      5
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="aspect-square w-1 rounded-full bg-gainsboro"></div>
                  </div>
                  <p className="text-sm text-davy-gray">3 weeks ago</p>
                </div>

                <p className="my-4 text-davy-gray">
                  {isExpandedUser
                    ? textUser
                    : `${textUser.substring(0, MAX_LENGTH_USER)}...`}
                  {textUser.length > MAX_LENGTH_USER && (
                    <button
                      onClick={() => setisExpandedUser((prev) => !prev)}
                      className="text-primary-one underline hover:underline"
                    >
                      {isExpandedUser ? "See Less" : "See More"}
                    </button>
                  )}
                </p>
                <div className="flex max-w-md cursor-pointer items-center overflow-hidden bg-gray-200">
                  <div className="aspect-square w-16 flex-shrink-0 overflow-hidden p-2">
                    <Image
                      src="/images/product.png"
                      alt="product"
                      width={50}
                      height={50}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-sm font-medium text-davy-gray">
                      I will vectorize image, redraw logo, convert to vector, or
                      sketch to vector
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex w-full items-start justify-between gap-8">
                  <div className="flex w-full items-start gap-3">
                    <div className="aspect-square w-8 flex-shrink-0 overflow-hidden rounded-full border border-primary-two">
                      <Image
                        src="/images/megan.png"
                        alt="profiel"
                        width={50}
                        height={50}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div
                      className={cn(
                        "overflow-hidden pt-1.5 transition-all",
                        sellerResponse ? "max-h-[500px]" : "max-h-8",
                      )}
                    >
                      <div className="flex w-full justify-between">
                        <p className="mb-2 font-semibold">
                          Seller&apos;s Response
                        </p>
                        <div
                          className="flex-shrink-0 cursor-pointer"
                          onClick={() => setSellerResponse((prev) => !prev)}
                        >
                          <IoIosArrowDown size={20} />
                        </div>
                      </div>
                      <p>
                        {isExpandedSeller
                          ? textSeller
                          : `${textSeller.substring(0, MAX_LENGTH_SELLER)}...`}
                        {textSeller.length > MAX_LENGTH_SELLER && (
                          <button
                            onClick={() => setisExpandedSeller((prev) => !prev)}
                            className="text-primary-one underline hover:underline"
                          >
                            {isExpandedSeller ? "See Less" : "See More"}
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 flex w-full items-center gap-4 px-4">
              <span className="text-sm font-semibold text-davy-gray">
                Helpful?
              </span>
              <div
                className={cn(
                  "flex cursor-pointer items-center gap-1 font-medium",
                  isHelpful.like ? "text-primary-two" : "text-davy-gray",
                )}
                onClick={() => helpful("like")}
              >
                <BiLike />
                <span className="text-sm">Yes</span>
              </div>
              <div
                className={cn(
                  "flex cursor-pointer items-center gap-1 font-medium",
                  isHelpful.dislike ? "text-red-500" : "text-davy-gray",
                )}
                onClick={() => helpful("dislike")}
              >
                <BiDislike />
                <span className="text-sm">No</span>
              </div>
              {isHelpful.like && (
                <span className="text-sm text-silver">
                  You found this review helpful.
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {visibleCount < COMMENT_LENGTH ? (
        <Button
          onClick={() => setVisibleCount((prev) => prev + 3)}
          className="mt-6 rounded-md border border-primary-one text-base text-primary-one shadow-none"
          variant="outline"
        >
          Show More Comments
        </Button>
      ) : null}
    </>
  );
}
