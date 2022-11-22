import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [movies, setMovies] = useState(null);

  const getMoviesPopular = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=366e3d5a78cfe62d5f3116a3282f71f9&language=en-US&page=1"
      );
      setMovies(response.data.results);
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
