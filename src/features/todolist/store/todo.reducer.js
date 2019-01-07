import { reducer as todoAddItem } from './todoAddItem';
import { reducer as todoDeleteItem } from './todoDeleteItem';
import { reducer as todoToggleStatus } from './todoToggleStatus';
import { reducer as todoFilter } from './todoTabsChange';
import { reducer as todoPageChange } from './todoPageChange';
import { reducer as todoUpdateList } from './todoUpdateList';
import { reducer as todoShowLoading } from './todoShowLoading';

import initialState from './initialState';

import { fetchLoadList } from './fetchLoadList';


const reducers = [
    todoAddItem,
    todoDeleteItem,
    todoToggleStatus,
    todoFilter,
    todoUpdateList,
    todoPageChange,
    todoShowLoading,
];

let _store;

export function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        // Handle cross-topic actions here
        default:
            newState = state;
            break;
    }
    return reducers.reduce((s, r) => r(s, action, _store), newState);
}

export function todoNotification(store) {
    _store = store;
    store.dispatch(fetchLoadList());
}
