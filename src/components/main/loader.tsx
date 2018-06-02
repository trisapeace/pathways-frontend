import React from 'react';
import { Text } from 'native-base';

export interface LoaderProps {
    readonly loading: boolean;
}

export const withLoader = <ChildProps extends object>(ChildComponent: React.ComponentType<ChildProps>):
    React.ComponentType<ChildProps & LoaderProps> => (
        class LoaderComponent extends React.Component<ChildProps & LoaderProps> {
            render() {
                const { loading, ...props } = this.props as LoaderProps;
                return loading ? this.renderLoading() : this.renderLoaded(props as ChildProps);
            }

            renderLoading(): JSX.Element {
                return <Text>Loading...</Text>;
            }

            renderLoaded(props: ChildProps): JSX.Element {
                return <ChildComponent {...props} />;
            }
        }
    );
