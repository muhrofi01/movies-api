import { useState, useEffect } from "react";
import tmdb from "./api/tmdb";

const useFetch = (url) => {
  const [movies, setMovies] = useState(null);
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getMoviesPopular = async () => {
    try {
      const response = await tmdb.get("discover/movie");
      let transformMovies = [];
      transformMovies = response.data.results.map((movie) => {
        let date = new Date(movie.release_date);
        let dateFormat =
          month[date.getMonth()] +
          " " +
          date.getDate() +
          ", " +
          date.getFullYear();
        return {
          id: movie.id,
          title: movie.title,
          image: movie.poster_path,
          release_date: dateFormat,
          rating: movie.vote_average,
        };
      });
      setMovies(transformMovies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMoviesPopular();
  }, []);

  return [movies];
};

export default useFetch;
