require('paper-card/paper-card.html');
require('paper-icon-button/paper-icon-button.html');

import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import Card from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import EditIcon from 'material-ui-icons/Edit';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import {LinearProgress} from 'material-ui/Progress';

@inject('locationsStore')
@observer
export default class ServiceFiltersCard extends React.Component {
    static contextTypes = {
        map: PropTypes.object.isRequired
    };

    static propTypes = {
        locationsStore: PropTypes.object.isRequired,
        data: PropTypes.object,
        onDataChange: PropTypes.func,
        onEditOpen: PropTypes.func
    };

    componentWillMount() {
        const {map} = this.context;
        map.on('layeradd layerremove', this._onMapLayersChange.bind(this));
    }

    render() {
        const {map} = this.context;
        const {locationsStore, data} = this.props;

        const isLoading = locationsStore.isRequest('fetching');

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

        const filterElems = Object.entries(data || {}).filter(
            ([key, value]) => Boolean(key && value)
        ).map(
            ([key, value]) => (
                <Chip
                    key={`filter-chip-${key}`}
                    label={<span><strong>{key}:</strong> {value}</span>}
                    onRequestDelete={this._onFilterChipDelete.bind(this, key)}
                />
            )
        );

        const filtersContainer = (filterElems.length > 0) ? (
            <div>
                {filterElems}
            </div>
        ) : (
            <Typography type="body1" component="p">
                No filters selected.
            </Typography>
        )

        return (
            <paper-card className="service-map-overlay">
                <Grid container direction="column">
                    <Grid item>
                        <Grid container direction="row" align="center" justify="space-between">
                            <Grid item>
                                {filtersContainer}
                            </Grid>
                            <Grid item>
                                <IconButton aria-label="Filter" onClick={this._onEditButtonClick.bind(this)}>
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
            </paper-card>
        );
    }

    _onMapLayersChange() {
        this.setState({_changed: true});
    }

    _onEditButtonClick() {
        this._onEditOpen();
    }

    _onFilterChipDelete(filter) {
        const data = {...this.props.data};
        data[filter] = undefined;
        this._onDataChange(data);
    }

    _onDataChange(data) {
        this.props.onDataChange(data);
    }

    _onEditOpen() {
        this.props.onEditOpen();
    }
}
