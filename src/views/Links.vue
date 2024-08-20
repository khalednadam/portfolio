<script setup>
import Avatar from '../components/Avatar.vue';
import LinkCard from '../components/LinkCard.vue';
import Socials from '../components/Socials.vue';


</script>
<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" class="flex mx-auto">
        <Avatar class="mx-auto" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" class="flex mx-auto">
        <Socials class="mx-auto" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" class="mx-auto">
        <LinkCard />
      </v-col>
    </v-row>
  </div>
</template>

