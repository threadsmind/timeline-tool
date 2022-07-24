<script setup lang="ts">
  import { editorStore } from '@s/drawerStore'
  import BaseDrawer from './BaseDrawer.vue'

  const handleSave = () => {
    editorStore.toggleMenu()
  }
  const handleCancel = () => {
    editorStore.toggleMenu()
  }
</script>

<template>
  <BaseDrawer axis="vertical" :drawer-store="editorStore">
    <div class="tab-panel editor-form">
      <h3>New Item</h3>
      <label>
        <span>Title</span>
        <input type="text" />
      </label>
      <label>
        <span>Date</span>
        <input type="datetime" />
      </label>
      <label>
        <span>Description</span>
        <textarea rows="8"></textarea>
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
