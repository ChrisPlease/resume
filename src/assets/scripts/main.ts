import '@fortawesome/fontawesome-pro/js/fontawesome.min.js'
import '@fortawesome/fontawesome-pro/js/light.min.js'
import '@fortawesome/fontawesome-pro/css/fontawesome.min.css'
import '@fortawesome/fontawesome-pro/css/light.min.css'

import { CollapsiblePanel } from './collapsible-panel'

const panelEl = document.querySelector<HTMLElement>('.resume__toc')

if (panelEl !== null) {
  const panel = new CollapsiblePanel(panelEl)

  panel.init()
}
