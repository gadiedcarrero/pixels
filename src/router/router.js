import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
  },
  {
    path: "/games",
    name: "games",
    component: () => import("../pages/GamesPage.vue"),
  },
  {
    path: "/games/:id",
    name: "game-detail",
    props: true,
    component: () => import("../components/GameDetailsComponent.vue"),
  },
  {
    path: "/meet",
    name: "meet",
    component: () => import("../pages/MeetPage.vue"),
  },
  {
    path: "/work",
    name: "work",
    component: () => import("../pages/WorkPage.vue"),
  },
  {
    path: "/development",
    name: "development",
    component: () => import("../pages/DevelopmentPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
