import "./Navbar.css";
import { MdLocalMovies } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to={"/"} className="logo">
          <MdLocalMovies size={32} />
          <span className="logo-title">CineMania</span>
        </NavLink>

        <ul>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/popular"}>Popular</NavLink>
          <NavLink to={"/toprated"}>Top Rated</NavLink>
        </ul>

        <div className="search-container">
          <input type="text" placeholder="Search Movie " />
          <button>
            <FaSearch />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
