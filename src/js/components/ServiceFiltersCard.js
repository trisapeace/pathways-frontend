import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import {PaperCard} from 'polymer/paper-card';
import {PaperChip} from 'polymer/paper-chip';
import {PaperIconButton} from 'polymer/paper-icon-button';
import {PaperProgress} from 'polymer/paper-progress';

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

        const loadingElem = isLoading ? <PaperProgress indeterminate /> : null;

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
                <PaperChip key={`filter-chip-${key}`} animate={true} multi-line={true} removable={true} onRemove={this._onFilterChipRemove.bind(this, key)}>
                    <div slot="label" className="label">
                        {key}
                    </div>
                    <div slot="caption" className="caption">
                        {value}
                    </div>
                </PaperChip>
            )
        );

        const selectedFilters = (filterElems.length > 0) ? (
            <span>
                {filterElems}
            </span>
        ) : (
            <span>
                No filters selected.
            </span>
        )

        return (
            <PaperCard className="service-map-overlay">
                <div className="card-content">
                    <div className="filters-container">
                        {selectedFilters}
                        <PaperIconButton icon="editor:mode-edit" onClick={this._onEditButtonClick.bind(this)} />
                    </div>
                    <div>
                        <small
                            dangerouslySetInnerHTML={{
                                __html: mapNotice.join(' | ')
                            }}
                        />
                    </div>
                    {loadingElem}
                </div>
            </PaperCard>
        );
    }

    _onMapLayersChange() {
        this.setState({_changed: true});
    }

    _onEditButtonClick() {
        this._onEditOpen();
    }

    _onFilterChipRemove(filter) {
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
