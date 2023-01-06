
import { CollapsiblePanel } from './collapsible-panel'

const panelEls = document.querySelectorAll<HTMLElement>('[data-attribute="dropdown"]')

if (panelEls !== null) {
  panelEls.forEach(p => {
    const panel = new CollapsiblePanel(p)

    panel.init()
  })
}
