<script>
  import Dropdown from "./dropdown.svelte";
</script>

<header class="h-36 w-3/4 flex justify-between mx-auto">
  <section class="h-full w-2/5 flex items-center justify-start">
    <a href="/">
      <img
        src="/static/img/logo.png?url"
        alt="Logo"
        width={80}
        data-aos="fade-in"
      />
    </a>
  </section>
  <section class="h-full w-2/5 flex items-center justify-end lg:justify-around">
    <a
      href="/about"
      class="hidden lg:flex text-gray-950 text-lg hover:text-gray-800 hover:underline font-semibold transition-all duration-300 ease-in-out"
      data-aos="fade-in"
    >
      About
    </a>
    <a
      href="/blog"
      class="hidden lg:flex text-gray-950 text-lg hover:text-gray-800 hover:underline font-semibold transition-all duration-300 ease-in-out"
      data-aos="fade-in"
    >
      Blog
    </a>
    <a
      href="/project"
      class="hidden lg:flex text-gray-950 text-lg hover:text-gray-800 hover:underline font-semibold transition-all duration-300 ease-in-out"
      data-aos="fade-in"
    >
      Project
    </a>
    <Dropdown />
  </section>
</header>