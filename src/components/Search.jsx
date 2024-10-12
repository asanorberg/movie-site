import React from "react";
import { GoSearch } from "react-icons/go";

const Search = ({}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex w-fit h-12  rounded-full border-solid border-[1px] border-lightpurple bg-darkerpurple px-4">
        <input className="bg-transparent border-none text-white focus:outline-none px-2 transition-all focus:w-60" />
        <button
          type="submit"
          className="bg-transparent border-none text-2xl text-lightpurple m-0"
        >
          <GoSearch />
        </button>
      </div>
    </div>
  );
};
export default Search;
