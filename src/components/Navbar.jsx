import { Link } from "react-router-dom";
import { GoHeart, GoHeartFill } from "react-icons/go";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { fetchPopularMovies } from "../features/movies/movieSlice";

function Navbar() {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(fetchPopularMovies());
  };

  return (
    <div className="flex justify-between p-8 bg-darkerpurple w-full">
      <Link to="/" className="no-underline" onClick={handleLogoClick}>
        <h1 className="text-2xl font-thin tracking-wider text-white opacity-75">
          MovieSite
        </h1>
      </Link>
      <span className="flex items-center gap-4">
        <Search />
        <Link
          title="Go to favorites"
          to="/favorites"
          className="bg-transparent border-none text-3xl text-lightpink opacity-80 m-0 hover:cursor-pointer"
        >
          <GoHeartFill />
        </Link>{" "}
      </span>
    </div>
  );
}

export default Navbar;
