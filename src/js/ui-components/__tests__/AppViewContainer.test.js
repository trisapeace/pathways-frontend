import {expect} from 'chai';

import AppViewContainer from '../AppViewContainer';

describe('<AppViewContainer/>', function() {
    it('dialogClose throws Error("Not implemented")', function() {
        const appViewContainer = new AppViewContainer();
        expect(appViewContainer.dialogClose).to.throw(Error, "Not implemented");
    });

    it('getChildContext returns an empty container and containerType', function() {
        const appViewContainer = new AppViewContainer();
        const childContext = appViewContainer.getChildContext();
        expect(childContext).to.deep.equal({
            container: appViewContainer,
            containerType: undefined
        });
    });
});
