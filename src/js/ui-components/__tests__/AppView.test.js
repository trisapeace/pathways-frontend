import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy, stub} from 'sinon';

import AppView from '../AppView';

const routerMock = {
    history: {
        push: spy(),
        replace: spy(),
        go: spy(),
        goBack: spy(),
        goForward: spy()
    }
};

class AppView_Test extends AppView {
}

describe('<AppView/>', function() {
    describe('with no implementation', function() {
        it('renderFull throws Error("Not implemented")', function() {
            const appView = new AppView();
            expect(appView.renderFull).to.throw(Error, "Not implemented");
        });

        it('renderDialog throws Error("Not implemented")', function() {
            const appView = new AppView();
            expect(appView.renderDialog).to.throw(Error, "Not implemented");
        });

        it('sets title according to the "title" option', function() {
            const title = 'test--appview-title';
            const appView = new AppView({title});
            expect(appView.title).to.equal(title);
        });

        it('sets parent according to the "parent" option', function() {
            const parent = '/test--appview-parent';
            const appView = new AppView({parent});
            expect(appView.parent).to.equal(parent);
        });
    });

    describe('with containerType "full"', function() {
        const options = {
            context: {
                router: routerMock,
                containerType: 'full'
            }
        };

        beforeEach(function() {
            const renderFull = stub(AppView_Test.prototype, 'renderFull');
            renderFull.returns(null);
        });

        afterEach(function() {
            AppView_Test.prototype.renderFull.restore();
        });

        it('calls renderFull', function() {
            shallow(<AppView_Test />, options);
            expect(AppView_Test.prototype.renderFull).to.have.been.called;
        });

        it('passes props to renderFull', function() {
            const props = {
                testProp: 'test--appview-prop'
            };
            shallow(<AppView_Test {...props} />, options);
            expect(AppView_Test.prototype.renderFull).to.have.been.calledWith(props);
        });
    });

    describe('with containerType "dialog"', function() {
        const options = {
            context: {
                router: routerMock,
                containerType: 'dialog'
            }
        };

        before(function() {
            const renderDialog = stub(AppView_Test.prototype, 'renderDialog');
            renderDialog.returns(null);
        });

        after(function() {
            AppView_Test.prototype.renderDialog.restore();
        });

        it('calls renderDialog', function() {
            let renderError;
            shallow(<AppView_Test />, options);
            expect(AppView_Test.prototype.renderDialog).to.have.been.called;
        });

        it('passes props to renderDialog', function() {
            const props = {
                testProp: 'test--appview-prop'
            };
            shallow(<AppView_Test {...props} />, options);
            expect(AppView_Test.prototype.renderDialog).to.have.been.calledWith(props);
        });
    });

    describe('with containerType "test--invalid-container"', function() {
        const options = {
            context: {
                router: routerMock,
                containerType: 'test--invalid-container'
            }
        };

        it('render throws Error("Not implemented")', function() {
            expect(function() {
                shallow(<AppView_Test />, options);
            }).to.throw(Error, "Not implemented");
        });
    });
});
