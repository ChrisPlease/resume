function ease (v: number, pow = 4): number {
  return 1 - Math.pow(1 - v, pow)
}

export class CollapsiblePanel {
  private readonly _el: HTMLElement
  private readonly _toggle: HTMLElement
  private readonly _content: HTMLElement

  isOpen = false

  constructor (element: HTMLElement) {
    this._el = element
    this._toggle = this.getElement('[data-attribute="toggle"]')
    this._content = this.getElement('[data-attribute="content"]')
  }

  private getElement (getter: string): HTMLElement {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    return this._el.querySelector(getter)!
  }

  private clickHandler (e: Event): void {
    if (e.target && Array.from<EventTarget>(this.links).includes(e.target)) {
      this.collapsePanel()
    }
  }

  animateClosed (): void {
    const foo = new Array<number>(100).fill(1).map((_, i) => {
      const step = i
      const easedStep: number = 1 + (-1 * ease(step / 100))
      return `scale(1, ${easedStep})`
    })

    const bar = new Array<number>(100).fill(1).map((_, i) => {
      const step = i
      const easedStep: number = 1 / (1 + (-1 * ease(step / 100)))
      return `scale(1, ${easedStep})`
    })

    this._content.animate({
      transform: foo,
    }, { duration: 1000 })

    this._content.querySelector('nav')?.animate({
      transform: bar,
    }, { duration: 1000 })
  }

  animateOpen (): void {
    const foo = new Array<number>(100).fill(1).map((_, step) => {
      const easedStep = ease(step / 100)
      return `scale(1, ${easedStep})`
    })

    const bar = new Array<number>(100).fill(1).map((_, step) => {
      const easedStep = 1 / ease(step / 100)
      return `scale(1, ${easedStep})`
    })

    this._content.animate({
      transform: foo,
    }, { duration: 1000 })

    this._content.querySelector('nav')?.animate({
      transform: bar,
    }, { duration: 1000 })
  }

  collapsePanel (): void {
    this.animateClosed()
    this._toggle.classList.remove('is-open')
    this._content.classList.remove('is-open')
    this._toggle.setAttribute('aria-expanded', 'false')
    this.isOpen = false

    this._content.removeEventListener('click', this.clickHandler)
  }

  expandPanel (): void {
    this.animateOpen()
    this._toggle.classList.add('is-open')
    this._content.classList.add('is-open')
    this._toggle.setAttribute('aria-expanded', 'true')
    this.isOpen = true

    this._content.addEventListener('click', this.clickHandler)
  }

  togglePanel (e: Event): void {
    e.preventDefault()
    if (this.isOpen) { this.collapsePanel() } else { this.expandPanel() }
  }

  get links (): HTMLElement[] {
    return Array.from(this._content.querySelectorAll('a'))
  }

  init (): void {
    this._toggle.setAttribute('aria-haspopup', 'menu')
    this._toggle.setAttribute('aria-expanded', 'false')

    this._toggle.addEventListener('click', (e) => this.togglePanel(e), false)
  }
}
