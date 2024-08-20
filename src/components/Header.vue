<script setup>
import { useDisplay } from 'vuetify/lib/framework.mjs';
import ThemeSwitcher from './ThemeSwitcher.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const { mdAndUp } = useDisplay();
const drawer = ref(false);
</script>
<template>
  <v-app-bar color="background" elevation="0">
    <v-row>
      <v-col md="2" cols="6" class="flex items-center">
        <router-link to="/">
          <p class="mx-5 text-xl cursor-pointer">
            Khaled Nadam
          </p>
        </router-link>
      </v-col>
      <v-col v-if="mdAndUp" cols="8" class="flex justify-center items-center">
        <div class="flex items-center" v-if="mdAndUp">
          <v-btn :active="$route.fullPath === '/'" to="/" :color="$route.fullPath === '/' ? 'secondary' : ''">
            Home
          </v-btn>
          <v-btn :active="$route.fullPath === '/projects'" to="/projects"
            :color="$route.fullPath === '/projects' ? 'secondary' : ''">
            Projects
          </v-btn>
          <v-btn :active="$route.fullPath === '/experience'" to="/experience"
            :color="$route.fullPath === '/experience' ? 'secondary' : ''">
            Experience
          </v-btn>

          <v-btn :active="$route.fullPath === '/blog'" to="/blog" :color="$route.fullPath === '/blog' ? 'secondary' : ''">
            Blog
          </v-btn>

          <v-btn to="/links" :active="$route.fullPath === '/links'"
            :color="$route.fullPath === '/links' ? 'secondary' : ''">
            Links
          </v-btn>
        </div>
      </v-col>
      <v-col md="2" cols="6" class="flex justify-end items-center">
        <div class="mx-2 flex items-center">
          <ThemeSwitcher />
          <v-btn variant="text" v-if="!mdAndUp" icon @click="() => drawer = !drawer">
            <Icon icon="ph:list" width="25" />
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
  <v-navigation-drawer color="background" v-if="!mdAndUp" location="right" temporary v-model="drawer">
    <v-list class="flex flex-col space-y-3">
      <v-list-item color="secondary" class="mx-2" :active="$route.fullPath === '/'" to="/">
        Home
      </v-list-item>
      <v-list-item color="secondary" :active="$route.fullPath === '/projects'" to="/projects" class="mx-2">
        Projects
      </v-list-item>
      <v-list-item color="secondary" :active="$route.fullPath === '/experience'" to="/experience" class="mx-2">
        Experience
      </v-list-item>
      <v-list-item color="secondary" :active="$route.fullPath === '/blog'" to="/blog" class="mx-2">
        Blog
      </v-list-item>
      <v-list-item color="secondary" :active="$route.fullPath === '/links'" to="/links" class="mx-2">
        Links
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


