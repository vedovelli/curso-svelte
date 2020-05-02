<script>
  import { fly } from "svelte/transition";
  import { store, movies } from "../../store";
  import MovieCard from "./MovieCard.svelte";

  let current = null;

  const setCurrent = id => (current === id ? (current = null) : (current = id));
</script>

<div class="mb-16">
  <main>
    {#if $store.wasSearched && !$movies.length}
      <h3 class="py-6 mt-3 text-center shadow sm:rounded-lg xl:mx-3 bg-gray-50">
        Nenhum filme encontrado
      </h3>
    {/if}
    {#if $movies.length}
      <ul
        data-testid="movie-list"
        class="m-0 xl:grid xl:grid-cols-2"
        in:fly={{ y: -20, duration: 400 }}
        out:fly={{ y: 20, duration: 400 }}>
        {#each $movies as movie}
          <li
            data-testid="movie-item"
            on:click={setCurrent(movie.id)}
            class:bg-red-200={current === movie.id}
            class="p-1 mx-0 my-3 bg-white shadow cursor-pointer xl:mx-3 sm:rounded-lg xl:justify-between">
            <MovieCard {movie} />
          </li>
        {/each}
      </ul>
    {/if}
  </main>
</div>
