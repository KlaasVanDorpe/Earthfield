// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/variables.scss'),
      ],
    })
}
module.exports = {
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  siteName: 'Earthfield',
  titleTemplate: 'Earthfield',
  plugins: [],
  icon: './src/assets/images/favicon-32x32.png',
  port: 8090,

}
