<script>
  import { onMount } from "svelte";
  import Header from "../components/header.svelte";
  import WorkExperience from "../components/work-experience.svelte";
  import Project from "../components/project.svelte";
  import OrganizationVolunteer from "../components/organization-volunteer.svelte";

  const text = ["Project", "Work Experience", "Organization", "Volunteer"];
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
        currentIndex = text[currentIndex === text[0] ? 1 : [currentIndex === text[1] ? 2 : [currentIndex === text[2] ? 3 : [currentIndex === text[3] ? 0 : 0]]]];
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
    style="background-image: url(../../project.jpg)"
  >
    <div
      class="h-3/5 w-3/4 flex items-start flex-col xl:items-start justify-center xl:justify-end mb-10 mx-auto"
    >
      <h2
        class="text-4xl lg:text-5xl text-white cursor-default font-semibold"
        style="line-height: 1.375"
        data-aos="fade-up"
      >
        Let's Build Something!
      </h2>
      <h4
        class="text-2xl lg:text-3xl text-white cursor-default font-semibold"
        data-aos="fade-up"
      >
        {currentIndex.slice(0, i)}<span>|</span>
      </h4>
    </div>
  </section>

  <!-- Project -->
  <Project />

  <!-- Work Experience -->
  <WorkExperience />

  <!-- Organization & Volunteer -->
  <OrganizationVolunteer />
</main>