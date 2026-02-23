import React, { useEffect, useState } from "react";
import "./movies.css";

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/testMovies/movies", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Fetched data:", data);
        setMovies(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="moviesMain">
      <div className="container pt-5 pb-5">
        <div className="row">
          {Array.isArray(movies) &&
            movies.map((movie) => (
              <div key={movie._id} className="col-lg-3 col-md-6 col-sm-12 p-2">
                <div className="card movieCard">
                  <img src={movie.posterUrl} alt={movie.title} />
                  <div className="p-2">
                    <h5> {movie.title} </h5>
                    <div className="box">
                      <h6> {movie.releaseYear} </h6>
                      <small> By {movie.createdBy.name} </small>
                    </div>
                    <div className="overview">
                      {movie.overview} <br />
                      <span className="bold"> Runtime: </span>
                      {movie.runtime} mins
                    </div>
                    <br />
                    <small>
                      <span className="bold"> Genres: </span>
                      {movie.genres.join(", ")}
                    </small>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
