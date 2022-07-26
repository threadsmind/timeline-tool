import { Timeline, TimelineItem } from '@s/timelineStore'

export const timelineStringToObject = (text: string): Timeline | null => {
  try {
    const dirtyTimelineData = JSON.parse(text)?.items
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
    return timelineData ? new Timeline(timelineData) : null
  } catch (_) {
    return null
  }
}
