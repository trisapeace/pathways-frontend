import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import LinkButton from '../LinkButton';

describe('<LinkButton/>', function() {
    it('should create children with provided className prop', function() {
        const className = "test--linkbutton-class";
        const wrapper = shallow(<LinkButton className={className} />);
        expect(wrapper.children().first().hasClass(className));
    });

    describe('if "replace" is false', function() {
        it('should change router location on click', function() {
        });
    });

    describe('if "replace" is true', function() {
        it('should replace router location on click', function() {
        });
    });
});
