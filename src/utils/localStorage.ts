import { Timeline } from '@s/timelineStore'
import { timelineStringToObject } from './timelineStringToObject'

const LOCAL_STORAGE_KEY = 'timeline'

const testLocalStorage = () => {
  if (localStorage) {
    try {
      localStorage.setItem('__test', '')
      localStorage.removeItem('__test')
      return true
    } catch (_) {
      return false
    }
  } else {
    return false
  }
}
const isLocalStorageAvailable = testLocalStorage()

export const saveTimeline = (timeline: Timeline) => {
  if (isLocalStorageAvailable) {
    const timelineString = JSON.stringify(timeline)
    localStorage.setItem(LOCAL_STORAGE_KEY, timelineString)
  }
}

export const loadTimeline = () => {
  if (isLocalStorageAvailable) {
    const savedString = localStorage.getItem(LOCAL_STORAGE_KEY) || ''
    return timelineStringToObject(savedString)
  }
}
