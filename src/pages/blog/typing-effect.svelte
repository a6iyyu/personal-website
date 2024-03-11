<script>
  import { onMount } from "svelte";

  const text = ["Opinion", "Education", "Entertainment"];
  let currentIndex = text[0];
  let i = 0;
  let backspace = false;
  const typing = () => {
    if (backspace) {
      if (i > 0) {
        setTimeout(() => {
          i--;
        }, 0);
      } else {
        backspace = false;
        currentIndex = text[currentIndex === text[0] ? 1 : [currentIndex === text[1] ? 2 : [currentIndex === text[2] ? 0 : 0]]];
      }
    } else {
      if (i < currentIndex.length) {
        setTimeout(() => {
          i++;
        }, 500);
      } else {
        backspace = true;
      }
    }
  };
  onMount(() => {
    setInterval(typing, 100);
  });
</script>

<h4
  class="text-2xl lg:text-3xl text-gray-50 cursor-default font-semibold"
  data-aos="fade-up"
>
  {currentIndex.slice(0, i)}<span>|</span>
</h4>