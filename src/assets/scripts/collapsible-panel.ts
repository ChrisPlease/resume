export class CollapsiblePanel {

    private _el: HTMLElement
    private _toggle: HTMLElement
    private _content: HTMLElement

    private panelHeight = 0
    isOpen = false

    constructor(element: HTMLElement) {
        this._el = element
        this._toggle = this.getElement('[class*="toggle"]')
        this._content = this.getElement('[class*="content"]')

        this.setPanelSize()

        if (!this.isOpen) {
            this.collapsePanel()
        }

        this.registerListeners()
    }

    private getElement(getter: string): HTMLElement {
        return this._el.querySelector(getter)!
    }

    collapsePanel(): void {
        this._content.style.height = '0px'
        this._toggle.classList.remove('is-open')
        this.isOpen = false
    }

    expandPanel(): void {
        this._content.style.height = `${this.panelHeight}px`
        this._toggle.classList.add('is-open')
        this.isOpen = true
    }

    togglePanel(): void {
        if (this.isOpen)
            this.collapsePanel()
        else
            this.expandPanel()
    }

    setPanelSize(): void {
        this.panelHeight = this._content.getBoundingClientRect().height
    }

    private registerListeners(): void {
        this._toggle.addEventListener('click', () => this.togglePanel())
    }
}
