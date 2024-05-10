<template>
    <nav class="game-nav">
        <router-link :to="{ name: 'games' }">Home</router-link>
        <router-link :to="{ name: 'development' }">Development</router-link>
        <router-link :to="{ name: 'work' }">Work with Us</router-link>
        <router-link :to="{ name: 'meet' }">Meet the team</router-link>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.game-nav{
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: #14141416;
    border-bottom: 1px solid #ccc;
    height: 100vh;
    width: 200px;
    a{
        text-decoration: none;
        color: #333;
        font-weight: bold;
    }
    a.active{
        color: #f00;
    }
}

</style>