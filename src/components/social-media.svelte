<script>
  import { socialmedias } from "../data/social-media.json";
</script>

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