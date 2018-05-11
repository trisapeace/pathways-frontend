import React from 'react';
import { View, Text, Button } from 'react-native';
import { withI18n, Trans } from '@lingui/react';
import { Locale, LanguageSwitcherProps } from './view_model';

// tslint:disable-next-line:no-class
class Switcher extends React.Component<LanguageSwitcherProps> {

    // constructor(props: LanguageSwitcherProps) {
    //     super(props); // tslint:disable-line:no-expression-statement
    //     // tslint:disable-next-line:no-this no-expression-statement
    //     this.state = {
    //         isRTL: I18nManager.isRTL,
    //     };
    // }

    render(): JSX.Element {
        const {i18n, setLocale, currentLocale, locales}: LanguageSwitcherProps = this.props; // tslint:disable-line:no-this
        // const toggleRTL = this.toggleRTL.bind(this); // tslint:disable-line:no-this
        // const toggleRTLTitle = currentLocale.isRTL ? i18n.t`Disable RTL` : i18n.t`Force RTL`; // tslint:disable-line:no-this
        console.log('[render]', currentLocale); // tslint:disable-line:no-expression-statement
        return (
            <View>
                <View style={{ alignItems: 'center' }}>
                    {locales.map((locale: Locale) => (
                        <Button key={locale.code}
                                title={locale.label}
                                onPress={(): void => setLocale(locale)}
                                disabled={locale.code === currentLocale.code} />
                    ))}
                </View>
                <View style={{alignItems: 'flex-start'}}>
                    <Text><Trans>This sentence exists to demonstrate the translation functionality that exists in this application.</Trans></Text>
                </View>
            </View>
        );
    }

    // toggleRTL(): void {
    //     // tslint:disable-next-line:no-this
    //     this.setState({ isRTL: !this.state.isRTL }, () => {
    //         console.log({was: !this.state.isRTL, now: this.state.isRTL}, I18nManager.isRTL);
    //         I18nManager.forceRTL(this.state.isRTL); // tslint:disable-line:no-expression-statement
    //         Expo.Util.reload(true);
    //     });
    // }

}

const I18nLanguageSwitcher = withI18n()(Switcher);

export const LanguageSwitcher = I18nLanguageSwitcher;
