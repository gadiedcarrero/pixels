<template>
  <div class="island-main-details">
    <h1>The Last Seed</h1>
    <span>+13</span>
    <span>2024</span>
    <span>Adventure</span>
    <rating-component />
    <p>
      The Last Seed is a 3D action-adventure game that takes place in a
      post-apocalyptic world. The game is set in a world where the last
      remaining humans are struggling to survive. The player takes on the role
      of a young adventurer who must explore the world, fight off dangerous
      creatures, and uncover the secrets of the past. The game features a large
      open world to explore, a variety of weapons and abilities to master, and a
      rich story to uncover.
    </p>
    <div class="island-code">
      <span>6650-4993-5676</span>
      <button>Copy</button>
    </div>
  </div>
  <div class="island-scroll-details">
    <gallery-component />
    <player-reviews-component/>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

const RatingComponent = defineAsyncComponent(() =>
  import("./RatingComponent.vue")
);

const GalleryComponent = defineAsyncComponent(() =>
  import("./GalleryComponent.vue")
);

const PlayerReviewsComponent = defineAsyncComponent(() =>
  import("./PlayerReviewsComponent.vue")
);

const props = defineProps({
  id: String,
});
</script>

<style lang="scss" scoped></style>
