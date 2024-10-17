import { Link, useLocation } from "react-router-dom";
import { GoHeart, GoHeartFill } from "react-icons/go";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { fetchPopularMovies } from "../features/movies/movieSlice";
import MS_logo1 from "../assets/moviesite_1.png";

function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogoClick = () => {
    dispatch(fetchPopularMovies());
  };

  const isHomePage = location.pathname === "/";

  return (
    <div className="flex-col flex md:flex-row items-center md:justify-between  p-8 bg-darkerpurple w-full">
      <Link to="/" className="no-underline">
        <img
          src={MS_logo1}
          alt="MovieSite logo"
          className="w-[140px] object-coverrounded-t-lg pb-0"
          onClick={handleLogoClick}
        />
      </Link>

      {isHomePage && <Search />}

      <span className="flex items-center gap-4">
        <Link
          title="Go to favorites"
          to="/favorites"
          className="bg-transparent border-none text-3xl mt-2 md:ml-24 text-lightpink opacity-80 m-0 hover:cursor-pointer"
        >
          <GoHeartFill />
        </Link>{" "}
      </span>
    </div>
  );
}

export default Navbar;
