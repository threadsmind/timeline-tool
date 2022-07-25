<script setup lang="ts">
  import { menuStore } from '@s/drawerStore'
  import { tabStore } from '@s/tabStore'
  import BaseDrawer from './BaseDrawer.vue'

  const setCurrentTab = (newTab: string) => {
    tabStore.setCurrentTab(newTab)
    menuStore.toggleMenu()
  }
</script>

<template>
  <BaseDrawer axis="horizontal" :drawer-store="menuStore">
    <nav>
      <ul>
        <li v-for="tab in tabStore.tabs" :key="tab.id">
          <button
            :aria-label="`Open ${tab.tabName}`"
            @click="setCurrentTab(tab.id)"
          >
            {{ tab.tabName }}
          </button>
        </li>
      </ul>
    </nav>
  </BaseDrawer>
</template>

<style scoped>
  ul {
    padding: 0;
    list-style: none;
    margin: 0;
  }
  li {
    margin-top: var(--spacing);
  }
  button {
    width: 100%;
    min-height: 3rem;
  }
</style>
