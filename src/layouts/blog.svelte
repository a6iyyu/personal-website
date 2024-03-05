<script>
  import Header from "../components/header.svelte";
  import { blogs } from "../data/blog.json";

  const menus = ["Opinion", "Education", "Entertainment"];
</script>

<Header />
<main class="h-fit w-full mb-28">
  <div
    class="h-[35rem] w-full mb-16 bg-center bg-cover bg-no-repeat"
    style="background-image: url(../../writer.jpg);"
  ></div>
  <section class="h-fit w-4/5 mx-auto">
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
      {#each menus as menu}
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