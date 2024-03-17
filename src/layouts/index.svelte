<script>
  import { onMount } from "svelte";
  import Header from "../components/header.svelte";
  import Skills from "../components/skills.svelte";
  import SocialMedia from "../components/social-media.svelte";

  const text = [
    "Front-end Developer",
    "Informatics Student",
    "Looking For A Job",
  ];
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
<main class="h-fit w-full flex flex-col mb-20">
  <section
    class="h-fit w-full flex justify-end bg-center bg-cover bg-no-repeat"
    style="background-image: url(../../desk.jpg)"
  >
    <div
      class="h-[35rem] w-full xl:w-1/2 flex items-center flex-col xl:items-start justify-center mb-10"
    >
      <h2
        class="text-5xl text-gray-50 cursor-default font-semibold leading-relaxed"
        data-aos="fade-up"
      >
        Hello, I'm Rafi
      </h2>
      <h4
        class="text-3xl text-gray-50 cursor-default font-semibold"
        data-aos="fade-up"
      >
        {currentIndex.slice(0, i)}<span>|</span>
      </h4>
    </div>
  </section>

  <!-- Describe Myself -->
  <section class="h-fit w-3/4 mb-8 mt-16 mx-auto">
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
      style="box-shadow: 0.5rem 0.5rem 1.5rem #242424; transition: all 0.3s ease-in-out"
      download
    >
      DOWNLOAD RESUME
    </a>
  </section>

  <!-- Skills -->
  <Skills />

  <!-- My Social Medias -->
  <SocialMedia />
</main>