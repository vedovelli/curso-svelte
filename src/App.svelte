<script>
  let images = [
    {
      path: "/image1.jpg",
      description: "Primeira imagem"
    },
    {
      path: "/image2.jpg",
      description: "Segunda imagem"
    }
  ];

  const [imgObj1, imgObj2] = images;
</script>

<img src={imgObj1.path} alt={imgObj1.description} />
<img src={imgObj2.path} alt={imgObj2.description} />
