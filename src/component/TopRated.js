import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TopRated = () => {
 
  const [movies, setMovies] = useState([]);
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const fetchTopRated = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`
      )
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTopRated();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>TopRated</h1>
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => {
              return (
                <div className="col-xl-3">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                    className="img-fluid"
                  />
                  <h3>{movie.title}</h3>
                  <p>
                    Rating:{" "}
                    <h4>
                      <strong>{movie.vote_average}</strong>
                    </h4>
                  </p>
                  <p></p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};


export default TopRated