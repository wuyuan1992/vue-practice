const path = require('path');

module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          Routes: path.resolve(__dirname, 'src/routes/'),
          Pages: path.resolve(__dirname, 'src/pages/'),
          Components: path.resolve(__dirname, 'src/components/'),
          Services: path.resolve(__dirname, 'src/services/'),
          Scss: path.resolve(__dirname, 'src/scss/'),
          Imgs: path.resolve(__dirname, 'src/assets/imgs/'),
        }
    }
  }
}