import React from 'react';

import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy, stub} from 'sinon';

import SimpleAppView from '../SimpleAppView';
import {SimpleAppViewToolbar_Full, SimpleAppViewToolbar_Dialog} from '../SimpleAppView';

const routerMock = {
    history: {
        push: spy(),
        replace: spy(),
        go: spy(),
        goBack: spy(),
        goForward: spy()
    }
};

const containerMock = {
    dialogClose: spy()
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

// TODO: We should test the cases that "parent" or "container" are undefined

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
                container: containerMock,
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

        it('renders a toolbar with title and hasParent', function() {
            const wrapper = shallow(<SimpleAppView_Test />, options);
            expect(wrapper.find('SimpleAppViewToolbar_Full')).to.exist;
            expect(wrapper.find('SimpleAppViewToolbar_Full')).to.have.prop('title', appViewTitle);
            expect(wrapper.find('SimpleAppViewToolbar_Full')).to.have.prop('hasParent', true);
        });

        it('renders a toolbar with an onBackClick method', function() {
            const wrapper = shallow(<SimpleAppView_Test />, options);
            wrapper.find('SimpleAppViewToolbar_Full').prop('onBackClick')();
            expect(routerMock.history.push).to.have.been.calledWith(appViewParent);
        });
    });

    describe('with containerType "dialog"', function() {
        const options = {
            context: {
                router: routerMock,
                container: containerMock,
                containerType: 'dialog'
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

        it('renders a toolbar with title', function() {
            const wrapper = shallow(<SimpleAppView_Test />, options);
            expect(wrapper.find('SimpleAppViewToolbar_Dialog')).to.exist;
            expect(wrapper.find('SimpleAppViewToolbar_Dialog')).to.have.prop('title', appViewTitle);
        });

        it('renders a toolbar with an onCloseClick method', function() {
            const wrapper = shallow(<SimpleAppView_Test />, options);
            wrapper.find('SimpleAppViewToolbar_Dialog').prop('onCloseClick')();
            expect(containerMock.dialogClose).to.have.been.called;
        });
    });
});

describe('<SimpleAppViewToolbar_Full/>', function() {
    describe('if "title" is set', function() {
        it('renders with a title', function() {
            const title = "test--simpleappviewtoolbar-title";
            const wrapper = shallow(<SimpleAppViewToolbar_Full title={title} />);
            expect(wrapper.find('div[main-title]')).to.exist;
            expect(wrapper.find('div[main-title]')).to.have.text(title);
        });
    });

    describe('if "title" is not set', function() {
        it('renders with an empty title', function() {
            const wrapper = shallow(<SimpleAppViewToolbar_Full />);
            expect(wrapper.find('div[main-title]')).to.exist;
            expect(wrapper.find('div[main-title]')).to.not.have.text();
        });
    });

    describe('if "hasParent" is true', function() {
        it('renders with a back button', function() {
            const wrapper = shallow(<SimpleAppViewToolbar_Full hasParent={true} />);
            expect(wrapper.find('PaperIconButton[icon="arrow-back"]')).to.exist;
        });

        it('calls onBackClick when the back button is pressed', function() {
            const onBackClick = spy();
            const wrapper = shallow(<SimpleAppViewToolbar_Full hasParent={true} onBackClick={onBackClick} />);
            wrapper.find('PaperIconButton[icon="arrow-back"]').simulate('click');
            expect(onBackClick).to.have.been.called;
        });
    });

    describe('if "hasParent" is false', function() {
        it('renders without a back button', function() {
            const wrapper = shallow(<SimpleAppViewToolbar_Full hasParent={false} />);
            expect(wrapper.find('PaperIconButton[icon="arrow-back"]')).to.not.exist;
        });
    });
});

describe('<SimpleAppViewToolbar_Dialog/>', function() {
    describe('if "title" is set', function() {
        it('renders with a title', function() {
            const title = "test--simpleappviewtoolbar-title";
            const wrapper = shallow(<SimpleAppViewToolbar_Dialog title={title} />);
            expect(wrapper.find('div[main-title]')).to.exist;
            expect(wrapper.find('div[main-title]')).to.have.text(title);
        });
    });

    describe('if "title" is not set', function() {
        it('renders with an empty title', function() {
            const wrapper = shallow(<SimpleAppViewToolbar_Dialog />);
            expect(wrapper.find('div[main-title]')).to.exist;
            expect(wrapper.find('div[main-title]')).to.not.have.text();
        });
    });

    it('renders with a close button', function() {
        const wrapper = shallow(<SimpleAppViewToolbar_Dialog />);
        expect(wrapper.find('PaperIconButton[icon="close"]')).to.exist;
    });

    it('calls onCloseClick when the close button is pressed', function() {
        const onCloseClick = spy();
        const wrapper = shallow(<SimpleAppViewToolbar_Dialog hasParent={true} onCloseClick={onCloseClick} />);
        wrapper.find('PaperIconButton[icon="close"]').simulate('click');
        expect(onCloseClick).to.have.been.called;
    });
});
