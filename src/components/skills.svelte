<script>
  import { skills } from "../data/skills.json";
</script>

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