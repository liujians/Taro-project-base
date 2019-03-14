module.exports = {
  env: {
    APP_TYPE: '"project1"',
  },
  defineConstants: {
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://www.project1.com'
        : 'https://www.project1.cn',
  },
  weapp: {},
  h5: {},
};
