<script>
  import { experiences } from "../data/work-experience.json";
</script>

<section class="h-fit w-3/4 mt-4 mx-auto">
  <h3
    class="text-3xl text-gray-950 text-center xl:text-left cursor-default font-semibold mb-3"
    data-aos="fade-up"
  >
    Work Experience
  </h3>
  <hr
    class="h-0.5 w-full bg-gray-950 border border-dashed"
    data-aos="fade-up"
  />
  {#each experiences as experience}
    {#if !experience.title}
      <section
        class="h-fit w-full flex flex-col items-center justify-center mb-12 mt-3"
      >
        <img
          src="../../overthinking.png"
          width={300}
          class="text-gray-950 font-semibold"
          alt="Hmm..."
          data-aos="fade-up"
        />
        <br />
        <h4
          class="text-gray-500 text-base md:text-xl text-center cursor-default font-medium"
          data-aos="fade-up"
        >
          Oops, I don't have any experience yet . . .
        </h4>
      </section>
    {:else if experience.title !== null}
      <section
        class="h-fit w-full flex flex-col items-center justify-center rounded-2xl border-2 border-gray-950 mb-12 mt-9"
        id={experience.id}
        data-aos="fade-up"
      >
        <div
          class="h-1/5 w-4/5 xl:max-w-[90%] xl:w-[90%] flex items-center justify-between mx-auto mb-2 mt-6"
        >
          <a
            href="/{experience.title.toLowerCase().replace(/\s+/g, '-')}"
            class="text-3xl text-gray-950 hover:text-gray-700 font-semibold transition-all duration-300 ease-in-out hover:underline"
          >
            {experience.title}
          </a>
          <a
            href="/{experience.title.toLowerCase().replace(/\s+/g, '-')}"
            class="text-base text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 ease-in-out hover:underline"
          >
            <em>{experience.date}</em>
          </a>
        </div>
        <hr class="h-0.5 w-4/5 xl:w-[90%] bg-gray-950 mx-auto" />
        <div
          class="h-3/5 w-4/5 xl:max-w-[90%] xl:w-[90%] flex flex-col items-start justify-between mx-auto my-5"
        >
          <a
            href="/{experience.title.toLowerCase().replace(/\s+/g, '-')}"
            class="text-base text-justify text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 ease-in-out hover:underline"
          >
            {experience.description}
          </a>
        </div>
        <div
          class="h-1/5 max-w-[80%] w-4/5 xl:max-w-[90%] xl:w-[90%] flex overflow-x-auto mb-5 mt-2"
        >
          {#each experience.skills as skills}
            <a
              href="/{experience.title.toLowerCase().replace(/\s+/g, '-')}"
              class="border border-slate-950 hover:bg-slate-950 text-slate-900 hover:text-slate-100 hover:font-semibold rounded-full mr-4 py-3 px-8 font-medium text-base transition-all duration-300 ease-in-out"
            >
              {skills}
            </a>
          {/each}
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
          alt="Something when wrong"
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