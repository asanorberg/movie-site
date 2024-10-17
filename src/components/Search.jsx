import React from "react";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useDispatch } from "react-redux";
import { searchMovies } from "../features/movies/movieSlice";

const Search = ({}) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(searchMovies(query));
      setQuery("");
    }
  };

  return (
    <div className="flex items-center gap-4">
      <form
        onSubmit={handleSearch}
        className="flex my-4 md:my-0 items-center h-10 rounded-full border-solid border-[1px] border-lightpurple bg-darkerpurple px-4"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent text-center w-full sm:w-[16rem] md:w-[24rem] lg:w-[30rem] xl:w-[36rem] border-none text-white focus:outline-none px-2 transition-all"
          placeholder="Search movies..."
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="flex bg-transparent border-none text-2xl text-lightpurple hover:cursor-pointer "
        >
          <GoSearch />
        </button>
      </form>
    </div>
  );
};
export default Search;
