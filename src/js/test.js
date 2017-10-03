/**
 * Global setup for all tests. This sets up a common test environment, with a
 * virtual DOM provided by jsdom, and various globals used by different tests.
 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import {JSDOM} from 'jsdom'

before(function() {
    /* Enzyme expects React to be in the global scope */
    global.React = React;
    Enzyme.configure({adapter: new Adapter()});
});

beforeEach(function() {
    const jsDom = new JSDOM('<!doctype html><html><body></body></html>');
    const jsDocument = jsDom.window.document;
    global.document = jsDocument;
    global.window = jsDocument.defaultView;
});
