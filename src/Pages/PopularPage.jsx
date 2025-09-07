import "./PopularPage.css";
import Card from "../Component/Card.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import PageButton from "../Component/PageButton.jsx";
import { BeatLoader } from "react-spinners";
const PopularPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const FetchPopular = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=8660ddaf26fc5943dfab32b00c89dc87&page=${page}`
        );
        setPopularMovies(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    FetchPopular();
  }, [page]);
  return (
    <>
      <div className="Popularpage-body">
        <h2>Popular Movies</h2>
        {loading && (
          <>
            <BeatLoader />
          </>
        )}
        {error && <h3>{error.message}</h3>}
        {!loading && error == null && (
          <>
            <div className="movie-grid">
              {popularMovies.map((movie) => {
                return <Card movie={movie} key={movie.id} />;
              })}
            </div>
            <PageButton page={page} setPage={setPage} />
          </>
        )}
      </div>
    </>
  );
};

export default PopularPage;
