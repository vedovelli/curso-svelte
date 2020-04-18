<script>
  import { onMount, beforeUpdate, afterUpdate } from "svelte";
  import prettyPrintJson from "pretty-print-json";

  export let formData = {};

  onMount(() => {
    // eslint-disable-next-line
    console.log("Pronto para ser usado");
  });

  beforeUpdate(() => {
    // eslint-disable-next-line
    console.log("Receberei atualização");
  });

  afterUpdate(() => {
    // eslint-disable-next-line
    console.log("Fui atualizado");
  });
</script>

<div class="output">
  {@html prettyPrintJson.toHtml(formData)}
</div>
