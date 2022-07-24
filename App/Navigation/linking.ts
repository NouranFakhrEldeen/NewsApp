
const config = {
  screens: {
    NewsStack: {
      screens: {
        NewsList: 'News',
        NewsDetails: 'NewsDetails',
      },
    },
    Settings: 'settings',
  },
};

const linking: any = {
  prefixes: ['newsapp://app'],
  config,
};

export default linking;
