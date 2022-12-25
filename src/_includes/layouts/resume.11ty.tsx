
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
  readonly content: string;
  readonly collections: Record<string, any[]>;
}

export function render(this: Context, data: Data): any {
  console.log(data.collections.resume[0])
  return (
    <div class="resume">
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
