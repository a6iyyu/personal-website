<script>
  import { onMount } from "svelte";
  import Header from "../components/header.svelte";
  import { blogs } from "../data/blog.json";

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

<Header />
<main class="h-fit w-full mb-28">
  <section
    class="h-[40rem] lg:h-[35rem] w-full grid place-items-center mb-16 bg-center bg-cover bg-no-repeat"
    style="background-image: url(../../writer.jpg)"
  >
    <div
      class="h-3/5 w-3/4 flex items-start flex-col xl:items-start justify-center xl:justify-end mb-10 mx-auto"
    >
      <h2
        class="text-4xl lg:text-5xl text-gray-50 cursor-default font-semibold"
        style="line-height: 1.375"
        data-aos="fade-up"
      >
        Let's Make Some Words!
      </h2>
      <h4
        class="text-2xl lg:text-3xl text-gray-50 cursor-default font-semibold"
        data-aos="fade-up"
      >
        {currentIndex.slice(0, i)}<span>|</span>
      </h4>
    </div>
  </section>
  <section class="h-fit w-3/4 mx-auto">
    <h3
      class="text-3xl text-gray-950 text-center xl:text-left cursor-default font-semibold mb-3"
      data-aos="fade-up"
    >
      Blog
    </h3>
    <hr
      class="h-0.5 w-full bg-slate-950 border border-dashed"
      data-aos="fade-up"
    />
    <section
      class="max-h-full h-fit w-full flex overflow-x-auto"
      data-aos="fade-up"
    >
      {#each text as menu}
        <div
          class="h-fit w-fit bg-slate-950 hover:bg-slate-800 text-slate-50 font-semibold mr-4 mt-4 px-9 py-5 rounded-full cursor-pointer transition-all duration-300 ease-in-out"
        >
          {menu}
        </div>
      {/each}
    </section>
    {#each blogs as blog}
      {#if !blog.title}
        <section
          class="h-fit w-full flex flex-col items-center justify-center mb-12 mt-10"
        >
          <img
            src="../../dont-know.jpg"
            width={400}
            class="text-gray-950 font-semibold mix-blend-multiply"
            alt="Hmm..."
            data-aos="fade-up"
          />
          <br />
          <h4
            class="text-gray-500 text-base md:text-xl text-center cursor-default font-medium"
            data-aos="fade-up"
          >
            Oops, no blog posts here yet . . .
          </h4>
        </section>
      {:else if blog.title !== null}
        <!-- Blog -->
        <section
          class="h-fit w-full flex flex-col items-center justify-center rounded-2xl border-2 border-gray-950 mb-12 mt-9"
          id={blog.id}
          data-aos="fade-up"
        >
          <div
            class="h-1/5 w-4/5 xl:max-w-[90%] xl:w-[90%] flex items-center justify-between mx-auto mb-2 mt-6"
          >
            <a
              href="/"
              class="text-3xl text-gray-950 hover:text-gray-700 font-semibold transition-all duration-300 ease-in-out hover:underline"
            >
              {blog.title}
            </a>
            <a
              href="/"
              class="text-base text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 ease-in-out hover:underline"
            >
              <em>{blog.date}</em>
            </a>
          </div>
          <hr class="h-0.5 w-[90%] bg-gray-950 mx-auto" />
          <div
            class="h-4/5 w-4/5 xl:max-w-[90%] xl:w-[90%] flex flex-col items-start justify-between mx-auto mb-7 mt-5"
          >
            <a
              href="/"
              class="text-base text-justify text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 ease-in-out hover:underline"
            >
              {blog.description}
            </a>
          </div>
        </section>
      {:else}
        <section
          class="h-fit w-full flex flex-col items-center justify-center mb-12 mt-3"
        >
          <img
            src="../../error-fetching.png"
            width={300}
            class="text-gray-950 font-semibold"
            alt="Something went wrong."
            data-aos="fade-up"
          />
          <br />
          <h4
            class="text-gray-500 text-base md:text-xl text-center cursor-default font-medium"
            data-aos="fade-up"
          >
            Error while fetching data!
          </h4>
        </section>
      {/if}
    {/each}
  </section>
</main>