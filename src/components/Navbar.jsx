import { Link } from "react-router-dom";
import { GoHeart, GoHeartFill } from "react-icons/go";
import Search from "./Search";

function Navbar() {
  return (
    <div className="flex justify-between p-8 bg-darkerpurple w-full">
      <Link to="/" className="no-underline">
        <h1 className="text-2xl font-thin tracking-wider text-white opacity-75">
          MovieSite
        </h1>
      </Link>
      <span className="flex items-center">
        <Search />
        <button className="bg-transparent border-none text-3xl text-lightpurple m-0 hover:cursor-pointer">
          <GoHeartFill />
        </button>{" "}
      </span>
    </div>
  );
}

export default Navbar;
