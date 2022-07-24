<script setup lang="ts">
  import { editorStore, menuStore } from '@s/drawerStore'
  import { tabStore } from '@s/tabStore'

  const toggleMenu = () => {
    menuStore.toggleMenu()
    editorStore.isOpen && editorStore.toggleMenu()
  }
</script>

<template>
  <div class="appbar">
    <button class="full-height" @click="toggleMenu">menu</button>
    <div class="apptitle full-height">
      <h1>{{ tabStore.currentTab.title }}</h1>
    </div>
  </div>
</template>

<style scoped>
  .appbar {
    height: var(--height-appBar);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--palette-accent);
    box-shadow: 0 -2px 2px 4px var(--palette-shadow);
    background-color: var(--palette-secondary);
    z-index: 100;
  }
  .apptitle {
    padding-right: 1rem;
  }
  button {
    display: block;
  }
  h1 {
    line-height: 0.2rem;
  }
</style>
