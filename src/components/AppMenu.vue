<script setup lang="ts">
  import { menuStore } from '@s/menuStore'
  import { tabStore } from '@s/tabStore'

  const setCurrentTab = (newTab: string) => {
    tabStore.setCurrentTab(newTab)
    menuStore.toggleMenu()
  }
</script>

<template>
  <Transition name="drawer">
    <div v-if="menuStore.isOpen" class="drawer full-height">
      <ul>
        <li v-for="tab in tabStore.tabs" :key="tab.id">
          <button @click="setCurrentTab(tab.id)">
            {{ tab.tabName }}
          </button>
        </li>
      </ul>
    </div>
  </Transition>
  <Transition name="background">
    <div
      v-if="menuStore.isOpen"
      class="drawer-background"
      @click="menuStore.toggleMenu"
    ></div>
  </Transition>
</template>

<style scoped>
  .drawer {
    position: absolute;
    padding-top: var(--height-appBar);
    width: 75%;
    box-shadow: 5px 0 5px var(--palette-shadow);
    z-index: var(--z-index-menu);
  }
  .drawer-background {
    position: absolute;
    background-color: var(--palette-shadow);
    width: 100vw;
    height: 100vh;
    opacity: 0.4;
    z-index: calc(var(--z-index-menu) - 10);
  }

  .drawer-background-enter-active,
  .drawer-enter-active {
    transition: transform 0.2s ease-in-out;
  }
  .drawer-background-leave-active,
  .drawer-leave-active {
    transition: transform 0.15s ease-in;
  }
  .drawer-enter-from,
  .drawer-leave-to {
    transform: translateX(-80vw);
  }
  .drawer-background-enter-from,
  .drawer-background-leave-to {
    opacity: 0;
  }

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
