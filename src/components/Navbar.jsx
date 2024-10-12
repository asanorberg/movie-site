import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between p-8 bg-darkpurple w-full">
      <Link to="/" className="no-underline">
        <h1 className="text-2xl font-thin tracking-wider text-white opacity-75">
          MovieSite
        </h1>
      </Link>
      <input
        className="w-36 h-12 rounded-full bg-white px-4 transition-all focus:w-60"
        placeholder="Search.."
      />
    </div>
  );
}

export default Navbar;
