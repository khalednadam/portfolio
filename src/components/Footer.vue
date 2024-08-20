<script setup>
import { Icon } from '@iconify/vue';


</script>

<template>
  <div class="flex w-full justify-end items-end">
    <v-footer class="place-items-end h-max flex justify-self-end " color="primary">
      <div class="flex flex-col justify-center w-full items-center text-center">
        <strong class="text-center">Get connected with me on social networks!</strong>
        <div class="mt-2 flex gap-2">
          <a href="https://x.com/kn_swe" target="_blank">
            <Icon icon="ph:x-logo" width="20" />
          </a>
          <a href="https://instagram.com/software_journey1" target="_blank">
            <Icon icon="ph:instagram-logo" width="20" />
          </a>
          <a href="https://www.linkedin.com/in/khaled-nadam-2b7693150/" target="_blank">
            <Icon icon="ph:linkedin-logo" width="20" />
          </a>
          <a href="https://github.com/khalednadam" target="_blank">
            <Icon icon="ph:github-logo" width="20" />
          </a>
        </div>
        <div>
          © Khaled Nadam. All rights reserved.
        </div>
      </div>
    </v-footer>
  </div>
</template>

