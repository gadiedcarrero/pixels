<script setup>
import { defineAsyncComponent } from "vue";

const SidebarComponent = defineAsyncComponent(() =>
  import("../components/SidebarComponent.vue")
);
</script>

<template>
  <div class="app">
    <sidebar-component />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
}
.container{
    margin-left: 200px;
}
</style>
