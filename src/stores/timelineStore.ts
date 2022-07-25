import { reactive } from 'vue'

export class TimelineItem {
  id: number
  title: string
  date: string
  numericalDate: number
  description: string

  constructor(
    _title: string,
    _date: string,
    _numericalDate: number,
    _description: string
  ) {
    this.id = Date.now()
    this.title = _title
    this.date = _date
    this.numericalDate = _numericalDate
    this.description = _description
  }
}

export class Timeline {
  items: TimelineItem[]
  focusItem: TimelineItem

  constructor(_items: TimelineItem[]) {
    this.items = _items || []
    this.focusItem = new TimelineItem('', '', 0, '')
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
}

const timelineState = new Timeline([])
export const timelineStore = reactive(timelineState)
