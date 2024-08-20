<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';


</script>
<template>
  <v-main>
    <Header />
    <v-container class="">
      <slot>
      </slot>
    </v-container>
  </v-main>
  <Footer class="!h-max bottom-0 w-full " />
</template>


