import '@fortawesome/fontawesome-pro/js/fontawesome.min.js'
import '@fortawesome/fontawesome-pro/js/light.min.js'
import '@fortawesome/fontawesome-pro/css/fontawesome.min.css'
import '@fortawesome/fontawesome-pro/css/light.min.css'

import { CollapsiblePanel } from './collapsible-panel'

const panel = document.querySelector('.resume__toc')

if (panel)
  new CollapsiblePanel(panel as HTMLElement)
