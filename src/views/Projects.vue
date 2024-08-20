<script setup>
import { ref } from 'vue';
import sanity, { urlFor } from "../plugins/sanity.js"
import Project from '../components/Project.vue';

const projects = ref([]);
sanity.fetch('*[_type == "project"] | order(order asc)').then((projectsData) => {
  projects.value = projectsData;
}).catch((err) => {
  console.log(err);
})


</script>
<template>
  <div>
    <h2 class="mb-5">
      Projects
    </h2>
    <v-row class="h-full ">
      <v-col v-for="project in projects" cols="12" md="4" class="min-h-full ">
        <Project :img="project?.img" :title="project.title" :link="project.link" :technologies="project.technologies"
          :description="project.description" />
      </v-col>
    </v-row>
  </div>
</template>



