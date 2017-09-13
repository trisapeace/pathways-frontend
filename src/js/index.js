require('webcomponentsjs/webcomponents-lite.js');

require('index.scss');

require('font-roboto/roboto.html');

require('iron-icons/editor-icons.html');
require('iron-icons/iron-icons.html');
require('neon-animation/web-animations.html');
require('neon-animation/neon-animations.html');
require('paper-dialog/paper-dialog.html');
require('paper-styles/paper-styles.html');

import URL from 'url';

import reactPolymer from 'react-polymer';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'mobx-react';

import {apiClient} from 'mobx-rest';
import adapter from 'mobx-rest-fetch-adapter'

import config from 'config';
import Pathways from 'Pathways';
import stores from 'stores';

reactPolymer.registerAttribute('main');
reactPolymer.registerAttribute('main-title');
reactPolymer.registerAttribute('slot');

reactPolymer.registerEvent('tap', 'onTap');
reactPolymer.registerEvent('iron-overlay-canceled', 'onOverlayCancel');
reactPolymer.registerEvent('iron-overlay-closed', 'onOverlayClose');
reactPolymer.registerEvent('iron-overlay-opened', 'onOverlayOpen');

apiClient(adapter, {
    apiPath: URL.format({...config.api})
});

window.PATHWAYS = {
    stores
};

console.info(`Pathways Web Frontend`, window.PATHWAYS);

ReactDOM.render(
    <Provider {...stores}>
        <Pathways />
    </Provider>,
    document.getElementById('root')
);
