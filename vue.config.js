module.exports = {
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
