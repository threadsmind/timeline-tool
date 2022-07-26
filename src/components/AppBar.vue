<script setup lang="ts">
  import { editorStore, menuStore } from '@s/drawerStore'
  import { tabStore } from '@s/tabStore'
  import { ref, watch } from 'vue'

  const toggleMenu = () => {
    menuStore.toggleMenu()
    editorStore.isOpen && editorStore.toggleMenu()
  }
  const menuLabel = () => (menuStore.isOpen ? 'close menu' : 'open menu')
  const menuLabelRef = ref<string>(menuLabel())

  watch(
    () => menuStore.isOpen,
    () => {
      menuLabelRef.value = menuLabel()
    }
  )
</script>

<template>
  <div class="appbar">
    <button class="full-height" :aria-label="menuLabelRef" @click="toggleMenu">
      <span :class="menuStore.isOpen ? 'menu-icon-open' : ''">
        <img src="@a/material_menu.svg" :alt="menuLabelRef" />
      </span>
    </button>
    <div class="appbar-title full-height contain-text one-line-text">
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
  .appbar-title {
    padding-right: 1rem;
  }
  .menu-icon-open {
    transform: rotate(90deg);
  }
  button {
    display: block;
    width: var(--height-appBar);
  }
  h1 {
    line-height: 0.2rem;
  }
  span {
    display: block;
    transition: transform 0.2s ease-in-out;
  }
</style>
