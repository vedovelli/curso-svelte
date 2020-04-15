<script>
  export let title = "Can coffee make you a better developer?";
  export let cover = "/image1.jpg";
  export let membersOnly = false;
</script>

<div class="w-full max-w-sm lg:max-w-full lg:flex">
  <div
    class="flex-none h-48 overflow-hidden text-center bg-cover rounded-t
    lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
    style={`background-image: url(${cover})`}
    title="Woman holding a mug" />
  <div
    class="flex flex-col justify-between p-4 leading-normal bg-white border-b
    border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t
    lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
    <div class="mb-8">
      {#if membersOnly}
        <p class="flex items-center text-sm text-gray-600">
          <svg
            class="w-3 h-3 mr-2 text-gray-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path
              d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0
              0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7
              6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Members only
        </p>
      {:else}
        <p>&nbsp;</p>
      {/if}
      <div class="mb-2 text-xl font-bold text-gray-900 truncate">{title}</div>
      <p class="text-base text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
  </div>
</div>
