import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy, stub} from 'sinon';

import MapAttribution from '../MapAttribution';

const mapMock = {
    on: stub(),
    eachLayer: stub()
};

const LEAFLET_ATTRIBUTION = '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>';

describe('<MapAttribution/>', function() {
    const options = {
        context: {
            map: mapMock
        }
    };

    const eventFn = new Map();

    beforeEach(function() {
        mapMock.on.callsFake(
            (events, fn) => {
                for (const event of events.split(' ')) {
                    eventFn.set(event, fn);
                }
            }
        );
    });

    afterEach(function() {
        mapMock.on.reset();
        eventFn.clear();
    });

    describe('with "map" in context', function() {
        it('updates state on "layeradd"', function() {
            const wrapper = shallow(<MapAttribution />, options);
            expect(mapMock.on).to.have.been.called;
            expect(eventFn).to.include.key('layeradd');
            expect(wrapper).to.not.include.state('_changed', true);
            eventFn.get('layeradd')();
            expect(wrapper).to.include.state('_changed', true);
        });

        it('updates state on "layerremove"', function() {
            const wrapper = shallow(<MapAttribution />, options);
            expect(mapMock.on).to.have.been.called;
            expect(eventFn).to.include.key('layerremove');
            expect(wrapper).to.not.include.state('_changed', true);
            eventFn.get('layerremove')();
            expect(wrapper).to.include.state('_changed', true);
        });
    });

    describe('with "map" in context and layers included', function() {
        const testAttributions1 = [
            "Test attribution 1",
            "Test attribution 2"
        ];

        const testAttributions2 = [
            "Test attribution 2"
        ];

        const testLayers1 = testAttributions1.map(
            (text) => ({
                getAttribution: () => text
            })
        );

        const testLayers2 = testAttributions2.map(
            (text) => ({
                getAttribution: () => text
            })
        );

        beforeEach(function() {
            mapMock.eachLayer.callsFake(
                (fn) => Array.from(testLayers1).forEach(fn)
            );
        });

        afterEach(function() {
            mapMock.eachLayer.reset();
        });

        it('lists attribution text from each layer', function() {
            const wrapper = shallow(<MapAttribution />, options);

            mapMock.eachLayer.callsFake(
                (fn) => Array.from(testLayers1).forEach(fn)
            );

            expect(wrapper.find('.map-attribution')).to.exist;
            expect(wrapper.find('.map-attribution').children('small')).to.exist;
            expect(wrapper.find('.map-attribution').children('small')).to.have.html(
                `<small>${LEAFLET_ATTRIBUTION} | ${testAttributions1.join(', ')}</small>`
            );
        });

        it('updates attribution text after map layers change', function() {
            const wrapper = shallow(<MapAttribution />, options);

            mapMock.eachLayer.callsFake(
                (fn) => Array.from(testLayers1).forEach(fn)
            );

            expect(wrapper.find('.map-attribution')).to.exist;
            expect(wrapper.find('.map-attribution').children('small')).to.exist;
            expect(wrapper.find('.map-attribution').children('small')).to.have.html(
                `<small>${LEAFLET_ATTRIBUTION} | ${testAttributions1.join(', ')}</small>`
            );

            mapMock.eachLayer.callsFake(
                (fn) => Array.from(testLayers2).forEach(fn)
            );

            eventFn.get('layerremove')();
            wrapper.update();

            expect(wrapper.find('.map-attribution')).to.exist;
            expect(wrapper.find('.map-attribution').children('small')).to.exist;
            expect(wrapper.find('.map-attribution').children('small')).to.have.html(
                `<small>${LEAFLET_ATTRIBUTION} | ${testAttributions2.join(', ')}</small>`
            );
        });
    });
});
