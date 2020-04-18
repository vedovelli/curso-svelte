<script>
  import { onMount } from "svelte";
  import PrettyPrint from "./PrettyPrint.svelte";

  let button;

  let formData = {
    email: "",
    select: "",
    range: 0,
    radio: "",
    newsletter: true,
    terms: false
  };

  const submit = () => {
    button.disabled = true;

    setTimeout(() => {
      button.disabled = false;
      alert(
        `Estes dados serão enviados para a API: ${JSON.stringify(formData)}`
      );
    }, 1000);
  };
</script>

<div class="container">
  <form on:submit|preventDefault={submit}>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        bind:value={formData.email}
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp" />
      <small id="emailHelp" class="form-text text-muted">
        We'll never share your email with anyone else.
      </small>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Example select</label>
      <select
        bind:value={formData.select}
        class="form-control"
        id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="formControlRange">Example Range input</label>
      <input
        bind:value={formData.range}
        type="range"
        class="form-control-range"
        id="formControlRange" />
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        bind:group={formData.radio}
        name="exampleRadios"
        id="exampleRadios1"
        value="option1"
        checked />
      <label class="form-check-label" for="exampleRadios1">Default radio</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        bind:group={formData.radio}
        name="exampleRadios"
        id="exampleRadios2"
        value="option2" />
      <label class="form-check-label" for="exampleRadios2">
        Second default radio
      </label>
    </div>
    <div class="form-group form-check">
      <input
        bind:checked={formData.newsletter}
        type="checkbox"
        class="form-check-input"
        id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">
        Assinar a newsletter?
      </label>
    </div>
    <div class="form-group form-check">
      <input
        bind:checked={formData.terms}
        type="checkbox"
        class="form-check-input"
        id="exampleCheck2" />
      <label class="form-check-label" for="exampleCheck2">
        Aceito os termos de uso
      </label>
    </div>
    <button bind:this={button} type="submit" class="btn btn-primary">
      Submit
    </button>
  </form>

  <PrettyPrint {formData} />
</div>
