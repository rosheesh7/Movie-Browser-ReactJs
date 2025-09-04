import React from "react";
import "./Card.css";
const Card = ({ movie }) => {
  return (
    <>
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="movie-poster"
        />
        <h3>{movie.title}</h3>
      </div>
    </>
  );
};

export default Card;
