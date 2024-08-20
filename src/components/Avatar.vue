<script setup>
import { ref } from 'vue';
import sanity, { urlFor } from '../plugins/sanity';
const info = ref()
sanity.fetch('*[_type == "info"]').then((linksData) => {
  info.value = linksData[0];
}).catch((err) => {
  console.log(err);
})
</script>
<template>
  <div class="flex w-full flex-col justify-center items-center gap-y-5" v-if="info">
    <div :class="`w-full h-40 rounded-lg `" :style="{ backgroundColor: info.cover }">
    </div>
    <div class="flex flex-col items-center justify-center -mt-20">
      <v-avatar size="100" rounded="lg">
        <v-img v-if="info" rounded :src="urlFor(info.image).url()">
        </v-img>
      </v-avatar>
      <h1 class="font-bold text-3xl mt-2 text-center">
        {{ info?.name }}
      </h1>
      <p class="text-center">
        {{ info.bio[0].children[0].text }}
      </p>
    </div>
  </div>
</template>
