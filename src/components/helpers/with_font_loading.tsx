import React, { ReactNode } from 'react';
import { Text } from 'native-base';
import { Font } from 'expo';

interface FontState {
    loading: boolean
};

/**
 * This HOC handles the font loading hack needed for the app to come up correctly on android devices.
 */
export function withFontLoading<Props>(ChildComponent: React.ComponentType<Props>) {
    return class extends React.Component<Props, FontState> {
        constructor(props: Props) {
            super(props);
            this.state = {
                loading: true,
            }
        }

        async componentDidMount() {
            await Font.loadAsync({
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            });
            this.setState({ loading: false });
        }

        render(): ReactNode {
            return this.state.loading ? this.renderLodading() : this.renderChildComponent();
        }

        renderLodading = (): ReactNode => (
            <Text>Loading fonts...</Text>
        )

        renderChildComponent = (): ReactNode => (
            <ChildComponent {...this.props} />
        )
    }
}
