import "./Navbar.css";
import { MdLocalMovies } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <MdLocalMovies size={32} />
          <span className="logo-title">CineMania</span>
        </div>

        <ul>
          <li>Home</li>
          <li>Trending</li>
          <li>Top Rated</li>
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
