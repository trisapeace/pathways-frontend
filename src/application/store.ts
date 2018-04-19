import { createStore } from 'redux';
import { rootReducer } from '../stores';
export { Store } from '../stores';

export const store = createStore(rootReducer);
