import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SingleMovieDetail() {
  const [searchPara] = useSearchParams();
  const [movies, setMovies] = useState([null]);
  const [cast, setcast] = useState([]);
  const movie_id = searchPara.get("q");
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  console.log(movie_id);

  //   console.log(id);
  const fetchMovie = async (movie_id) => {
    try {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US`
      );
      console.log(res.data);
      setMovies(res.data);
    } catch (erro) {
      console.log(erro);
    }
  };

  const fetchMovieCast = async (movie_id) => {
    try {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US`
      );
      console.log(res.data.cast);
      setcast(res.data.cast);
    } catch (erro) {
      console.log(erro);
    }
  };

  useEffect(() => {
    fetchMovie(movie_id);
    fetchMovieCast(movie_id);
  }, [movie_id]);

  return (
    <>
      <br />
      <div className="container mb-5 mb-5 moviedetails">
        <h1>
          <u>
            <strong>MOVIE DETAILS</strong>
          </u>
        </h1>
        <div className="row">
          <div className="col-xl-6">
            <div className="row">
              <div className="col-xl-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-xl-9">
                <h3>{movies.title}</h3>
                <p>Rating:{movies.vote_average}</p>
                <p>{movies.runtime} mins</p>
                <p>
                  <div>
                    {movies.genres &&
                      movies.genres.length > 0 &&
                      movies.genres.map((genre) => genre.name).join(", ")}
                  </div>
                </p>
                <p>Release Date:{movies.release_date}</p>
                <div>
                  <h5>Overview</h5>
                  <p>{movies.overview}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <img
              src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>

        <h2>MOVIE CAST</h2>
        <div className="row">
          {cast &&
            cast.length > 0 &&
            cast.map((cast) => {
              return (
                <div className="col-xl-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt=""
                    className="img-fluid img"
                  />

                  <p>
                    <strong>
                      <h4>{cast.name}</h4>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      <h5>{cast.character}</h5>
                    </strong>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
