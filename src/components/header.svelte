<script>
  import { onDestroy, onMount } from "svelte";
  import Dropdown from "./dropdown.svelte";

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

  let scrolling = false;
  const HandleScroll = () => {
    if (window.scrollY > 50) {
      scrolling = true;
    } else {
      scrolling = false;
    }
  };
  onMount(() => {
    window.addEventListener("scroll", HandleScroll);
  });
  onDestroy(() => {
    window.addEventListener("scroll", HandleScroll);
  });
</script>

<header
  class="h-fit w-full flex flex-col fixed z-50 {scrolling
    ? 'h-28 bg-slate-300 shadow-lg transition-all ease-in-out duration-50'
    : 'bg-transparent transition-all ease-in-out duration-50'}"
>
  <section class="h-32 w-3/4 flex items-center justify-between mx-auto">
    <div class="h-full w-2/5 flex items-center justify-start">
      <img
        src="../../logo.png"
        alt="Logo"
        width={scrolling ? "70" : "90"}
        class="transition-all duration-300 ease-in-out"
      />
    </div>
    <navbar
      class="h-full w-2/5 hidden xl:flex xl:items-center xl:justify-around"
    >
      {#each menus as menu}
        <a
          href={menu.link}
          class="text-lg hover:underline cursor-pointer font-semibold {scrolling
            ? 'text-slate-900'
            : 'text-slate-50 hover:text-slate-200'} transition-all duration-300 ease-in-out"
        >
          {menu.name}
        </a>
      {/each}
    </navbar>
    <Dropdown />
  </section>
</header>