<script>
  import List from "./components/List.svelte";
</script>

<List on:cardClicked={ev => console.log('App.svelte', ev.detail)} />
