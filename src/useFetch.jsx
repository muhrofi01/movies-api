import { useState, useEffect } from "react";
// import tmdb from "./api/tmdb";
import axios from "axios";

const useFetch = (search) => {
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
  const getMoviesPopular = async (query) => {
    try {
      let response;
      if (query === "") {
        response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "366e3d5a78cfe62d5f3116a3282f71f9",
              sort_by: "popularity.desc",
              page: 1,
            },
          }
        );
      } else {
        response = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              api_key: "366e3d5a78cfe62d5f3116a3282f71f9",
              query: query,
              page: 1,
            },
          }
        );
      }
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
    getMoviesPopular(search);
  }, [getMoviesPopular, search]);

  return [movies];
};

export default useFetch;
