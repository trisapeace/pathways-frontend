import React from 'react';
import PropTypes from 'prop-types';

import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy, stub} from 'sinon';

import AppViewContainer_Dialog from '../AppViewContainer_Dialog';

class AppViewContainer_Dialog_Child_Test extends React.Component {
    static contextTypes = {
        container: PropTypes.object,
        containerType: PropTypes.string
    };

    render() {
        return null;
    }
}

describe('<AppViewContainer_Dialog/>', function() {
    it('renders appView inside a dialog', function() {
        const props = {
            appView: <AppViewContainer_Dialog_Child_Test />,
            isOpen: true
        };
        const wrapper = shallow(<AppViewContainer_Dialog {...props} />);
        expect(wrapper.find('PaperDialog')).to.exist;
        expect(wrapper.find('PaperDialog')).to.have.className('app-view-dialog');
        expect(wrapper.find('PaperDialog')).to.have.descendants('AppViewContainer_Dialog_Child_Test');
    });

    it('renders "appView" with the appropriate context', function() {
        const props = {
            appView: <AppViewContainer_Dialog_Child_Test />,
            isOpen: true
        };
        const wrapper = shallow(<AppViewContainer_Dialog {...props} />);
        expect(wrapper.find('AppViewContainer_Dialog_Child_Test')).to.exist;
        expect(wrapper.instance().getChildContext()).to.deep.equal({
            container: wrapper.instance(),
            containerType: 'dialog'
        });
    });

    it('sets the dialog\'s "opened" property according to "isOpen"', function() {
        const props = {
            appView: <AppViewContainer_Dialog_Child_Test />
        };
        expect(
            shallow(<AppViewContainer_Dialog {...props} />).find('PaperDialog')
        ).to.not.have.prop('opened');
        expect(
            shallow(<AppViewContainer_Dialog {...props} isOpen={true} />).find('PaperDialog')
        ).to.have.prop('opened', true);
        expect(
            shallow(<AppViewContainer_Dialog {...props} isOpen={false} />).find('PaperDialog')
        ).to.have.prop('opened', false);
    });

    describe('if "onRequestClose" is set', function() {
        const props = {
            appView: <AppViewContainer_Dialog_Child_Test />,
            isOpen: true,
            onRequestClose: spy()
        };

        it('calls "onRequestClose" inside "dialogClose"', function() {
            props.onRequestClose.reset();
            const wrapper = shallow(<AppViewContainer_Dialog {...props} />);
            wrapper.instance().dialogClose();
            expect(props.onRequestClose).to.have.been.called;
        });

        it('calls "onRequestClose" when the dialog closes itself', function() {
            props.onRequestClose.reset();
            const wrapper = shallow(<AppViewContainer_Dialog {...props} />);
            wrapper.find('PaperDialog').prop('onClose')();
            expect(props.onRequestClose).to.have.been.called;
        });
    });

    describe('if "onRequestClose" is not set', function() {
        const props = {
            appView: <AppViewContainer_Dialog_Child_Test />,
            isOpen: true,
            onRequestClose: undefined
        };

        it('does nothing inside "dialogClose"', function() {
            const wrapper = shallow(<AppViewContainer_Dialog {...props} />);
            expect(
                () => wrapper.instance().dialogClose()
            ).to.not.throw(TypeError);
        });

        it('provides an empty "onClose" handler for the dialog', function() {
            const wrapper = shallow(<AppViewContainer_Dialog {...props} />);
            expect(wrapper.find('PaperDialog')).to.not.have.prop('onClose');
        });
    });
});
