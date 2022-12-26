
import h from "vhtml";

export const data = {
  layout: 'layouts/base.njk',
};

interface Context {
  log(message: string): void;
  slug(message: string): string;
}

interface Data {
  readonly title: string;
  readonly subtitle: string;
  readonly content: string;
  readonly collections: Record<string, any[]>;
}

export function render(this: Context, data: Data): any {
  return (
    <div class="resume">
      <h1>{data.title} <span>| {data.subtitle}</span></h1>
      <div class="toc">
        <h5>Table of Contents</h5>
        <nav>
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
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  )
}
