import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//Api fetch from the server
const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [page, setpage] = useState(1);
  const navigate = useNavigate();
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const fetchPopularMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${page}`
      )
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //buttons for paginations
  const handlePre = () => {
    if (page > 1) {
      setpage(page - 1);
      window.scrollTo(0, 0);
    }
  };
  const handleNext = () => {
    setpage(page + 1);
    window.scrollTo(0, 0);
  };
  const handleMovie = (id) => {
   console.log(id);
   navigate(`/moviedetail?q=${id} `);
  }; 

  useEffect(() => {
    fetchPopularMovies(page);
  }, [page]);
  return (
    <>
      <div className="container mb-5 mt-5">
        <div className="row mb-3 mt-3">
          <h1>Popular</h1>
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => {
              return (
                <div
                  className="col-xl-3 a"
                  onClick={() => handleMovie(movie.id)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                    className="img-fluid img"
                  />
                  <h3 className="h3">{movie.title}</h3>
                  <p id="x1">
                    Rating:{" "}
                    <h4>
                      <strong>{movie.vote_average}</strong>
                    </h4>
                  </p>
                </div>
              );
            })}
        </div>
        {movies.length > 0 && (
          <div className="pagination">
            <button className="btn btn-outline-danger" onClick={handlePre}>
              ⬅️Previous
            </button>
            <button className="btn btn-outline-danger">{page}</button>
            <button className="btn btn-outline-danger" onClick={handleNext}>
              Next➡️
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Popular;

