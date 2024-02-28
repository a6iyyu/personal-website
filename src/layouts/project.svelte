<script>
  import { experiences } from "../data/work-experience.json";
  import { personalproject } from "../data/personal-project.json";
  import { volunteers } from "../data/volunteer.json";
</script>

<main class="h-fit w-full mb-28 mt-10 xl:mt-14">
  <!-- Work Experience -->
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
            src="/static/img/overthinking.png?url"
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
              href="/"
              class="text-3xl text-gray-950 hover:text-gray-700 font-semibold transition-all duration-300 ease-in-out hover:underline"
            >
              {experience.title}
            </a>
            <a
              href="/"
              class="text-base text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 ease-in-out hover:underline"
            >
              <em>{experience.date}</em>
            </a>
          </div>
          <hr class="h-0.5 w-[90%] bg-gray-950 mx-auto" />
          <div
            class="h-3/5 w-4/5 xl:max-w-[90%] xl:w-[90%] flex flex-col items-start justify-between mx-auto my-5"
          >
            <a
              href="/"
              class="text-base text-justify text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 ease-in-out hover:underline"
            >
              {experience.description}
            </a>
          </div>
          <div
            class="h-1/5 max-w-[80%] w-4/5 xl:max-w-[90%] xl:w-[90%] flex mb-5 mt-2"
          >
            {#each experience.skills as skills}
              <a
                href="/"
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
            src="/static/img/error-fetching.png?url"
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

  <!-- Personal Project -->
  <section class="h-fit w-3/4 mt-12 mx-auto">
    <h3
      class="text-3xl text-gray-950 text-center xl:text-left cursor-default font-semibold mb-3"
      data-aos="fade-up"
    >
      Personal Project
    </h3>
    <hr
      class="h-0.5 w-full bg-gray-950 border border-dashed"
      data-aos="fade-up"
    />
    {#each personalproject as personalproject}
      {#if !personalproject.title}
        <section
          class="h-fit w-full flex flex-col items-center justify-center mb-12 mt-3"
        >
          <img
            src="/static/img/overthinking-2.png?url"
            width={400}
            class="text-gray-950 font-semibold"
            alt="Hmm..."
            data-aos="fade-up"
          />
          <br />
          <h4
            class="text-gray-500 text-base md:text-xl text-center cursor-default font-medium"
            data-aos="fade-up"
          >
            Oops, I don't have any project yet . . .
          </h4>
        </section>
      {:else if personalproject.title !== null}
        <section
          class="h-fit w-full flex flex-col items-center justify-center rounded-2xl border-2 border-gray-950 mb-12 mt-9"
          id={personalproject.id}
          data-aos="fade-up"
        >
          <div
            class="h-1/5 w-4/5 xl:max-w-[90%] xl:w-[90%] flex items-center justify-between mx-auto mb-2 mt-6"
          >
            <a
              href="/"
              class="text-3xl text-gray-950 hover:text-gray-700 font-semibold transition-all duration-300 ease-in-out hover:underline"
            >
              {personalproject.title}
            </a>
            <a
              href="/"
              class="text-base text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 ease-in-out hover:underline"
            >
            </a>
          </div>
          <hr class="h-0.5 w-4/5 xl:w-[90%] bg-gray-950 mx-auto" />
          <div
            class="h-3/5 w-4/5 xl:max-w-[90%] xl:w-[90%] flex flex-col items-start justify-between mx-auto my-5"
          >
            <a
              href="/"
              class="text-base text-justify text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 ease-in-out hover:underline"
            >
              {personalproject.description}
            </a>
          </div>
          <div
            class="h-1/5 max-w-[80%] w-4/5 xl:max-w-[90%] xl:w-[90%] flex overflow-x-auto mb-5 mt-2"
          >
            {#each personalproject.languages as languages}
              <a
                href="/"
                class="border border-slate-950 hover:bg-slate-950 text-slate-900 hover:text-slate-100 hover:font-semibold rounded-full mr-4 mb-3 py-3 px-8 font-medium text-base transition-all duration-300 ease-in-out"
              >
                {languages}
              </a>
            {/each}
          </div>
        </section>
      {:else}
        <section
          class="h-fit w-full flex flex-col items-center justify-center mb-12 mt-3"
        >
          <img
            src="/static/img/error-fetching.png?url"
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

  <!-- Volunteer -->
  <section class="h-fit w-3/4 mt-12 mx-auto">
    <h3
      class="text-3xl text-gray-950 text-center xl:text-left cursor-default font-semibold mb-3"
      data-aos="fade-up"
    >
      Volunteer
    </h3>
    <hr
      class="h-0.5 w-full bg-gray-950 border border-dashed"
      data-aos="fade-up"
    />
    {#each volunteers as volunteer}
      {#if !volunteer.title}
        <section
          class="h-fit w-full flex flex-col items-center justify-center mb-12 mt-3"
        >
          <img
            src="/static/img/overthinking-3.png?url"
            width={400}
            class="text-gray-950 font-semibold"
            alt="Hmm..."
            data-aos="fade-up"
          />
          <br />
          <h4
            class="text-gray-500 text-base md:text-xl text-center cursor-default font-medium"
            data-aos="fade-up"
          >
            Oops, I don't have any volunteer experience yet . . .
          </h4>
        </section>
      {:else if volunteer.title !== null}
        <section
          class="h-fit w-full flex flex-col items-center justify-center rounded-2xl border-2 border-gray-950 mb-12 mt-9"
          id={volunteer.id}
          data-aos="fade-up"
        >
          <div
            class="h-1/5 w-4/5 xl:max-w-[90%] xl:w-[90%] flex items-center justify-between mx-auto mb-2 mt-6"
          >
            <a
              href="/"
              class="text-3xl text-gray-950 hover:text-gray-700 font-semibold transition-all duration-300 ease-in-out hover:underline"
            >
              {volunteer.title}
            </a>
            <a
              href="/"
              class="text-base text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 ease-in-out hover:underline"
            >
              <em>{volunteer.date}</em>
            </a>
          </div>
          <hr class="h-0.5 w-[90%] bg-gray-950 mx-auto" />
          <div
            class="h-3/5 w-4/5 xl:max-w-[90%] xl:w-[90%] flex flex-col items-start justify-between mx-auto my-5"
          >
            <a
              href="/"
              class="text-base text-justify text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 ease-in-out hover:underline"
            >
              {volunteer.description}
            </a>
          </div>
          <div
            class="h-1/5 max-w-[80%] w-4/5 xl:max-w-[90%] xl:w-[90%] flex mb-5 mt-2"
          >
            {#each volunteer.skills as skills}
              <a
                href="/"
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
            src="/static/img/error-fetching.png?url"
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