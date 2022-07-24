<script setup lang="ts">
  import { tabMap, tabStore } from '@s/tabStore'
  import AppBar from './AppBar.vue'
  import AppMenu from './AppMenu.vue'
</script>

<template>
  <div class="layout full-height">
    <AppMenu />
    <AppBar />
    <div class="view full-height">
      <component
        :is="tabMap[tabStore.currentTab.id]"
        v-if="tabStore.currentTab"
      />
      <div v-else>Something went wrong =(</div>
    </div>
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
