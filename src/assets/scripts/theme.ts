type Theme = 'dark' | 'light'

const mql: MediaQueryList = window.matchMedia('(prefers-color-scheme: light)')

export function init (): void {
  const theme = determineInitTheme()
  /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
  const btn = document.querySelector<HTMLInputElement>('#theme-toggle')!

  if (theme === 'dark') {
    btn.checked = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
  btn.addEventListener('change', handleToggle)
  mql.addEventListener('change', (e: MediaQueryListEvent) => {
    if (e.matches) {
      setLightTheme()
      btn.checked = false
    } else {
      setDarkTheme()
      btn.checked = true
    }
  })
}

function determineInitTheme (): Theme {
  const storedTheme: Theme | null = <Theme>localStorage.getItem('theme')

  if (storedTheme) return storedTheme

  if (mql.matches) { return 'light' } else { return 'dark' }
}

function handleToggle (e: Event): void {
  const input = <HTMLInputElement>e.target

  !input.checked ? setLightTheme() : setDarkTheme()
}

function setLightTheme (): void {
  localStorage.setItem('theme', 'light')
  document.documentElement.removeAttribute('data-theme')
}

function setDarkTheme (): void {
  localStorage.setItem('theme', 'dark')
  document.documentElement.setAttribute('data-theme', 'dark')
}
