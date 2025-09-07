import axios from "axios";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Card from "../Component/Card.jsx";
import PageButton from "../Component/PageButton";
import "./Homepage.css";
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [homeMovies, setHomeMovies] = useState([]);
  useEffect(() => {
    const FetchHome = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=8660ddaf26fc5943dfab32b00c89dc87&sort_by=vote_count.desc&page=${page}`
        );
        setHomeMovies(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    FetchHome();
  }, [page]);
  return (
    <>
      <div className="page-body">
        {loading && (
          <>
            <BeatLoader size={36} color={"#ffffff"} />
          </>
        )}
        {error && <h3>{error.message}</h3>}
        {!loading && error == null && (
          <>
            <div className="movie-grid">
              {homeMovies.map((movie) => {
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

export default HomePage;
