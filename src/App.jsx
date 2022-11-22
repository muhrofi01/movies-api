import useFetch from "./useFetch";
import MovieCard from "./MovieCard";
import MovieWrapper from "./MovieWrapper";

function App() {
  const [movies] = useFetch();

  return (
    <MovieWrapper>
      {movies &&
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
            overview={movie.overview}
          />
        ))}
    </MovieWrapper>
  );
}

export default App;
