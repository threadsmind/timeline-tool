<script setup lang="ts">
  import { editorStore } from '@s/drawerStore'
</script>

<template>
  <div class="editor-list-item">
    <div class="item-title"><slot></slot></div>
    <button class="full-height" @click="editorStore.toggleMenu">edit</button>
    <button class="full-height delete">del</button>
  </div>
</template>

<style scoped>
  .editor-list-item {
    display: flex;
    align-items: center;
    height: var(--height-appBar);
    background-color: var(--palette-shadow);
  }
  .editor-list-item:hover {
    background-color: var(--palette-secondary);
  }
  .item-title {
    flex-grow: 1;
    padding-right: var(--spacing);
    overflow: hidden;
    padding-left: var(--spacing);
  }
  .delete {
    background-color: var(--palette-warn);
    color: var(--palette-primary);
    margin-left: calc(var(--spacing) / 2);
  }
  button {
    width: var(--height-appBar);
  }

  @media (prefers-color-scheme: light) {
    .delete {
      color: var(--palette-secondary);
    }
  }
</style>
