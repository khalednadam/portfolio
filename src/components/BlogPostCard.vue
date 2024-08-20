<script setup>
import { urlFor } from '../plugins/sanity';


const props = defineProps({
  title: String,
  id: String,
  tags: Array,
  cover: String,
  date: String
})

</script>
<template>
  <div>
    <v-card variant="outlined">
      <v-img :src="urlFor(cover).url()" height="100" cover>
      </v-img>
      <v-card-title>
        <p class="max-w-full truncate">
          {{ title }}
        </p>
      </v-card-title>
      <v-card-text>
        <div class="mb-2">
          {{ new Date(date).toLocaleString("en-GB", { year: 'numeric', month: 'short', day: '2-digit' }) }}
        </div>
        <template v-for="tag in tags" :key="tag">
          <v-chip class="mx-1">
            {{ tag }}
          </v-chip>
        </template>
        <div class="w-full flex justify-end">
          <v-btn :to="`/blog/${id}`" variant="flat" color="secondary">
            Read
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

