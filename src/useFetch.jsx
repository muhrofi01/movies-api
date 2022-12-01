import { useState, useEffect, useCallback, useMemo } from "react";
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
  const month2 = useMemo(() => ([month]), [month]);
  
  const getMoviesPopular = useCallback(async() => {
    try {
      let response;
      if (search === "") {
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
              query: search,
              page: 1,
            },
          }
        );
      }
      let transformMovies = [];
      transformMovies = response.data.results.map((movie) => {
        let date = new Date(movie.release_date);
        let dateFormat =
          month2[date.getMonth()] +
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
  }, [search, month2]);

  useEffect(() => {
    getMoviesPopular();
  }, [getMoviesPopular]);

  return [movies];
};

export default useFetch;
