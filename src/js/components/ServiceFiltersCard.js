import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import Card from 'material-ui/Card';
import EditIcon from 'material-ui-icons/Edit';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import {LinearProgress} from 'material-ui/Progress';
import {withStyles} from 'material-ui/styles';

import styles from 'styles';

@inject('apiStore')
@observer
@withStyles(styles)
export default class ServiceFiltersCard extends React.Component {
    static contextTypes = {
        map: PropTypes.object.isRequired
    };

    static propTypes = {
        apiStore: PropTypes.object.isRequired,
        onEditOpen: PropTypes.func,
        classes: PropTypes.object.isRequired
    };

    componentWillMount() {
        const {map} = this.context;
        map.on('layeradd layerremove', this._onLayersChange.bind(this));
    }

    render() {
        const {map} = this.context;
        const {apiStore, classes} = this.props;

        const isLoading = !apiStore.isReady || apiStore.isLoading;

        const loadingElem = (isLoading) ? <LinearProgress /> : null;

        const mapNotice = [];

        const prefix = `<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>`;
        mapNotice.push(prefix);

        const attributions = [];
        map.eachLayer(
            (layer) => {
                const attribution = layer.getAttribution();
                if (attribution) {
                    attributions.push(attribution);
                }
            }
        );
        mapNotice.push(attributions.join(', '));

        return (
            <Card className="service-map-overlay" elevation={2}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container direction="row" align="center" justify="space-between">
                            <Grid item>
                                <Typography type="body1" component="p">
                                    Summarize selected map filters here.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton aria-label="Filter" onClick={this._onEditClick.bind(this)}>
                                    <EditIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography type="caption" component="p">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: mapNotice.join(' | ')
                                }}
                            />
                        </Typography>
                    </Grid>
                    <Grid item>
                        {loadingElem}
                    </Grid>
                </Grid>
            </Card>
        );
    }

    _onEditClick() {
        this.props.onEditOpen();
    }

    _onLayersChange() {
        this.setState({_changed: true});
    }
}
