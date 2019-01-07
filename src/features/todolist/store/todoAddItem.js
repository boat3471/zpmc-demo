import moment from 'moment';
import mock from '-mock/mock.js';
import { TODO_ADD_ITEM } from './constants';

/**
 * 添加一个TODO
 * @param name
 * @param item
 * @returns {*}
 */
export function todoAddItem(name, item) {
    return item ? {
        type: TODO_ADD_ITEM,
        ...item,
    } : {
        type: TODO_ADD_ITEM,
        id: mock.nextTodoId++,
        name: name,
    };
}

function caseAddItem(state, action) {
    const date = moment();
    const mockList = [
        ...state.mockList,
        {
            id: action.id,
            name: action.name,
            createTime: +date,
            createShowTime: date.format('YYYY-MM-DD HH:mm:ss'),
            completed: false,
        },
    ];
    return {
        ...state,
        mockList: mockList,
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case TODO_ADD_ITEM:
            return caseAddItem(state, action);
        default:
            return state;
    }
}
