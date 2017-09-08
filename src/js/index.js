require('webcomponentsjs/webcomponents-lite.js');
require('react-polymer');

require('typeface-roboto');
require('leaflet/dist/leaflet.css');
require('index.scss');

require('iron-icons/iron-icons.html');
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
