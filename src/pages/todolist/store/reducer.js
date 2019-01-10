import { combineReducers } from 'redux';
import debug from '-lib/debugLog';
import * as CONSTANTS from './constants';

/**
 * TODO列表操作
 * @param state
 * @param action
 * @returns {*}
 */
const todoList = (state = [], action) => {
    debug.reducer('todoList', state, action);
    switch (action.type) {
        case CONSTANTS.TODO_ADD_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                },
            ];
        case CONSTANTS.TODO_TOGGLE_ITEM:
            return state.map(item => {
                return item.id === action.id ? { ...item, completed: !item.completed } : item;
            });
        default:
            return state;
    }
};

/**
 * TODO列表筛选操作
 * @param state
 * @param action
 * @returns {*}
 */
const filterType = (state = CONSTANTS.TODO_SHOW_ALL, action) => {
    switch (action.type) {
        case CONSTANTS.TODO_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default combineReducers({
    todoList: todoList,
    filterType: filterType,
});

