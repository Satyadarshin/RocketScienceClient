const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/global.scss";',
      },
    },
  },
  devServer: {
    proxy: 'http://localhost:5000'
  }
};
