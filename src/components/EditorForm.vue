<script setup lang="ts">
  import { editorStore } from '@s/drawerStore'
  import { timelineStore } from '@s/timelineStore'
  import { watch } from 'vue'
  import BaseDrawer from './BaseDrawer.vue'

  const handleSave = () => {
    if (timelineStore.focusItem.title && timelineStore.focusItem.date) {
      timelineStore.removeItem(timelineStore.focusItem)
      timelineStore.addItem(timelineStore.focusItem)
      editorStore.toggleMenu()
    } else {
      console.log('Empty data not saved!')
    }
  }
  const handleCancel = () => {
    editorStore.toggleMenu()
  }

  watch(
    () => timelineStore.focusItem.date,
    (date) => {
      timelineStore.focusItem.numericalDate = Date.parse(date)
    }
  )
</script>

<template>
  <BaseDrawer axis="vertical" :drawer-store="editorStore">
    <div class="tab-panel editor-form">
      <h3>New Item</h3>
      <label>
        <span>Title</span>
        <input v-model.lazy="timelineStore.focusItem.title" type="text" />
      </label>
      <label>
        <span>Date</span>
        <input v-model.lazy="timelineStore.focusItem.date" type="date" />
      </label>
      <label>
        <span>Description</span>
        <textarea
          v-model.lazy="timelineStore.focusItem.description"
          rows="8"
        ></textarea>
      </label>
      <div class="editor-actions">
        <button @click="handleSave">Save</button>
        <button @click="handleCancel">Cancel</button>
      </div>
    </div>
  </BaseDrawer>
</template>

<style scoped>
  .editor-form {
    flex-direction: column;
  }
  .editor-form,
  .editor-actions {
    display: flex;
    gap: var(--spacing);
  }
  button {
    display: block;
    width: 50%;
  }
  span,
  label {
    display: block;
  }
  input,
  textarea {
    width: 100%;
  }
  textarea {
    min-width: 100%;
    max-width: 100%;
    max-height: 60vh;
  }
  h3 {
    margin: 0;
  }
</style>
