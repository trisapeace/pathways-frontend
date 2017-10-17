import React from 'react';
import PropTypes from 'prop-types';

import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy, stub} from 'sinon';

import AppViewContainer_Full from '../AppViewContainer_Full';

class AppViewContainer_Full_Child_Test extends React.Component {
    static contextTypes = {
        container: PropTypes.object,
        containerType: PropTypes.string
    };

    render() {
        return null;
    }
}

describe('<AppViewContainer_Full/>', function() {
    it('renders appView inside a div', function() {
        const props = {
            appView: <AppViewContainer_Full_Child_Test />,
            isOpen: true
        };
        const wrapper = shallow(<AppViewContainer_Full {...props} />);
        expect(wrapper.find('AppViewContainer_Full_Child_Test')).to.exist;
        expect(wrapper).to.have.className('app-view-full');
    });

    it('renders "appView" with the appropriate context', function() {
        const props = {
            appView: <AppViewContainer_Full_Child_Test />,
            isOpen: true
        };
        const wrapper = shallow(<AppViewContainer_Full {...props} />);
        expect(wrapper.find('AppViewContainer_Full_Child_Test')).to.exist;
        expect(wrapper.instance().getChildContext()).to.deep.equal({
            container: wrapper.instance(),
            containerType: 'full'
        });
    });
});
