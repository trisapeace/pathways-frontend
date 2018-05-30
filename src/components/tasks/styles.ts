import { StyleSheet } from 'react-native';

export const taskDetail = StyleSheet.create({
    wrapper: {
        borderTopColor: '#d6d7da',
        borderTopWidth: 2,
        flexDirection: 'row',
        padding: 10,
    },
    sideColumn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    centerColumn: {
        flex: 4,
        flexDirection: 'row',
    },
    stackedItems: {
        flex: 1,
        flexDirection: 'column',
    },
    inlineItems: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
