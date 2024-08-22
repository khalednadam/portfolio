<script setup>
import { Icon } from "@iconify/vue";
import { urlFor } from "../plugins/sanity";

const props = defineProps({
  img: String,
  title: String,
  link: String,
  technologies: Array,
  description: String,
});
</script>
<template>
  <div v-if="title" class="min-h-full h-full">
    <v-card variant="outlined" class="">
      <v-card-text class="h-full">
        <div class="flex items-start gap-2 h-max">
          <v-avatar color="white" rounded="lg">
            <v-img
              v-if="img"
              :src="urlFor(img).url()"
              height="full"
              min-height="20"
            >
            </v-img>
          </v-avatar>
          <div>
            <h3>
              {{ title }}
            </h3>
            <p class="py-2">
              {{ description }}
            </p>
          </div>
        </div>
        <div class="h-max">
          <v-chip
            color="onbackground"
            variant="tonal"
            v-for="tech in technologies"
            class="m-1"
          >
            <Icon :icon="tech" width="17" />
          </v-chip>
        </div>
        <div class="mt-5">
          <a
            :href="link"
            target="_blank"
            class="w-full flex justify-center items-center"
          >
            <v-btn class="w-full" color="secondary" variant="flat">
              Visit
              <Icon icon="ph:arrow-square-out" width="20" class="mx-2" />
            </v-btn>
          </a>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
