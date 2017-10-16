import React from 'react';

import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy, stub} from 'sinon';

import SimpleAppView from '../SimpleAppView';

const routerMock = {
    history: {
        push: spy(),
        replace: spy(),
        go: spy(),
        goBack: spy(),
        goForward: spy()
    }
};

const appViewTitle = 'test--simpleappview-title';
const appViewParent = '/test--simpleappview-parent';

class SimpleAppView_Test_Main extends React.Component {
    render() {
        return <div className="test--simpleappview_test_main" />;
    }
}

class SimpleAppView_Test extends SimpleAppView {
    constructor() {
        super({
            title: appViewTitle,
            parent: appViewParent,
            mainComponent: SimpleAppView_Test_Main
        })
    }
}

describe('<SimpleAppView/>', function() {
    describe('with no implementation', function() {
        it('sets title according to the "title" option', function() {
            const title = 'test--simpleappview-title';
            const appView = new SimpleAppView({title});
            expect(appView.title).to.equal(title);
        });

        it('sets parent according to the "parent" option', function() {
            const parent = '/test--simpleappview-parent';
            const appView = new SimpleAppView({parent});
            expect(appView.parent).to.equal(parent);
        });

        it('sets mainComponent according to the "mainComponent" option', function() {
            const mainComponent = SimpleAppView_Test_Main;
            const appView = new SimpleAppView({mainComponent});
            expect(appView.mainComponent).to.equal(mainComponent);
        });
    });

    describe('with containerType "full"', function() {
        const options = {
            context: {
                router: routerMock,
                containerType: 'full'
            }
        };

        it('renders mainComponent with provided props', function() {
            const props = {
                testProp: 'test--simpleappview-prop'
            };
            const wrapper = shallow(<SimpleAppView_Test {...props} />, options);
            expect(wrapper.find('SimpleAppView_Test_Main')).to.exist;
            expect(wrapper.find('SimpleAppView_Test_Main')).to.have.props(props);
        });

        it('renders a toolbar with provided title and hasParent', function() {
            const wrapper = shallow(<SimpleAppView_Test />, options);
            expect(wrapper.find('SimpleAppViewToolbar')).to.exist;
            expect(wrapper.find('SimpleAppViewToolbar')).to.have.prop('title', appViewTitle);
            expect(wrapper.find('SimpleAppViewToolbar')).to.have.prop('hasParent', true);
        });
    });
});
