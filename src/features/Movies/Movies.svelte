<script>
  import MovieSearch from "./MovieSearch.svelte";
  import MovieList from "./MovieList.svelte";
</script>

<main>
  <div class="container mx-auto">
    <div class="md:mx-4">
      <div data-testid="movie-search">
        <MovieSearch />
      </div>
      <div data-testid="movie-list">
        <MovieList />
      </div>
    </div>
  </div>
</main>
