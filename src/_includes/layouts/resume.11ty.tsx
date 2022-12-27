
import h from "vhtml";

export const data = {
  layout: 'layouts/base.njk',
};

interface Context {
  log(message: string): void;
  slug(message: string): string;
  daterange(startDate: Date, endDate: Date): string;
}

interface Data {
  readonly title: string;
  readonly subtitle: string;
  readonly content: string;
  readonly collections: Record<string, any[]>;
}

export function render(this: Context, data: Data): any {
  const button: 'button' = 'button';
  return (
    <div class="resume">
      <h1 class="resume__title">{data.title}<span>{data.subtitle}</span></h1>
      <div class="resume__toc">
        <h5>
          <button class="resume__toc-toggle" type={button}>Click</button>
          Table of Contents
        </h5>
        <nav class="resume__toc-content">
          <ul>
            {data.collections.resume
              .map(section => (
                <li>
                  <a href={`#${this.slug(section.data.title)}`}>
                    {section.data.title}
                  </a>
                  {
                    Object.keys(data.collections)
                      .includes(this.slug(section.data.title)) && (
                        <ul>
                          {data.collections[this.slug(section.data.title)].reverse().map(exp => (
                            <li>
                              <a href={`#${this.slug(exp.data.title)}`}>
                                {exp.data.title}
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
      <div
        class="resume__content"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  )
}
