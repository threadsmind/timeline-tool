import { loadTimeline } from '@u/localStorage'
import { reactive } from 'vue'

export class TimelineItem {
  readonly id: number
  title: string
  date: string
  numericalDate: number
  description: string

  constructor(
    _title: string,
    _date: string,
    _numericalDate: number,
    _description: string,
    _id?: number
  ) {
    this.id = _id || Date.now()
    this.title = _title
    this.date = _date
    this.numericalDate = _numericalDate
    this.description = _description
  }
}

export class Timeline {
  items: TimelineItem[]
  focusItem: TimelineItem
  modifiedSinceLastSort: boolean

  constructor(_items: TimelineItem[]) {
    this.items = _items || []
    this.focusItem = new TimelineItem('', '', 0, '')
    this.modifiedSinceLastSort = true
  }

  addItem(newItem: TimelineItem) {
    this.items?.push(newItem)
  }

  removeItem(_item: TimelineItem) {
    const existingItemIndex = this.items.findIndex(
      (item) => item.id === _item.id
    )
    if (existingItemIndex >= 0) {
      this.items.splice(existingItemIndex, 1)
    }
  }

  setFocus(item: TimelineItem) {
    this.focusItem = item
  }

  hasBeenModified() {
    this.modifiedSinceLastSort === true
  }

  hasBeenSorted() {
    this.modifiedSinceLastSort === false
  }
}

const timelineState = loadTimeline() || new Timeline([])
export const timelineStore = reactive({ timeline: timelineState })
