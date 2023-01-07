import { library, dom } from '@fortawesome/fontawesome-svg-core'

import {
  faCheck as falCheck,
  faEnvelope as falEnvelope,
  faFileUser as falFileUser,
  faHandWave as falHandWave,
  faHashtag as falHashtag,
  faHome as falHome,
  faListTree as falListTree,
  faLocationDot as falLocationDot,
  faMoon as falMoon,
  faPrint as falPrint,
  faRight as falRight,
  faSun as falSun,
} from '@fortawesome/pro-light-svg-icons'

import {
  faGithub as fabGithub,
  faGithubAlt as fabGithubAlt,
  faLinkedin as fabLinkedin,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  fabGithub,
  fabGithubAlt,
  fabLinkedin,

  falCheck,
  falEnvelope,
  falFileUser,
  falHandWave,
  falHashtag,
  falHome,
  falListTree,
  falLocationDot,
  falMoon,
  falPrint,
  falRight,
  falSun,
)

dom.watch()
