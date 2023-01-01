
import { CollapsiblePanel } from './collapsible-panel'

const panelEl = document.querySelector<HTMLElement>('.resume__toc')

if (panelEl !== null) {
  const panel = new CollapsiblePanel(panelEl)

  panel.init()
}
