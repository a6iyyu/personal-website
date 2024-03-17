<script>
  import { onDestroy, onMount } from "svelte";
  import Dropdown from "../components/dropdown.svelte";

  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Project",
      link: "/project",
    },
  ];

  onMount(() => {
    window.addEventListener("scroll", HandleScroll);
  });
  onDestroy(() => {
    window.addEventListener("scroll", HandleScroll);
  });
</script>

<header class="h-fit w-full flex flex-col z-50">
  <section class="h-32 md:h-40 w-3/4 flex items-center justify-between mx-auto">
    <div class="h-full w-2/5 flex items-center justify-start">
      <a href="/" class="h-fit w-fit">
        <img src="../../logo.png" alt="Logo" width={90} />
      </a>
    </div>
    <navbar
      class="h-full w-2/5 hidden xl:flex xl:items-center xl:justify-around"
    >
      {#each menus as menu}
        <a
          href={menu.link}
          class="text-lg hover:underline cursor-pointer font-semibold text-slate-950 hover:text-slate-800 transition-all duration-300 ease-in-out"
        >
          {menu.name}
        </a>
      {/each}
    </navbar>
    <Dropdown />
  </section>
</header>
<section class="not-found-page h-[40rem] w-full grid place-items-center">
  <div class="h-full w-[90%] block lg:flex">
    <div class="h-[45%] lg:h-full w-1/2 grid place-items-center">
      <img src="../../404.png" alt="404: Not Found!" data-aos="fade-up" />
    </div>
    <div
      class="h-[55%] lg:h-full w-1/2 flex flex-col items-center justify-center"
    >
      <div class="h-1/4 w-full flex flex-col items-start justify-end">
        <p
          class="text-gray-950 text-5xl cursor-default font-bold"
          data-aos="fade-up"
        >
          Oops!
        </p>
        <p
          class="text-gray-950 text-4xl cursor-default font-medium"
          data-aos="fade-up"
        >
          Didn't find anything here.
        </p>
      </div>
      <div class="h-1/3 w-full grid place-items-center">
        <p
          class="text-gray-900 text-2xl cursor-default font-normal text-justify"
          data-aos="fade-up"
        >
          Seems like this page took a brushstroke in the wrong direction. Let's
          navigate back to the main exhibit together.
        </p>
      </div>
      <div class="h-1/5 w-full flex items-center">
        <a
          href="/"
          class="back-to-home flex items-center justify-center rounded-full transition-all duration-300 ease-in-out bg-gray-950 text-slate-50 hover:bg-gray-800 hover:text-white"
          data-aos="fade-up"
        >
          <div
            class="grid place-items-center rounded-full text-2xl bg-slate-50 text-gray-950 hover:bg-slate-100 hover:text-gray-800"
            style="transform: rotate(225deg)"
          >
            &#10132;
          </div>
          <div class="grid place-items-center">
            <p class="font-bold text-white">Drift Home</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>