import { reactive } from 'vue'

export class MenuState {
  isOpen: boolean
  constructor() {
    this.isOpen = false
  }

  toggleMenu() {
    this.isOpen = !this.isOpen
  }
}

const menuState = new MenuState()
export const menuStore = reactive(menuState)

const editorState = new MenuState()
export const editorStore = reactive(editorState)
