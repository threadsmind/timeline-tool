import TabEditorListVue from '@c/TabEditorList.vue'
import TabLandingVue from '@c/TabLanding.vue'
import TabTimelineVue from '@c/TabTimeline.vue'
import { Component, reactive } from 'vue'

export interface TabData {
  id: string
  title: string
  tabName: string
}

export interface TabMap {
  [name: string]: Component
}

export class TabState {
  currentTab: TabData
  tabs: TabData[]

  constructor(_startingTab: string, _tabs: TabData[]) {
    this.tabs = _tabs
    this.currentTab = this._findTab(_startingTab) || _tabs[0]
  }

  setCurrentTab(newTab: string) {
    const tabData = this._findTab(newTab)
    if (tabData) this.currentTab = tabData
  }

  private _findTab(tabName: string): TabData | undefined {
    return this.tabs.find((tab) => tab.id === tabName)
  }
}

export const tabMap = {
  landing: TabLandingVue,
  editor: TabEditorListVue,
  timeline: TabTimelineVue,
} as TabMap

const tabs: TabData[] = [
  {
    id: 'landing',
    title: 'Timeline Tool',
    tabName: 'Home',
  },
  {
    id: 'editor',
    title: 'Editor',
    tabName: 'Editor',
  },
  {
    id: 'timeline',
    title: 'Timeline',
    tabName: 'Timeline',
  },
]
const tabState = new TabState(tabs[0].id, tabs)
export const tabStore = reactive(tabState)
