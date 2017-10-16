import {expect} from 'chai';
import {mount} from 'enzyme';
import {spy} from 'sinon';

import LinkButton from '../LinkButton';

const routerMock = {
    history: {
        push: spy(),
        replace: spy(),
        go: spy(),
        goBack: spy(),
        goForward: spy()
    }
};

describe('<LinkButton/>', function() {
    const options = {
        context: {
            router: routerMock
        }
    };

    it('creates children with the provided props', function() {
        const props = {
            testProp: 'test--linkbutton-prop'
        };
        const wrapper = mount(<LinkButton {...props} />, options);
        expect(wrapper.find('paper-button')).to.have.props(props);
    });

    describe('if "replace" is false', function() {
        it('changes router location on click', function() {
            const props = {
                to: '/test--push-target'
            };
            const wrapper = mount(<LinkButton {...props} />, options);
            wrapper.find('paper-button').simulate('click');
            expect(routerMock.history.push).to.have.been.calledWith(props.to);
        });
    });

    describe('if "replace" is true', function() {
        it('replaces router location on click', function() {
            const props = {
                to: '/test--replace-target',
                replace: true
            };
            const wrapper = mount(<LinkButton {...props} />, options);
            wrapper.find('paper-button').simulate('click');
            expect(routerMock.history.replace).to.have.been.calledWith(props.to);
        });
    });
});
