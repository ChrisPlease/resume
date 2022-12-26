import h from 'vhtml';

interface Context {}

interface Contact {
  icon?: string;
  to?: string;
  key: string;
  tag: 'a' | 'address';
  value: string;
}

interface Data {
  readonly contact: Contact[];
}

export function render(this: Context, { contact }: Data) {
  return (
    <dl class="contact-info">
      {
        contact.map(item => (
          <div>
            <dt>
              <span>{item.key}</span>
            </dt>
            <dd>
              {item.value}
            </dd>
          </div>
        ))
      }
      <dt class="">
        <i class="fa-light fa-fw fa-file-user"></i>
        <span class="sr-only">Resume</span>
      </dt>
      <dd class="">
        <a href="https://chrisplease.me">https://chrisplease.me</a>
      </dd>
      <dt>
        <i class="fa-light fa-fw fa-envelope"></i>
        <span class="sr-only">Email</span>
      </dt>
      <dd>
        <a href="mailto:chris@chrisplease.me">chris@chrisplease.me</a>
      </dd>
      <dt>
        <i class="fa-light fa-fw fa-location-dot"></i>
        <span class="sr-only">Location</span>
      </dt>
      <dd>
        <address>Denver, CO</address>
      </dd>
    </dl>

  );
}
