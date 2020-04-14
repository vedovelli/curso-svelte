<script>
  let count = 0;

  $: if (count === 10) {
    alert("Contagem está perigosamente alta");
    count = 9;
  }

  $: doubled = count * 2;

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
  <p>doubled: {doubled}</p>
</main>
