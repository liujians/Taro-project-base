console.log(process.env.NODE_ENV);
module.exports = {
  env: {
    APP_TYPE: '"project2"',
  },
  defineConstants: {
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://www.project2.com'
        : 'https://www.project2.cn',
  },
  weapp: {},
  h5: {},
};
