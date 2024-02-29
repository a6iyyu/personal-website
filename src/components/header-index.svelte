<script lang="ts">
  import Dropdown from "../components/dropdown.svelte";
</script>

<header
  class="h-fit w-full flex flex-col bg-center bg-cover bg-no-repeat"
  style="background-image: url()"
>
  <section class="h-36 w-4/5 flex items-center justify-between mx-auto">
    <div class="h-full w-2/5 flex items-center justify-start">
      <a href="/" class="h-fit w-fit">
        <img src="/static/img/logo.png?url" alt="Logo" width={90} />
      </a>
    </div>
    <navbar
      class="h-full w-2/5 hidden xl:flex xl:items-center xl:justify-around"
    >
      <h4
        class="text-lg text-gray-950 hover:text-gray-800 hover:underline cursor-pointer font-semibold transition-all duration-300 ease-in-out"
        id="about-button"
      >
        About
      </h4>
      <h4
        class="text-lg text-gray-950 hover:text-gray-800 hover:underline cursor-pointer font-semibold transition-all duration-300 ease-in-out"
        id="blog-button"
      >
        Blog
      </h4>
      <h4
        class="text-lg text-gray-950 hover:text-gray-800 hover:underline cursor-pointer font-semibold transition-all duration-300 ease-in-out"
        id="project-button"
      >
        Project
      </h4>
    </navbar>
    <Dropdown />
  </section>
  <section class="h-fit w-full flex justify-end">
    <div class="h-96 w-1/2 flex flex-col items-start justify-center mb-10">
      <h2 class="text-5xl text-gray-950 cursor-default font-semibold">Hello</h2>
      <h2 class="text-4xl text-gray-950 cursor-default font-semibold">
        I'm Rafi
      </h2>
    </div>
  </section>
</header>