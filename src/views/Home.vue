<script setup>
import { Icon } from "@iconify/vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { mdAndUp } = useDisplay();

const skills = [
  {
    icon: "logos:javascript",
    name: "JavaScript",
  },
  {
    icon: "logos:typescript-icon",
    name: "TypeScript",
  },
  {
    icon: "logos:vue",
    name: "Vue",
  },
  {
    icon: "logos:react",
    name: "React",
  },
  {
    icon: "logos:nuxt-icon",
    name: "Nuxt",
  },
  {
    icon: "logos:nodejs-icon",
    name: "Nodejs",
  },
  {
    name: "Express.js",
  },
  {
    icon: "logos:mongodb-icon",
    name: "MongoDB",
  },
  {
    name: "C",
  },
  {
    name: "C++",
  },
  {
    icon: "logos:java",
    name: "Java",
  },
  {
    icon: "logos:html-5",
    name: "HTML5",
  },
  {
    icon: "logos:css-3",
    name: "CSS3",
  },
  {
    icon: "logos:tailwindcss-icon",
    name: "TailwindCSS",
  },
  {
    name: "C#",
  },
  {
    icon: "logos:pinia",
    name: "Pinia",
  },
  {
    icon: "logos:redux",
    name: "Redux",
  },
  {
    icon: "logos:react",
    name: "React Native",
  },
  {
    icon: "logos:react",
    name: "React Native",
  },
  {
    name: "English",
  },
  {
    name: "Arabic",
  },
  {
    name: "Turkish",
  },
];
</script>
<template>
  <div>
    <div class="mt-20 md:mt-20 mx-1">
      <v-row class="flex justify-center items-center">
        <v-col
          cols="7"
          md="4"
          v-if="!mdAndUp"
          class="bg-secondary flex m-0 !p-0 justify-center items-center rounded-t-full"
        >
          <v-img
            src="/khaled.png"
            max-height="500"
            class="self-end ml-5 justify-self-center filter scale-x-100 !m-0 !p-0 grayscale"
          >
          </v-img>
        </v-col>
        <v-col cols="12" md="8">
          <h1 class="md:text-6xl font-semibold">
            Hi, I am
            <span class="font-light text-secondary">Khaled Nadam</span>,
            software engineer
          </h1>
          <p class="mt-5 md:max-w-[70%]">
            A software engineer dedicated to building innovative web solutions.
            With a passion for technology and a drive for excellence.
          </p>
          <div class="mt-5 flex gap-5 items-center justify-start">
            <v-btn
              to="/experience"
              color="secondary"
              size="x-large"
              variant="flat"
            >
              Experience
            </v-btn>
            <a
              href="https://drive.google.com/uc?export=download&id=1zJxzCBVbQV3MYrdXeg_Q2YH2kV_Y7VeQ"
              class="download-button"
              download
            >
              <v-btn color="secondary" size="x-large" variant="text">
                Resume
                <!-- Blog -->
              </v-btn>
            </a>
          </div>
          <div class="mt-10 flex justify-between items-center w-1/2 gap-2">
            <a href="https://x.com/kn_swe" target="_blank">
              <icon icon="ph:x-logo-fill" width="30" />
            </a>
            <a href="https://instagram.com/software_journey1" target="_blank">
              <icon icon="ph:instagram-logo-fill" width="30" />
            </a>
            <a
              href="https://www.linkedin.com/in/khaled-nadam-2b7693150/"
              target="_blank"
            >
              <icon icon="ph:linkedin-logo-fill" width="30" />
            </a>
            <a href="https://github.com/khalednadam" target="_blank">
              <icon icon="ph:github-logo-fill" width="30" />
            </a>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="4"
          v-if="mdAndUp"
          class="bg-secondary flex m-0 !p-0 justify-center items-center rounded-t-full"
        >
          <v-img
            src="/khaled.png"
            max-height="390"
            class="self-end mr-8 -scale-x-100 justify-self-center filter !m-0 !p-0 grayscale"
          >
          </v-img>
        </v-col>
      </v-row>
    </div>
    <!-- <div class="mt-20"> -->
    <!--   <v-row> -->
    <!--     <v-col cols="12"> -->
    <!--       <div class="mt-2 flex justify-between items-center gap-2"> -->
    <!--         <a href="https://x.com/kn_swe" target="_blank"> -->
    <!--           <icon icon="ph:x-logo-fill" width="20" /> -->
    <!--         </a> -->
    <!--         <a href="https://instagram.com/software_journey1" target="_blank"> -->
    <!--           <icon icon="ph:instagram-logo-fill" width="20" /> -->
    <!--         </a> -->
    <!--         <a href="https://www.linkedin.com/in/khaled-nadam-2b7693150/" target="_blank"> -->
    <!--           <icon icon="ph:linkedin-logo-fill" width="20" /> -->
    <!--         </a> -->
    <!--         <a href="https://github.com/khalednadam" target="_blank"> -->
    <!--           <icon icon="ph:github-logo-fill" width="20" /> -->
    <!--         </a> -->
    <!--       </div> -->
    <!--     </v-col> -->
    <!--   </v-row> -->
    <!-- </div> -->
    <div class="mt-20">
      <v-row>
        <v-col cols="12" md="8">
          <h2>About Me</h2>
          <p>
            I am Khaled Nadam, a software engineer based in Istanbul, Turkey. I
            studied software engineering at Altınbaş University and I started
            learning and developing small projects on my own to improve myself.
            I am passionate about creating web applications and I learn fast.
          </p>
        </v-col>
      </v-row>
    </div>
    <div class="mt-20">
      <v-row>
        <v-col cols="12" md="8">
          <h2>Skills</h2>
          <template v-for="skill in skills">
            <v-chip color="" size="large" class="ml-2 my-2">
              <div class="flex items-center gap-2">
                <Icon v-if="skill.icon" :icon="skill.icon" width="20" />
                <p>
                  {{ skill.name }}
                </p>
              </div>
            </v-chip>
          </template>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
