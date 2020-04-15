<script>
  import Card from "./components/Card.svelte";

  const data = [
    { title: "Title 1", cover: "/image1.jpg" },
    { title: "Title 2", cover: "/image2.jpg" }
  ];

  const [card1, card2] = data;
</script>

<div class="container mx-auto mt-4">
  <div class="grid grid-cols-2 gap-4">
    <Card {...card1} />
    <Card {...card2} />
    <Card {...card1} />
    <Card {...card2} />
    <Card {...card1} />
    <Card {...card2} />
    <Card {...card1} />
    <Card {...card2} />
    <Card {...card1} />
    <Card {...card2} />
    <Card {...card1} />
    <Card {...card2} />
  </div>
</div>
