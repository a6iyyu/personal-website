<script>
  import { onDestroy, onMount } from "svelte";

  let scrollPercentage = 0;
  const updatePercentage = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollPercentage = (window.scrollY / scrollHeight) * 100;
  };
  onMount(() => {
    window.addEventListener("scroll", updatePercentage);
  });
  onDestroy(() => {
    window.removeEventListener("scroll", updatePercentage);
  });
</script>

<div
  class="h-1 fixed inset-0 bg-blue-500 z-[9999]"
  style="width: {scrollPercentage}%"
></div>