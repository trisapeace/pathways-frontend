import LocationsStore from 'stores/remote/LocationsStore';
import PathwaysStore from 'stores/remote/PathwaysStore';

const locationsStore = new LocationsStore();
const pathwaysStore = new PathwaysStore();

export default {
    locationsStore,
    pathwaysStore
};
