/**
 * Global style definitions. Components can use these with the material-ui
 * withStyles decorator.
 */

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20
    },
    chipWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: -4
    },
    chip: {
        margin: 4
    }
});

export default styles;
