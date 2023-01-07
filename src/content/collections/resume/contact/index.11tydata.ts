interface ResumeSection {
  title: string;
  order: number;
}

interface Detail {
  icon: string;
  key: string;
  value: string;
  tag: 'a' | 'address';
  isBrand?: boolean;
  to?: string;
}

interface ContactSection extends ResumeSection {
  details: Detail[];
}

((): ContactSection => ({
  title: 'Contact Information',
  order: 0,
  details: [
    {
      icon: 'file-user',
      key: 'Resume',
      value: 'https://chrisplease.me/resume',
      tag: 'a',
    },
    {
      icon: 'envelope',
      key: 'Email',
      value: 'chris@chrisplease.me',
      tag: 'a',
      to: 'mailto:chris@chrisplease.me',
    },
    {
      icon: 'github-alt',
      key: 'Github',
      isBrand: true,
      value: 'https://github.com/ChrisPlease',
      tag: 'a',
    },
    {
      icon: 'linkedin',
      key: 'LinkedIn',
      isBrand: true,
      value: 'https://linkedin.com/in/ChrisPlease',
      tag: 'a',
    },
    {
      icon: 'location-dot',
      key: 'Location',
      value: 'Denver, CO',
      tag: 'address',
    },
  ],
}))()
