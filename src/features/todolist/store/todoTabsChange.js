import { TODO_TABS_CHANGE } from './constants';

/**
 * Tabs改变时
 * @param filter
 */
export function todoTabsChange(filter) {
    return {
        type: TODO_TABS_CHANGE,
        filter,
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case TODO_TABS_CHANGE: {
            return {
                ...state,
                filterType: action.filter,
            };
        }
        default:
            return state;
    }
}
