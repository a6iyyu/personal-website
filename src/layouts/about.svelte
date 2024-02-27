<script>
  import { skills } from "../data/skills.json";
  import { socialmedias } from "../data/socialmedias.json";
  import { experiences } from "../data/experiences.json";
</script>

<main class="h-fit w-full mb-28 mt-10 xl:mt-14">
  <section class="h-fit w-3/4 mx-auto">
    <h3
      class="text-3xl text-gray-950 cursor-default font-semibold mb-3 text-center xl:text-left"
      data-aos="fade-right"
    >
      About Me
    </h3>
    <hr
      class="h-0.5 w-full bg-gray-950 border border-dashed"
      data-aos="fade-right"
    />
    <h5
      class="text-lg text-gray-900 cursor-default font-medium leading-relaxed text-justify tracking-wide mt-6"
      data-aos="fade-right"
    >
      Hi, folks!&nbsp;&#128075;
      <br />
      <br />
      I'm <strong>Rafi Abiyyu Airlangga</strong> and you can call me
      <strong>Rafi</strong>. A student who is studying at
      <strong>State Polytechnic of Malang</strong> majoring in
      <em>Information Technology</em> and currently studying to become a
      <em>Software Engineer</em>. I have high enthusiasm in learning new things
      and always ready to face challenges. However, I realize that sometimes
      <strong>I need an extra push</strong> to get things started. My experience
      in technology is still nonexistent, but every day I do self-taught
      learning in order to progress. Currently, I'm learning <u>Astro</u>,
      <u>React</u>,
      <u>Svelte</u>, <u>TypeScript</u>, and
      <u>Vue</u>.
    </h5>
  </section>
  <section class="h-fit w-3/4 mt-12 mx-auto">
    <h3
      class="text-3xl text-gray-950 text-center xl:text-left cursor-default font-semibold mb-3"
      data-aos="fade-up"
    >
      Skills
    </h3>
    <hr
      class="h-0.5 w-full bg-gray-950 border border-dashed"
      data-aos="fade-up"
    />
    <div
      class="h-fit w-full block xl:flex xl:items-center xl:justify-between mt-6"
    >
      {#each skills as skill}
        <div
          class="h-fit xl:max-h-96 xl:h-96 w-full xl:w-[30%] rounded-xl mb-10 pb-7 bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-950"
          id={skill.id}
          data-aos={skill["data-aos"]}
        >
          <h4
            class="text-slate-100 text-2xl cursor-default font-semibold text-center mb-2 pt-5"
          >
            {skill.title}
          </h4>
          <hr class="h-0.5 w-[85%] mx-auto" />
          {#each skill.description as description}
            <li
              class="h-fit w-[85%] block cursor-default font-medium text-justify mx-auto my-4 text-slate-100"
            >
              {description}
            </li>
          {/each}
        </div>
      {/each}
    </div>
  </section>
  <section class="h-fit w-3/4 mt-4 mx-auto">
    <h3
      class="text-3xl text-gray-950 text-center xl:text-left cursor-default font-semibold mb-3"
      data-aos="fade-up"
    >
      Experiences
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
      {:else if experience.title !== ""}
        <section
          class="h-fit w-full flex flex-col items-center justify-center rounded-2xl border-2 border-gray-950 mb-12 mt-9"
          id={experience.id}
          data-aos="fade-up"
        >
          <div
            class="h-1/5 w-[90%] flex items-center justify-between mx-auto my-6"
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
            class="h-4/5 w-[90%] flex flex-col items-start justify-between mx-auto mb-10 mt-5"
          >
            <a
              href="/"
              class="text-base text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 ease-in-out hover:underline"
            >
              {experience.description}
            </a>
            <br /><br />
            <a
              href="/"
              class="text-base text-gray-900 hover:text-gray-700 font-medium transition-all duration-300 ease-in-out hover:underline"
            >
              {experience.skills}
            </a>
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
            alt="Hmm..."
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
  <section class="h-fit w-3/4 mt-4 mx-auto">
    <h3
      class="text-3xl text-gray-950 text-center xl:text-left cursor-default font-semibold mb-3"
      data-aos="fade-up"
    >
      You Can Find Me On
    </h3>
    <hr
      class="h-0.5 w-full bg-gray-950 border border-dashed"
      data-aos="fade-up"
    />
    <div
      class="h-[27rem] xl:h-20 w-full block xl:flex xl:items-center xl:justify-between mt-4 mb-10"
    >
      {#each socialmedias as socialmedia}
        <a
          id={socialmedia.id}
          href={socialmedia.link}
          class="h-1/5 xl:h-4/5 w-full xl:w-[22.5%] flex items-center justify-center border-[1px] mt-6 xl:mt-0.5 border-slate-900 hover:bg-slate-900 text-slate-900 hover:text-slate-100 rounded-xl"
          style="transition: all 0.3s ease-in-out"
          data-aos={socialmedia["data-aos"]}
        >
          <img
            src={socialmedia.img}
            alt={socialmedia.alt}
            width={socialmedia.width}
          />
          &nbsp;&nbsp;
          <h5 class="font-semibold">{socialmedia.alt}</h5>
        </a>
      {/each}
    </div>
  </section>
</main>