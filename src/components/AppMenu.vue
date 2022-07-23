<script setup lang="ts"></script>

<template>
  <div class="menu full-height">menu</div>
</template>

<style scoped>
  .menu {
    display: none;
    position: absolute;
    width: 75%;
    box-shadow: 5px 0 5px #000;
    left: -80vw;
    transition: left 0.5s ease-out;
  }
  .menu-open {
    left: 0;
    display: initial;
  }
</style>
