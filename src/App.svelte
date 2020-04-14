<script>
  let count = 0;

  const clickHandler = () => {
    count++;
  };
</script>

<main class="container mx-auto pt-6">
  <div>
    <button
      on:click={clickHandler}
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
      rounded">
      Click me
    </button>
  </div>
  <p>count: {count}</p>
</main>
