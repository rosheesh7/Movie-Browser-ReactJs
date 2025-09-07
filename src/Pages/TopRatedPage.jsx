import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Component/Card.jsx";
import PageButton from "../Component/PageButton.jsx";
import "./TopRatedPage.css";
import { BeatLoader } from "react-spinners";

const TopRatedPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [toprated, setTopRated] = useState([]);

  useEffect(() => {
    const FetchMovie = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=8660ddaf26fc5943dfab32b00c89dc87&page=${page}`
        );
        setTopRated(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    FetchMovie();
  }, [page]);
  return (
    <>
      <div className="topratedpage-body">
        {loading && (
          <>
            <BeatLoader size={44} color={"#ffffff"} />
          </>
        )}
        {error && (
          <>
            <h3>{error}</h3>
          </>
        )}
        {!loading && error == null && (
          <>
            <div className="movie-grid">
              {toprated.map((movie) => {
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

export default TopRatedPage;
