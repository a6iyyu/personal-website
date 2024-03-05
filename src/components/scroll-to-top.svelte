<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
  import { onDestroy, onMount } from "svelte";
  import scrollToTopImage from "/scroll-to-top.png?url";

  let showScroll = false;
  const checkScrollTop = () => {
    showScroll = window.scrollY > 25 * 16;
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  onMount(() => {
    window.addEventListener("scroll", checkScrollTop);
  });
  onDestroy(() => {
    window.removeEventListener("scroll", checkScrollTop);
  });
</script>

<div
  class={`h-20 w-20 md:h-24 md:w-24 bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-full fixed grid place-items-center z-30 transition-all duration-300 ease-in-out bottom-8 right-8 ${showScroll ? "visible opacity-100" : "invisible opacity-0"}`}
  on:click={scrollToTop}
>
  <img
    src={scrollToTopImage}
    class="rotate-180 text-base text-center text-slate-50 w-5 md:w-[25px]"
    alt="Scroll To Top"
    id="scroll-to-top"
  />
</div>