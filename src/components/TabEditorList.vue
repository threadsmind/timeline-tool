<script setup lang="ts">
  import { editorStore } from '@s/drawerStore'
  import EditorListItem from './EditorListItem.vue'
  const btnArray = new Array(20)
</script>

<template>
  <div class="full-height editor-tab">
    <div class="list-container">
      <div v-if="btnArray" class="list-scroll-panel">
        <ul>
          <li v-for="item in btnArray" :key="`btn${item}`">
            <EditorListItem>{{ `btn${item}` }}</EditorListItem>
          </li>
        </ul>
      </div>
      <div v-else class="tab-panel">No timeline data. =(</div>
    </div>
    <div class="button-container">
      <button @click="editorStore.toggleMenu">New Entry</button>
    </div>
  </div>
</template>

<style scoped>
  .editor-tab {
    max-height: 100%;
    padding-bottom: var(--spacing);
  }
  .list-container {
    --list-container-height: calc(100% - var(--height-appBar));
    height: var(--list-container-height);
    max-height: var(--list-container-height);
    padding-bottom: var(--spacing);
  }
  .list-scroll-panel {
    overflow-x: auto;
    padding: 0 var(--spacing);
  }
  .button-container {
    padding: 0 var(--spacing);
  }

  li {
    margin-top: calc(var(--spacing) / 2);
  }
  li:first-child {
    margin-top: var(--spacing);
  }
  button {
    width: 100%;
    height: var(--height-appBar);
  }
</style>
