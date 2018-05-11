import React from 'react';
import { I18nManager, View, Text, Button } from 'react-native';
import { withI18n, Trans } from '@lingui/react';

export interface Props {
    readonly currentLocale: string;
    readonly locales: ReadonlyArray<Locale>;
}

export interface Actions {
    setLocale(langCode: string): void;
}

I18nManager.allowRTL(true);

// tslint:disable-next-line:no-class
class Switcher extends React.Component<I18nProps & Props & Actions> {

    constructor(props: I18nProps & Props & Actions) {
        super(props); // tslint:disable-line:no-expression-statement
        // tslint:disable-next-line:no-this no-expression-statement
        this.state = {
            isRTL: I18nManager.isRTL,
        };
    }

    render(): JSX.Element {
        console.log('[render]', this.state);
        const {i18n, setLocale, currentLocale, locales}: I18nProps & Props & Actions = this.props; // tslint:disable-line:no-this
        const toggleRTL = this.toggleRTL.bind(this); // tslint:disable-line:no-this
        const toggleRTLTitle = this.state.isRTL ? i18n.t`Disable RTL` : i18n.t`Force RTL`; // tslint:disable-line:no-this
        return (
            <View>
                <View style={{ alignItems: 'center' }}>
                    {locales.map((locale: Locale) => (
                        <Button key={locale.code}
                                title={locale.label}
                                onPress={(): void => setLocale(locale.code)}
                                disabled={locale.code === currentLocale} />
                    ))}
                    <Button title={toggleRTLTitle} onPress={toggleRTL} />
                </View>
                <View style={{alignItems: 'flex-start'}}>
                    <Text><Trans>This sentence exists to demonstrate the translation functionality that exists in this application.</Trans></Text>
                </View>
            </View>
        );
    }

    toggleRTL(): void {
        // tslint:disable-next-line:no-this
        this.setState({ isRTL: !this.state.isRTL }, () => {
            console.log({was: !this.state.isRTL, now: this.state.isRTL}, I18nManager.isRTL);
            I18nManager.forceRTL(this.state.isRTL); // tslint:disable-line:no-expression-statement
            Expo.Util.reload(true);
        });
    }

}

const I18nLanguageSwitcher = withI18n()(Switcher);

export const LanguageSwitcher = I18nLanguageSwitcher;
