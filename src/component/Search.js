import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Search() {
    const movie_name = useSelector((state) => state.search.value);
    console.log(movie_name);

    const [movies, setMovies] = useState([]);
    const Api_key = "c45a857c193f6302f2b5061c3b85e743";

    // console.log(movie_name);
    // console.log(movie_name);
    const fetchSearchMovie = async (movie_name) => {
      try {
        let res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=1`
        );
        console.log(res.data.results);
        setMovies(res.data.results);

        let data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    
    useEffect(() => {
        fetchSearchMovie(movie_name);
    }, [movie_name]);
    return (
      <>
        <div className="container mb-5 mt-5">
          <h1 className="h1">Search result {movie_name}</h1>
          <div className="row mb-3 mt-3">
            <h1>Popular</h1>
            {movies &&
              movies.length > 0 &&
              movies.map((movie) => {
                return (
                  <div className="col-xl-3 a">
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
          {/* {movies.length > 0 && (
            <div className="pagination">
              <button className="btn btn-outline-danger" onClick={handlePre}>
                ⬅️Previous
              </button>
              <button className="btn btn-outline-danger">{page}</button>
              <button className="btn btn-outline-danger" onClick={handleNext}>
                Next➡️
              </button>
            </div>
          )} */}
        </div>
      </>
    );
}
