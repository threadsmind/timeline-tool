<script setup lang="ts">
  import type { MenuState } from '@s/drawerStore'

  type DrawerAxis = 'horizontal' | 'vertical'

  defineProps<{
    axis: DrawerAxis
    drawerStore: MenuState
  }>()
</script>

<template>
  <Transition :name="axis">
    <div v-if="drawerStore.isOpen" :class="`${axis}-drawer`" class="drawer">
      <slot></slot>
    </div>
  </Transition>
  <Transition name="background">
    <div
      v-if="drawerStore.isOpen"
      class="drawer-background"
      @click="drawerStore.toggleMenu"
    ></div>
  </Transition>
</template>

<style scoped>
  .drawer {
    position: absolute;
    background-color: var(--palette-secondary);
  }
  .drawer-background {
    position: absolute;
    background-color: var(--palette-shadow);
    width: 100vw;
    height: 100vh;
    opacity: 0.4;
    z-index: var(--z-index-drawer-bg);
  }

  .horizontal-drawer {
    height: 100%;
    width: 75%;
    max-width: 40rem;
    padding-top: var(--height-appBar);
    box-shadow: 5px 0 5px var(--palette-shadow);
    z-index: var(--z-index-menu);
  }
  .vertical-drawer {
    width: 100%;
    margin-top: var(--height-appBar);
    height: calc(100% - var(--height-appBar));
    z-index: var(--z-index-editor);
  }

  .drawer-background-enter-active,
  .horizontal-enter-active {
    transition: transform 0.2s ease-in-out;
  }
  .drawer-background-leave-active,
  .horizontal-leave-active {
    transition: transform 0.15s ease-in;
  }
  .vertical-enter-active {
    transition: transform 0.3s ease-in-out;
  }
  .vertical-leave-active {
    transition: transform 0.3s ease;
  }
  .horizontal-enter-from,
  .horizontal-leave-to {
    transform: translateX(-80vw);
  }
  .vertical-enter-from,
  .vertical-leave-to {
    transform: translateY(200vh);
  }
  .drawer-background-enter-from,
  .drawer-background-leave-to {
    opacity: 0;
  }
</style>
