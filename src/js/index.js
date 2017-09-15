import URL from 'url';

import React from 'react';
import ReactDOM from 'react-dom';

import reactPolymer from 'react-polymer';

import {Provider} from 'mobx-react';

import {apiClient} from 'mobx-rest';
import adapter from 'mobx-rest-fetch-adapter'

import config from 'config';
import Pathways from 'Pathways';
import stores from 'stores';

reactPolymer.registerAttribute('main');
reactPolymer.registerAttribute('main-title');
reactPolymer.registerAttribute('slot');

apiClient(adapter, {
    apiPath: URL.format({...config.api})
});

window.PATHWAYS = {
    stores
};

console.info(`Pathways Web Frontend`, window.PATHWAYS);

function main() {
    ReactDOM.render(
        <Provider {...stores}>
            <Pathways />
        </Provider>,
        document.getElementById('root')
    );
}

function _onWebComponentsReady() {
    document.removeEventListener('WebComponentsReady', _onWebComponentsReady, false);
    main();
}

document.addEventListener('WebComponentsReady', _onWebComponentsReady);
