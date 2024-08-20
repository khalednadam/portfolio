<script setup>
import { ref } from 'vue';
import sanity, { urlFor } from "../plugins/sanity.js"

const experiences = ref([]);
sanity.fetch('*[_type == "experience"] | order(startDate desc)').then((experiencesData) => {
  experiences.value = experiencesData;
}).catch((err) => {
  console.log(err);
})
const fullDateOptions = { year: 'numeric', month: 'long' };



</script>
<template>
  <div>
    <h2 class="mb-5">
      Experience
    </h2>
    <v-row v-for="work in experiences">
      <v-col cols="12" md="6" class="mx-auto">
        <v-card variant="outlined">
          <v-card-text>
            <div class="flex items-start gap-2">
              <v-img :src="urlFor(work.img).url()" height="50">
              </v-img>
            </div>
            <div class="mt-2">
              <h3>
                {{ work.title }}
              </h3>
              <p>
                {{ work.description }}
              </p>
            </div>
            <div class="">
              {{ new Date(work.startDate).toLocaleString("en-GB", fullDateOptions) }}
              -
              {{ work.finishDate ? new Date(work.finishDate).toLocaleString("en-GB", fullDateOptions) : "Present" }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>



