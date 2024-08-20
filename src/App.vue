<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <component :is="$route.meta.layout || 'div'">
      <RouterView :key="$route.fullPath" />
    </component>
  </v-app>
</template>
