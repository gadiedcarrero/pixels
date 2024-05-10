<template>
  <div class="home-container">
    <game-details-component :id="id" />
    <carousel-component />
  </div>
</template>

<script setup>
import { useRoute} from "vue-router";
import { ref, defineAsyncComponent } from "vue";

const GameDetailsComponent = defineAsyncComponent(() =>
  import("../components/GameDetailsComponent.vue")
);

const CarouselComponent = defineAsyncComponent(() =>
  import("../components/CarouselComponent.vue")
);

const props = defineProps({
  id: String
});

const route = useRoute();
const id = route.params.id;

</script>

<style lang="scss" scoped>

</style>
