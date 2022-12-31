import h, { JSX } from 'vhtml'

export const Fragment = (
  { children }: { children: string[] },
): string => h(null as any, null, ...children)

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
interface Context {}

interface Contact {
  icon?: string
  to?: string
  key: string
  tag: 'a' | 'address'
  value: string
}

interface Data {
  readonly contact: Contact[]
}

export function render (this: Context, { contact }: Data): JSX.Element {
  return (
    <dl class="contact-info">
      {
        contact.map(item => {
          const Tag = item.tag as any
          const props = item.tag === 'a' ? { href: item.to } : {}
          return (
            <Fragment>
              <dt class="contact-info__term">
                <i className={`fa-light fa-fw fa-lg fa-${item.icon ?? ''}`}></i>
                <span class="sr-only">
                  {item.key}
                </span>
              </dt>
              <dd class="contact-info__detail">
                <Tag { ...props }>{item.value}</Tag>
              </dd>
            </Fragment>
          )
        })
      }
    </dl>
  )
}
