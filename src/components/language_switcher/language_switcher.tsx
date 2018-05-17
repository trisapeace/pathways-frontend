import React from 'react';
import { View, Text, Button } from 'react-native';
import { withI18n, Trans } from '@lingui/react';
import { Locale, LanguageSwitcherProps } from './view_model';

const Switcher = (props: LanguageSwitcherProps): JSX.Element => {
    const {setLocale, currentLocale, locales}: LanguageSwitcherProps = props;
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
                <Text style={{textAlign: 'left'}}>
                    <Trans>This sentence exists to demonstrate the translation functionality that exists in this application.</Trans>
                </Text>
            </View>
        </View>
    );
};

const I18nLanguageSwitcher = withI18n()(Switcher);

export const LanguageSwitcher = I18nLanguageSwitcher;
