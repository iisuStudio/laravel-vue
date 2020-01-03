const path = require('path')
const webpack = require('webpack')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/assets/vue/src'),
      '#': path.resolve(__dirname, 'resources/assets/vue/sass')
    }
  }
}
