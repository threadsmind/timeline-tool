<script setup lang="ts">
  import { editorStore } from '@s/drawerStore'
  import { TimelineItem, timelineStore } from '@s/timelineStore'

  const props = defineProps<{
    timelineItem: TimelineItem
  }>()

  const handleEdit = () => {
    timelineStore.focusItem = props.timelineItem
    editorStore.toggleMenu()
  }
  const handleDelete = () => {
    timelineStore.removeItem(props.timelineItem)
  }
</script>

<template>
  <div class="editor-list-item">
    <div class="item-title contain-text one-line-text"><slot></slot></div>
    <button
      class="btn-square"
      :aria-label="`edit ${props.timelineItem.title}`"
      @click="handleEdit"
    >
      edit
    </button>
    <button
      :aria-label="`delete ${props.timelineItem.title}`"
      class="btn-square delete"
      @click="handleDelete"
    >
      del
    </button>
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
    padding-left: var(--spacing);
    max-width: calc(100% - (var(--height-appBar) * 2) - (var(--spacing) / 2));
  }
  .delete {
    background-color: var(--palette-warn);
    color: var(--palette-primary);
    margin-left: calc(var(--spacing) / 2);
  }
  button {
    height: var(--height-appBar);
    width: var(--height-appBar);
  }

  @media (prefers-color-scheme: light) {
    .delete {
      color: var(--palette-secondary);
    }
  }
</style>
