<script>
  import MovieCard from "./MovieCard.svelte";

  export let movies = [];
</script>

<div class="mb-16">
  <main>
    <!-- <h3 class="py-6 mt-3 text-center shadow sm:rounded-lg xl:mx-3 bg-gray-50">
      Nenhum filme encontrado
    </h3> -->
    <ul class="m-0 xl:grid xl:grid-cols-2">
      {#each movies as movie}
        <li
          class="p-1 mx-0 my-3 bg-white shadow cursor-pointer xl:mx-3 sm:rounded-lg xl:justify-between">
          <MovieCard />
        </li>
      {/each}
    </ul>
  </main>
</div>
