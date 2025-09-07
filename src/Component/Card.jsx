import { Link } from "react-router";
import { IoIosInformationCircle } from "react-icons/io";
import "./Card.css";

const Card = ({ movie }) => {
  return (
    <div className="movie-card" color="white">
      <div className="poster-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <IoIosInformationCircle size={40} />
        </div>
      </div>
      <h3 className="movie-title">{movie.title}</h3>
    </div>
  );
};

export default Card;
