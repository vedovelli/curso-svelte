<script>
  import { store, movies } from "../../store";
  import MovieCard from "./MovieCard.svelte";
</script>

<div class="mb-16">
  <main>
    {#if $store.wasSearched && !$movies.length}
      <h3 class="py-6 mt-3 text-center shadow sm:rounded-lg xl:mx-3 bg-gray-50">
        Nenhum filme encontrado
      </h3>
    {:else}
      <ul class="m-0 xl:grid xl:grid-cols-2">
        {#each $movies as movie}
          <li
            class="p-1 mx-0 my-3 bg-white shadow cursor-pointer xl:mx-3
            sm:rounded-lg xl:justify-between">
            <MovieCard {movie} />
          </li>
        {/each}
      </ul>
    {/if}
  </main>
</div>
