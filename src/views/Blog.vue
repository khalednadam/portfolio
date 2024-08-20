<script setup>
import { ref } from 'vue';
import sanity, { urlFor } from "../plugins/sanity.js"
import BlogPostCard from '../components/BlogPostCard.vue';

const posts = ref([]);
sanity.fetch('*[_type == "blogPost"] | order(order asc)').then((blogPosts) => {
  posts.value = blogPosts;
}).catch((err) => {
  console.log(err);
})

</script>
<template>
  <div>
    <h2 class="mb-5">
      Blog
    </h2>
    <v-row>
      <v-col cols="12" md="3" v-for="post in posts">
        <BlogPostCard :date="post.date" :cover="post.cover" :id="post._id" :title="post.title" :tags="post.tags" />
      </v-col>
    </v-row>
  </div>
</template>


