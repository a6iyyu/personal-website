<script>
  import { onMount } from "svelte";

  const text = ["Front-end Developer", "Informatics Student"];
  let currentIndex = text[0];
  let i = 0;
  let backspace = false;
  const typing = () => {
    if (backspace) {
      if (i > 0) {
        i--;
      } else {
        backspace = false;
        currentIndex = text[currentIndex === text[0] ? 1 : 0];
      }
    } else {
      if (i < currentIndex.length) {
        i++;
      } else {
        backspace = true;
      }
    }
  };
  onMount(() => {
    setInterval(typing, 100);
  });
</script>

<h4 class="text-3xl text-gray-50 cursor-default font-semibold">
  {currentIndex.slice(0, i)}<span>|</span>
</h4>