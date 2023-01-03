export class CollapsiblePanel {
  private readonly _el: HTMLElement
  private readonly _toggle: HTMLElement
  private readonly _content: HTMLElement

  private panelHeight = 0
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

  collapsePanel (): void {
    this._content.style.height = '0px'
    this._toggle.classList.remove('is-open')
    this._toggle.setAttribute('aria-expanded', 'false')
    this.isOpen = false
  }

  expandPanel (): void {
    this._content.style.height = `${this.panelHeight}px`
    this._toggle.classList.add('is-open')
    this._toggle.setAttribute('aria-expanded', 'true')
    this.isOpen = true
  }

  togglePanel (): void {
    if (this.isOpen) { this.collapsePanel() } else { this.expandPanel() }
  }

  setPanelSize (): void {
    this.panelHeight = this._content.getBoundingClientRect().height
  }

  get links (): NodeList {
    return this._content.querySelectorAll('a')
  }

  init (): void {
    this.setPanelSize()

    this._toggle.setAttribute('aria-haspopup', 'menu')
    this._toggle.setAttribute('aria-expanded', 'true')

    if (!this.isOpen) {
      this.collapsePanel()
    }

    this._toggle.addEventListener('click', () => this.togglePanel())
  }
}
