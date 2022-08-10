/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    'sprite-svg',
    'sprite-png',
    'page',
    'btn',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'bootstrap/scss/_functions.scss',
    'bootstrap/scss/_variables.scss',
    // 'mdb-ui-kit/src/scss/free/_variables.scss',
    'src/scss/bs-custom.scss',
    'src/scss/_tailwind-colours.scss',
    'src/scss/_tailwind-screens.scss',
    // 'bootstrap/scss/_maps.scss',
    'bootstrap/scss/_mixins.scss',
    'bootstrap/scss/_transitions.scss',
    'bootstrap/scss/_nav.scss',
    // 'bootstrap/scss/_accordion.scss',
    // 'bootstrap/scss/_root.scss',
    // 'bootstrap/scss/_dropdown.scss',
    // 'bootstrap/scss/_navbar.scss',
    // 'mdb-ui-kit/src/scss/free/_navbar.scss',
    // 'mdb-ui-kit/src/scss/free/_dropdown.scss',
    'tiny-slider/dist/tiny-slider.css',

    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
    '../css/fontawesome.min.css',
    '../css/regular.min.css',
    '../css/solid.min.css',
    'src/scss/test.scss'
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
    'lazysizes/lazysizes.js',
    // 'bootstrap/js/dist/dropdown.js',
    // 'bootstrap/js/dist/collapse.js',
    'bootstrap/js/dist/tab.js',
    // 'mdb-ui-kit/src/js/free/dropdown.js',
    // 'mdb-ui-kit/src/js/bootstrap/mdb-prefix/collapse.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/fonts/': 'fonts/',
    'src/img/temp/*.{png,svg,jpg,jpeg}': 'img/',
    'src/img/content/*.{png,svg,jpg,jpeg}': 'img/',
    'src/img/*.{png,svg,jpg,jpeg}': 'img/',
    'src/video/*.{mp4,mov}': 'video/',
    'src/webfonts/': 'webfonts/',
    'design/screens/': 'screens/'
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
