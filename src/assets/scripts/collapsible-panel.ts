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
    this.isOpen = false
  }

  expandPanel (): void {
    this._content.style.height = `${this.panelHeight}px`
    this._toggle.classList.add('is-open')
    this.isOpen = true
  }

  togglePanel (): void {
    if (this.isOpen) { this.collapsePanel() } else { this.expandPanel() }
  }

  setPanelSize (): void {
    this.panelHeight = this._content.getBoundingClientRect().height
  }

  private registerListeners (): void {
    this._toggle.addEventListener('click', () => this.togglePanel())
  }

  init (): void {
    this.setPanelSize()

    if (!this.isOpen) {
      this.collapsePanel()
    }

    this.registerListeners()
  }
}
