<script setup lang="ts">
  import { editorStore } from '@s/drawerStore'
  import { TimelineItem, timelineStore } from '@s/timelineStore'
  import EditorListItem from './EditorListItem.vue'

  const handleNewEntry = () => {
    timelineStore.setFocus(new TimelineItem('', '', 0, ''))
    editorStore.toggleMenu()
  }
</script>

<template>
  <div class="full-height editor-tab">
    <div class="list-container">
      <div v-if="timelineStore.items.length !== 0" class="list-scroll-panel">
        <ul>
          <li v-for="item in timelineStore.items" :key="item.id">
            <EditorListItem :timeline-item="item">{{
              item.title
            }}</EditorListItem>
          </li>
        </ul>
      </div>
      <div v-else class="tab-panel">No timeline data. =(</div>
    </div>
    <div class="button-container">
      <button @click="handleNewEntry">New Entry</button>
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
