/**
 * Global setup for all tests. This sets up a common test environment, with a
 * virtual DOM provided by jsdom, and various globals used by different tests.
 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme'

import jsdomGlobal from 'jsdom-global';

before(function() {
    /* Enzyme expects React to be in the global scope */
    global.React = React;
    Enzyme.configure({adapter: new Adapter()});

    chai.use(sinonChai);
    chai.use(chaiEnzyme());

    this.jsdom = jsdomGlobal();
});

after(function() {
    this.jsdom();
});
