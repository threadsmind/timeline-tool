<script setup lang="ts">
  import { timelineStore } from '@s/timelineStore'
  import { onBeforeMount } from 'vue'

  onBeforeMount(() => {
    if (timelineStore.timeline.modifiedSinceLastSort) {
      timelineStore.timeline.items.sort((a, b) =>
        a.numericalDate > b.numericalDate ? 1 : 0
      )
      timelineStore.timeline.hasBeenSorted()
    }
  })
</script>

<template>
  <div class="tab-panel timeline-container">
    <div v-if="timelineStore.timeline.items.length > 0">
      <div
        v-for="(item, index) in timelineStore.timeline.items"
        :key="item.id"
        class="timeline-item-container"
      >
        <div class="timeline-item tab-panel">
          <div class="timeline-item-header">
            <div class="timeline-item-title contain-text one-line-text">
              {{ item.title }}
            </div>
            <div class="timeline-item-date">{{ item.date }}</div>
          </div>
          <div class="timeline-item-description">{{ item.description }}</div>
        </div>
        <div
          v-if="index !== timelineStore.timeline.items.length - 1"
          class="timeline-spacer"
        >
          <img src="@a/material_arrow_down.svg" role="presentation" alt="" />
        </div>
      </div>
    </div>
    <div v-else>
      <h2>No Timeline Events</h2>
      <div>Head over to the Editor tab to add new events!</div>
    </div>
  </div>
</template>

<style scoped>
  .timeline-container {
    max-height: 100%;
    overflow-x: auto;
  }
  .timeline-item {
    min-height: 5rem;
    background-color: var(--palette-shadow);
    border-radius: 2px;
  }
  .timeline-item-header {
    display: flex;
    gap: var(--spacing);
    justify-content: space-between;
    border-bottom: 1px solid var(--palette-accent);
    margin-bottom: var(--spacing);
    padding-bottom: var(--spacing);
    line-height: 1;
  }
  .timeline-item-title {
    flex-grow: 2;
  }
  .timeline-spacer {
    display: flex;
    justify-content: center;
    height: calc(var(--spacing) * 3);
  }
  .timeline-spacer > img {
    display: block;
  }
</style>
