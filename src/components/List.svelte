<script>
  import Card from "./Card.svelte";

  let list = [
    { id: 1, title: "Primeiro card", membersOnly: true, cover: "/image2.jpg" },
    { id: 2, title: "Segundo card", membersOnly: true, cover: "/image2.jpg" },
    { id: 3, title: "Terceiro card", cover: "/image1.jpg" },
    { id: 4, title: "Quarto card", membersOnly: true, cover: "/image2.jpg" },
    { id: 5, title: "Quinto card", membersOnly: true, cover: "/image1.jpg" },
    { id: 6, title: "Sexto card", cover: "/image2.jpg" }
  ];
</script>

<div class="container mx-auto mt-4">
  <div class="grid grid-cols-2 gap-4">
    {#each list as item}
      <Card {...item} on:cardClicked />
    {/each}
  </div>
</div>
