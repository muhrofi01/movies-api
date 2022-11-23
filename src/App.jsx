import useFetch from "./useFetch";
import MovieCard from "./MovieCard";
import MovieWrapper from "./MovieWrapper";
import TopBar from "./TopBar";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const searchHandler = (enteredSearch) => {
    setSearch(enteredSearch);
  };

  const [movies] = useFetch(search);

  return (
    <MovieWrapper>
      <TopBar onSearch={searchHandler} />
      {movies &&
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            release_date={movie.release_date}
            rating={movie.rating}
          />
        ))}
    </MovieWrapper>
  );
}

export default App;
