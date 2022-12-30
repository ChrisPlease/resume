
import h from 'vhtml'

export const data = {
  layout: 'layouts/base.njk',
}

interface Context {
  log: (message: string) => void
  slug: (message: string) => string
  daterange: (startDate: Date, endDate: Date) => string
}

interface Data {
  readonly title: string
  readonly subtitle: string
  readonly content: string
  readonly collections: Record<string, any[]>
}

export function render (this: Context, data: Data): any {
  const button: 'button' = 'button'
  return (
    <div class="resume">
      <h1 class="resume__title">{data.title}<span>{data.subtitle}</span></h1>
      <div class="resume__toc">
        <div className="resume__toc-header">
          <button class="resume__toc-print" type={button}>
            <i className="fa-fw fa-print fa-light fa-xl"></i>
            <span className="sr-only">Print</span>
          </button>
          <button class="resume__toc-toggle" type={button}>
            <i class="fa fa-fw fa-list-tree fa-light fa-xl"></i>
            <span class="sr-only">
              View Table of Contents
            </span>
          </button>
        </div>
        <div class="resume__toc-content">
          <h5 class="sr-only">
            Table of Contents
          </h5>
          <nav>
            <ul>
              {data.collections.resume
                .map(section => (
                  <li>
                    <a href={`#${this.slug(section.data.title)}`}>
                      <i className="fa fa-fw fa-light fa-rhombus fa-xs"></i>
                      {section.data.title}
                      {/* <i className="fa fa-fw fa-light fa-arrow-right fa-sm"></i> */}
                    </a>
                    {
                      Object.keys(data.collections)
                        .includes(this.slug(section.data.title)) && (
                          <ul>
                            {data.collections[this.slug(section.data.title)].reverse().map(exp => (
                              <li>
                                <a href={`#${this.slug(exp.data.title)}`}>
                                  <i className="fa fa-fw fa-light fa-rhombus fa-xs"></i>
                                  {exp.data.title}
                                  {/* <i className="fa fa-fw fa-light fa-arrow-right fa-sm"></i> */}
                                </a>
                              </li>
                            ))}
                          </ul>
                      )
                    }
                  </li>
                ))
              }
            </ul>
          </nav>

        </div>
      </div>
      <div
        class="resume__content"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  )
}
