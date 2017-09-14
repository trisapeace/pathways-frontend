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

require('app-layout/app-header/app-header.html');
require('app-layout/app-toolbar/app-toolbar.html');
require('paper-button/paper-button.html');
require('paper-card/paper-card.html');
require('paper-chip/paper-chip.html');
require('paper-dialog/paper-dialog.html');
require('paper-icon-button/paper-icon-button.html');
require('paper-progress/paper-progress.html');

require('react-polymer');
