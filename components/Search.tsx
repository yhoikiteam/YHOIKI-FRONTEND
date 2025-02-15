"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "nextjs-toploader/app";
import { Button } from "./Button";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query || query.trim() === "") return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setQuery("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full items-center rounded-full bg-gray-200 text-gray-400 duration-300"
    >
      <div className="mx-4">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1667 14.1667L11.194 11.194M11.194 11.194C12.1554 10.2326 12.75 8.90451 12.75 7.4375C12.75 4.50349 10.3715 2.125 7.4375 2.125C4.50349 2.125 2.125 4.50349 2.125 7.4375C2.125 10.3715 4.50349 12.75 7.4375 12.75C8.90451 12.75 10.2326 12.1554 11.194 11.194Z"
            stroke="#A8A8A8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* <div className="flex flex-shrink-0 items-center justify-center">
      </div> */}
      <input
        type="search"
        name="query"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        autoComplete="off"
        placeholder="Search..."
        className="w-full bg-transparent py-2 text-davy-gray focus:outline-none"
      />
      <Button
        type="submit"
        className="absolute right-0 top-0 flex h-full items-center"
      >
        Search
      </Button>
    </form>
  );
}
