<script>
  let timeArray = [];
  let timeObject = {};

  const clickHandler = () => {
    const d = new Date();
    const key = d.getTime();
    timeArray = [...timeArray, key];
    timeObject = { ...timeObject, [key]: d.toLocaleTimeString() };
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
  <p>Array: {JSON.stringify(timeArray)}</p>
  <p>Object: {JSON.stringify(timeObject)}</p>
</main>
