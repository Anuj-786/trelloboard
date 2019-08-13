import { createStore } from 'redux';
import rootReducer from './reducers';

export function store() {
    return createStore(rootReducer)
}

export default store