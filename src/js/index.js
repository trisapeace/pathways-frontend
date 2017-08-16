require('typeface-roboto');

require('leaflet/dist/leaflet.css');

require('index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Pathways from 'Pathways';
import stores from 'stores';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

window.PATHWAYS = {
    stores
};

console.info(`Pathways Web Frontend`, window.PATHWAYS);

ReactDOM.render(
  <Pathways />,
  document.getElementById('root')
);
