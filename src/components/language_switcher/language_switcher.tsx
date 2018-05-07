import React from 'react';
import { View, Text, Button } from 'react-native';
import { Trans } from '@lingui/react';

export interface Props {
    currentLocale: string;
    locales: Array<Locale>;
}

export interface Actions {
    setLocale(langCode: string): void;
}

export const LanguageSwitcher = ({setLocale, currentLocale, locales}: Props & Actions): JSX.Element => {
    return (
        <View style={{ alignItems: 'center' }}>
            {locales.map((locale: Locale) => (
                <Button key={locale.code}
                        title={locale.label}
                        onPress={(): void => setLocale(locale.code)}
                        disabled={locale.code === currentLocale} />
            ))}
            <Text><Trans>jsLingui test</Trans></Text>
        </View>
    );
};