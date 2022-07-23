<script setup lang="ts">
  import AppBar from './AppBar.vue'
  import AppMenu from './AppMenu.vue'
</script>

<template>
  <div class="layout full-height">
    <AppMenu />
    <AppBar />
    <div class="view full-height">mainView</div>
  </div>
</template>

<style scoped>
  .layout {
    display: flex;
    flex-direction: column;
  }
  .view {
    max-height: 100%;
    max-width: 100%;
    overflow-y: auto;
  }
</style>
