import { StyleSheet } from 'react-native';

export const taskDetail = StyleSheet.create({
    wrapper: {
        borderBottomColor: '#d6d7da',
        borderBottomWidth: 2,
        flexDirection: 'row',
        paddingVertical: 10,
    },
    leftColumn: {
        flex: 1,
        flexDirection: 'row',
    },
    centerColumn: {
        flex: 4,
        flexDirection: 'row',
    },
    rightColumn: {
        flex: 1,
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

export const tag = StyleSheet.create({
    tag: {
        borderRadius: 20,
        margin: 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    tagText: {
        color: 'white',
    },
});