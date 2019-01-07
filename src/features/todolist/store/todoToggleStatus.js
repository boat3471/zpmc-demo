import { TODO_TOGGLE_STATUS } from './constants';
import { todoListSort } from './common';

/**
 * 切换待办完成状态
 * @param id 待办项ID
 * @param status 状态
 * @returns {*}
 */
export function todoToggleStatus(id, status) {
    return {
        type: TODO_TOGGLE_STATUS,
        id,
        status,
    };
}

function caseToggleStatus(state, action) {
    let newList = state.list.map(item => {
        if (item.id === action.id) {
            item.completed = action.status;
        }
        return { ...item };
    });

    return {
        ...state,
        list: newList.sort(todoListSort),
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case TODO_TOGGLE_STATUS:
            return caseToggleStatus(state, action);
        default:
            return state;
    }
}
