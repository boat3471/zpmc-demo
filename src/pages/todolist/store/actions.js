import debug from '-lib/debugLog';
import * as CONSTANTS from './constants';

let nextTodoId = 0;

export const addItem = (text) => {
    debug.action('addItem', text);
    return {
        type: CONSTANTS.TODO_ADD_ITEM,
        id: nextTodoId++,
        text,
    };
};

export const toggleItem = (id) => {
    debug.action('toggleItem', id);
    return {
        type: CONSTANTS.TODO_TOGGLE_ITEM,
        id,
    };
};

export const filter = (filter) => {
    debug.action('filter', filter);
    return {
        type: CONSTANTS.TODO_FILTER,
        filter,
    };
};
