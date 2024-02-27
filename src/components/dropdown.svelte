<script>
  let open = false;
  const dropdown = () => {
    open = !open;
  };
  window.addEventListener("click", function (event) {
    if (!event.target.closest(".flex") && open) {
      open = !open;
    }
  });
  const menus = ["About", "Blog", "Project"];
</script>

<div class="flex lg:hidden relative">
  <button
    class="flex lg:hidden p-2 border-[3px] rounded-sm transition-all duration-300 linear border-slate-950 bg-transparent hover:border-slate-600 hover:text-slate-600 z-20"
    on:click={dropdown}
  >
    <i class="bi bi-list text-4xl"></i>
  </button>
  {#if open}
    <div
      class={`${open ? "block" : "hidden"} h-fit w-fit fixed bg-slate-50 text-slate-950 rounded-lg z-20`}
      style="margin: 5rem 0 0 -5.6rem"
      data-aos={`${dropdown ? "fade-down" : "fade-up"}`}
    >
      {#each menus as menu}
        <a
          href={`/${menu.toLocaleLowerCase()}`}
          class="block text-md text-center font-semibold px-12 py-5 rounded-lg hover:bg-slate-200 transition-all duration-300 ease-in-out"
        >
          {menu}
        </a>
      {/each}
    </div>
  {/if}
</div>