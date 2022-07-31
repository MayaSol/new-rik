/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    'page'
    // 'sprite-svg',
    // 'sprite-png',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'bootstrap/scss/_functions.scss',
    'bootstrap/scss/_variables.scss',
    // 'bootstrap/scss/_maps.scss',
    'bootstrap/scss/_mixins.scss',
    // 'bootstrap/scss/_root.scss',
    'bootstrap/scss/_dropdown.scss',
    'bootstrap/scss/_nav.scss',
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
    'bootstrap/js/dist/dropdown.js',
    'bootstrap/js/dist/collapse.js'
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/fonts/': 'fonts/',
    'src/img/*.{png,svg,jpg,jpeg}': 'img/',
    'src/webfonts/': 'webfonts/',
    // 'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
