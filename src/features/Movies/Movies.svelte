<script>
  import MovieSearch from "./MovieSearch.svelte";
  import MovieList from "./MovieList.svelte";
  import { fetchMovies } from "../../api/movie-api";

  let movies = [];

  const doSearch = async ({ detail: { term } }) => {
    const {
      data: { results }
    } = await fetchMovies(term);

    movies = results;
  };
</script>

<main>
  <div class="container mx-auto">
    <div class="md:mx-4">
      <MovieSearch on:doSearch={doSearch} />
      <MovieList {movies} />
    </div>
  </div>
</main>
