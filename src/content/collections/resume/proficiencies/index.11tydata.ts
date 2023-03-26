type GroupNames =
  'frameworks' |
  'libraries' |
  'testing' |
  'apis' |
  'languages' |
  'tooling' |
  'database'

interface Group {
  title: string;
  list?: string[];
}

type Proficiencies = {
  [key in GroupNames]?: Group
}

interface Section {
  title: string;
  order: number;
  proficiencies: Proficiencies;
}

((): Section => ({
  title: 'Areas of Expertise',
  order: 3,
  proficiencies: {

    frameworks: {
      title: 'Frameworks',
      list: [
        'React',
        'Vue',
        'AngularJS',
        'Svelte',
        'Express',
      ],
    },
    libraries: {
      title: 'Libraries',
      list: [
        'Apollo Server',
        'Prisma',
        'Sequelize',
        'Storybook',
      ],
    },
    testing: {
      title: 'Testing',
      list: [
        'Jest',
        'Mocha',
        'Testing Library',
      ],
    },
    apis: {
      title: 'APIs',
      list: [
        'GraphQL',
        'REST',
      ],
    },
    languages: {
      title: 'Languages',
      list: [
        'ECMAScript',
        'TypeScript',
        'HTML',
        'CSS',
      ],
    },
    tooling: {
      title: 'Build Tools',
      list: [
        'git',
        'VueCLI',
        'CRA',
        'Vite',
        'Rollup',
        'Webpack',
        'Jenkins',
        'SASS',
        'LESS',
      ],
    },
    database: {
      title: 'Databases',
      list: [
        'PostgreSQL',
        'MySQL',
      ],
    },
  },
}))()
