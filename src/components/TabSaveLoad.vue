<script setup lang="ts">
  import { Timeline, TimelineItem, timelineStore } from '@s/timelineStore'
  import { onBeforeMount, ref } from 'vue'

  const timelineJsonText = ref('')
  const baseTimelineJsonText = ref('')
  const jsonError = ref(false)
  const downloadUrl = ref('')
  const downloadFile = ref('')
  const downloadElement = ref<HTMLAnchorElement>()

  onBeforeMount(() => {
    timelineJsonText.value = JSON.stringify({
      items: timelineStore.timeline.items,
    })
    baseTimelineJsonText.value = timelineJsonText.value
  })

  const handleLoad = () => {
    try {
      const dirtyTimelineData = JSON.parse(timelineJsonText.value)?.items
      const maybeTimelineData = Array.isArray(dirtyTimelineData)
        ? dirtyTimelineData
        : []
      const timelineData = maybeTimelineData
        .filter(
          (maybeItem: TimelineItem) =>
            maybeItem &&
            typeof maybeItem.id === 'number' &&
            typeof maybeItem.date === 'string' &&
            typeof maybeItem.description === 'string' &&
            typeof maybeItem.numericalDate === 'number' &&
            typeof maybeItem.title === 'string'
        )
        .map(
          (item) =>
            new TimelineItem(
              item.title,
              item.date,
              item.numericalDate,
              item.description,
              item.id
            )
        )
      const timeline = new Timeline(timelineData)
      timelineStore.timeline = timeline
      jsonError.value = false
    } catch (e) {
      jsonError.value = true
    }
  }
  const handleSave = () => {
    const file = new File([baseTimelineJsonText.value], 'timeline.json', {
      type: 'application/json',
    })
    downloadFile.value = file.name
    downloadUrl.value = URL.createObjectURL(file)
    setTimeout(() => {
      downloadElement.value?.click()
    })
  }
</script>

<template>
  <div class="tab-panel">
    <div class="content">
      This panel contains the raw JSON data for your current timeline. JSON can
      be pasted in from an outside source to load a timeline.
    </div>
    <div v-if="jsonError" class="json-error content tab-panel">
      Oh no! This JSON appears to be malformed. =(
    </div>
    <textarea v-model="timelineJsonText" rows="10"></textarea>
    <div class="btn-row">
      <button
        :disabled="
          !timelineJsonText || timelineJsonText !== baseTimelineJsonText
        "
        @click="handleSave"
      >
        Save
      </button>
      <button
        :disabled="
          !timelineJsonText || timelineJsonText === baseTimelineJsonText
        "
        @click="handleLoad"
      >
        Load
      </button>
    </div>
    <a
      ref="downloadElement"
      :download="downloadFile"
      class="download"
      :href="downloadUrl"
    >
      download
    </a>
  </div>
</template>

<style scope>
  .btn-row {
    display: flex;
    justify-content: stretch;
    gap: var(--spacing);
    height: var(--height-appBar);
    margin-top: var(--spacing);
  }
  .btn-row > button {
    flex-grow: 1;
  }
  .json-error {
    background-color: var(--palette-warn);
  }
  .download {
    display: none;
  }
</style>
