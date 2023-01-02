type Theme = 'dark' | 'light'

export function init (): void {
  const theme = determineInitTheme()
  /* eslint-disable-next-line */
  const btn = document.querySelector<HTMLInputElement>('#theme-toggle')!

  if (theme === 'dark') {
    btn.checked = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
  btn.addEventListener('change', handleToggle)
}

function determineInitTheme (): Theme {
  const storedTheme: Theme | null = <Theme>localStorage.getItem('theme')

  if (storedTheme) return storedTheme

  const mql: MediaQueryList = window.matchMedia('(prefers-color-scheme: light)')

  if (mql.matches) { return 'light' } else { return 'dark' }
}

function handleToggle (e: Event): void {
  const input = <HTMLInputElement>e.target

  if (!input.checked) {
    localStorage.setItem('theme', 'light')
    document.documentElement.removeAttribute('data-theme')
  } else {
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  }
}
