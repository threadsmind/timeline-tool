<script setup lang="ts">
  import { editorStore } from '@s/drawerStore'
  import BaseDrawer from './BaseDrawer.vue'
</script>

<template>
  <BaseDrawer axis="vertical" :drawer-store="editorStore">
    <button @click="editorStore.toggleMenu">X</button>
    <div>Editor Form</div></BaseDrawer
  >
</template>

<style scoped></style>
