<script>
  import Card from "./components/Card.svelte";

  let list = [
    { title: "Primeiro card", cover: "/image2.jpg" },
    { title: "Segundo card", membersOnly: true, cover: "/image2.jpg" },
    { title: "Terceiro card", cover: "/image1.jpg" },
    { title: "Quarto card", membersOnly: true, cover: "/image2.jpg" },
    { title: "Quinto card", membersOnly: true, cover: "/image1.jpg" },
    { title: "Sexto card", cover: "/image2.jpg" }
  ];
</script>

<div class="container mx-auto mt-4">
  <div class="grid grid-cols-2 gap-4">
    <Card />
  </div>
</div>
