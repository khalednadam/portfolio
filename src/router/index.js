import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        layout: MainLayout,
      },
      component: () => import('../views/Home.vue'),
    },
    {
      path: "/projects",
      name: "Projects",
      meta: {
        layout: MainLayout,
        title: "Khaled | Projects"
      },
      component: () => import('../views/Projects.vue'),
    },
    {
      path: "/experience",
      name: "Experience",
      meta: {
        layout: MainLayout,
        title: "Khaled | Experience"
      },
      component: () => import('../views/Experience.vue'),
    },
    {
      path: "/blog",
      name: "Blog",
      meta: {
        layout: MainLayout,
        title: "Khaled | Blog"
      },
      component: () => import('../views/Blog.vue'),
    },
    {
      path: "/links",
      name: "Links",
      meta: {
        layout: MainLayout,
        title: "Khaled | Links"
      },
      component: () => import("../views/Links.vue")
    },
    {
      path: "/blog/:postId",
      name: "Post",
      meta: {
        layout: MainLayout,
      },
      component: () => import("../views/BlogPost.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "ErrorView",
      component: () => import("../views/Error.vue"),
      meta: {
        auth: true
      }
    },
  ],
});

export default router;

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title}` : "Khaled Nadam | Software Engineer";
  next();
});
