import "./PopularPage.css";
import Card from "../Component/Card.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
const PopularPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=8660ddaf26fc5943dfab32b00c89dc87"
      )
      .then((response) => {
        console.log(response.data.results);
        setPopularMovies(response.data.results);
      });
  }, []);
  return (
    <>
      <div className="Popularpage-body">
        <h1>Popular Movies</h1>
        <div className="movie-grid">
          {popularMovies.map((movie) => {
            return <Card movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PopularPage;
