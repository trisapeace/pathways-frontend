/*
 * Global imports required for styles, external scripts, and web components.
 * Assumes the web components polyfill has been loaded as a prerequisite.
 */

require('index.scss');

/*
 * TODO: This might blow up in browsers that don't support es6. May need to do
 *       something clever with Webpack to keep this one out of the js bundle.
 */

if (window.customElements) {
    require('webcomponentsjs/custom-elements-es5-adapter.js');
}

require('webcomponentsjs/webcomponents-lite.js');

require('font-roboto/roboto.html');

require('iron-icons/editor-icons.html');
require('iron-icons/iron-icons.html');

require('paper-styles/paper-styles.html');

require('neon-animation/web-animations.html');
require('neon-animation/neon-animations.html');

const reactPolymer = require('react-polymer');

reactPolymer.registerAttribute('main');
reactPolymer.registerAttribute('main-title');
reactPolymer.registerAttribute('slot');
