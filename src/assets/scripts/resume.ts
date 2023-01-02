
import { CollapsiblePanel } from './collapsible-panel'

const panelEl = document.querySelector<HTMLElement>('.resume__toc')

if (panelEl !== null) {
  /* eslint-disable-next-line */
  const panel = new CollapsiblePanel(panelEl)

  // panel.init()
}
