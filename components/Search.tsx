import { FaSearch } from "react-icons/fa";
import { Button } from "./Button";

export default function Search() {
  return (
    <div
      id="search"
      className="flex items-center rounded-full bg-gray-200 text-gray-400 duration-300"
    >
      <FaSearch className="mx-4 max-md:my-3" />
      <input
        type="search"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="search"
        className="bg-transparent py-2 text-gray-700 focus:outline-none max-md:hidden"
      />
      <div className="max-md:hidden">
        <Button>Search</Button>
      </div>
    </div>
  );
}
