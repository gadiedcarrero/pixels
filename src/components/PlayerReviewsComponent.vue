<template>
        <h2>Reviews</h2>
    <div class="island-reviews">
      <div class="island-review">
        <h3>John Doe</h3>
        <RatingComponent />
        <p>
          The Last Seed is a fantastic game that offers a great mix of action,
          adventure, and exploration. The game world is beautifully crafted, and
          the story is engaging and immersive. The combat is fast-paced and
          challenging, and the game offers a wide variety of weapons and
          abilities to master. Overall, I highly recommend The Last Seed to any
          fan of action-adventure games.
        </p>
      </div>
      <div class="island-review">
        <h3>Jane Doe</h3>
        <RatingComponent />
        <p>
          The Last Seed is a fantastic game that offers a great mix of action,
          adventure, and exploration.
        </p>
      </div>
    </div>
</template>

<script setup>

import { ref, defineAsyncComponent } from "vue";

const RatingComponent = defineAsyncComponent(() =>
  import("./RatingComponent.vue")
);

</script>

<style lang="scss" scoped>

</style>