import { FaSearch } from "react-icons/fa";
import { Button } from "./Button";

export default function Search() {
  return (
    <div
      id="search"
      className="relative flex w-full items-center rounded-full bg-gray-200 text-gray-400 duration-300"
    >
      <FaSearch className="m-4 flex-shrink-0 md:my-0" />
      <input
        type="search"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Search..."
        className="bg-transparent py-2 text-gray-700 focus:outline-none max-md:hidden"
      />
      <div className="absolute right-0 top-0 flex h-full items-center max-md:hidden">
        <Button>Search</Button>
      </div>
    </div>
  );
}
