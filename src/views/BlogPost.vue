<script setup>
import { ref, onMounted } from "vue";
import sanity, { urlFor } from "../plugins/sanity.js";
import { useRoute } from "vue-router";
import { toHTML, uriLooksSafe } from "@portabletext/to-html";

const route = useRoute();
const post = ref(null);
async function fetchBlogPostById(blogPostId) {
  try {
    const query = `*[_type == "blogPost" && _id == $blogPostId][0]`;
    const params = { blogPostId };
    const result = await sanity.fetch(query, params);
    return result;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

onMounted(async () => {
  post.value = await fetchBlogPostById(route.params.postId);
});
</script>
<template>
  <div v-if="post">
    <h2>
      {{ post.title }}
    </h2>
    <v-img :src="urlFor(post.cover).url()" height="300"> </v-img>
    <p class="text-center">
      {{
        new Date(post.date).toLocaleString("en-GB", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })
      }}
    </p>
    <div class="mt-5 mb-20 md:text-lg text-lg">
      <p v-html="toHTML(post.content)"></p>
    </div>
  </div>
  <div v-else>
    <p>Loading</p>
  </div>
</template>
