<script setup>
import { ref } from 'vue';
import sanity, { urlFor } from "../plugins/sanity.js"
const links = ref([]);
sanity.fetch('*[_type == "link"] | order(order asc)').then((linksData) => {
  links.value = linksData;
}).catch((err) => {
  console.log(err);
})
</script>
<template>
  <template v-for="link in links" :key="link._id">
    <a :href="link.link" class="my-5">
      <v-card variant="outlined" class="my-5">
        <v-row>
          <v-col cols="4">
            <v-img cover class="h-full" width="200" :src="urlFor(link?.img).url()">
            </v-img>
          </v-col>
          <v-col cols="8" class="flex flex-col justify-center ">
            <v-card-title>
              <h2 class="font-bold text-2xl">
                {{ link.title }}
              </h2>
            </v-card-title>
            <v-card-text>
              <p class="opacity-50 ">
                {{ link.description }}
              </p>
              <p v-if="link.discount > 0" class="text-sm">
                Discount: {{ link.discount }}%
              </p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </a>
  </template>
</template>
