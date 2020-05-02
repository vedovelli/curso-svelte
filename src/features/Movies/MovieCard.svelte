<script>
  import { BACKDROP_BASE_URL } from "../../api/movie-api";
  export let movie;
</script>

<div class="p-4">
  <div class="flex flex-col md:flex-row">
    <div class="flex-shrink-0">
      <img
        class="rounded-lg md:w-56 md:rounded"
        src={`${BACKDROP_BASE_URL}${movie.backdrop_path}`}
        alt={`Poster: ${movie.title}`}
        title={`Poster: ${movie.title}`} />
    </div>
    <div class="w-full md:ml-6">
      <div
        class="mt-3 text-sm font-bold tracking-wide text-red-600 uppercase md:mt-0">
        {movie.title}
      </div>
      <div class="flex p-2 my-2 text-xs text-gray-500 bg-gray-100 rounded">
        <p class="w-full">
          Avaliação:
          <strong>{movie.vote_average}</strong>
          com {movie.vote_count} votos
        </p>
        <p class="w-full text-right">Lançamento: {movie.friendly_date}</p>
      </div>
      <p class="mt-2 text-sm text-gray-500">{movie.overview}</p>
    </div>
  </div>
</div>
