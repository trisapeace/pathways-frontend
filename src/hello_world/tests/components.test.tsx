import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';

it('a test', () => {

    function MyComponent() {
        return (
            <div>
                <SubComponent foo='bar' />
                <p className='my'>Hello</p>
            </div>
        )
    }

    interface SubComponentProps {
        foo: string
    }

    const SubComponent: React.SFC<SubComponentProps> = (props: SubComponentProps) => {
        return (
            <p className='sub'>{props.foo}</p>
        );
    }

    const testRenderer = TestRenderer.create(<MyComponent />);
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
    expect(testInstance.findByProps({ className: 'sub' }).children).toEqual(['bar']);
});
