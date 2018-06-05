import React, { ReactElement } from 'react';
import { Text } from 'native-base';

export interface LoaderProps {
    readonly loading: boolean;
}

export const withLoader =
    <ChildProps extends object>
        (ChildComponent: React.ComponentType<ChildProps>): React.SFC<ChildProps & LoaderProps> =>
        ({ loading, ...props }: LoaderProps): ReactElement<ChildProps> => (
            loading ? <Text>Loading...</Text> : <ChildComponent {...props} />
        );
