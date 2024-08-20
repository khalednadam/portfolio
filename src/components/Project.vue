<script setup>
import { Icon } from '@iconify/vue';
import { urlFor } from '../plugins/sanity';

const props = defineProps({
  img: String,
  title: String,
  link: String,
  technologies: Array,
  description: String
})

</script>
<template>
  <div v-if="title" class="min-h-full h-full">
    <v-card variant="outlined" class="min-h-full h-full">
      <v-card-text>
        <div class="flex items-start gap-2">
          <v-avatar color="white" rounded="lg">
            <v-img v-if="img" :src="urlFor(img).url()" height="full" min-height="20">
            </v-img>
          </v-avatar>
          <div>
            <h3>
              {{ title }}
            </h3>
            <p>
              {{ description }}
            </p>
          </div>
        </div>
        <div class="">
          <v-chip color="onbackground" variant="tonal" v-for="tech in technologies" class="m-1">
            <Icon :icon="tech" width="17" />
          </v-chip>
        </div>
        <a :href="link" target="_blank">
          <v-btn class="w-full mt-2" color="secondary" variant="flat">
            Visit
            <Icon icon="ph:arrow-square-out" width="20" class="mx-2" />
          </v-btn>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>


