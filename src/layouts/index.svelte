<script>
  import HeaderIndex from "../components/header-index.svelte";
  import Skills from "../components/skills.svelte";
  import WorkExperience from "../components/work-experience.svelte";
  import PersonalProject from "../components/personal-project.svelte";
  import OrganizationVolunteer from "../components/organization-volunteer.svelte";
  import SocialMedia from "../components/social-media.svelte";
</script>

<HeaderIndex />
<main class="h-fit w-full flex flex-col mb-20 mt-8">
  <!-- Describe Myself -->
  <div class="h-8 w-full" id="about-section"></div>
  <section class="h-fit w-3/4 mb-4 mx-auto">
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
      I'm <strong>Rafi Abiyyu Airlangga</strong>, and you can call me
      <strong>Rafi</strong>. A student majoring in
      <em>Information Technology</em> at the
      <strong>State Polytechnic of Malang</strong>
      and currently studying to become a
      <em>Software Engineer</em>. I have a high enthusiasm for learning new
      things and am always ready to face challenges. However, I realize that
      sometimes
      <strong>I need an extra push</strong> to get things started. My experience
      in technology is still nonexistent, but every day I do self-taught
      learning to progress. Currently, I'm learning <u>Astro</u>,
      <u>React</u>,
      <u>Svelte</u>, <u>TypeScript</u>, and
      <u>Vue</u>.
    </h5>
    <br />
    <br />
    <a
      href="/src/data/resume-cv.pdf?url"
      data-aos="fade-right"
      class="h-fit w-full md:w-fit bg-slate-950 hover:bg-slate-800 text-slate-50 font-semibold px-9 py-6 rounded-xl mx-auto md:mx-0"
      style="transition: all 0.3s ease-in-out"
      download
    >
      DOWNLOAD RESUME
    </a>
  </section>

  <!-- Skills -->
  <Skills />

  <!-- Work Experience -->
  <WorkExperience />

  <!-- Personal Project -->
  <PersonalProject />

  <!-- Organization & Volunteer -->
  <OrganizationVolunteer />

  <!-- My Social Medias -->
  <SocialMedia />
</main>