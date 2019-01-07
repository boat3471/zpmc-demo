import { MENUS_LOAD } from './constants';

const initialState = {};

export function load() {
    return {
        type: MENUS_LOAD,
    };
}

export function loadReducer(state = initialState, action) {
    switch (action.type) {
        case MENUS_LOAD:
            return {
                ...state,
            };
        default:
            return state;
    }
}
