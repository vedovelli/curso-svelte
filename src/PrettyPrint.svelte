<script>
  import prettyPrintJson from "pretty-print-json";

  export let formData = {};
</script>

<div class="output">
  {@html prettyPrintJson.toHtml(formData)}
</div>
