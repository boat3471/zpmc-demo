import { TODO_UPDATE_LIST } from './constants';
import { filterTodo } from './common';

/**
 * 更新列表
 */
export function todoUpdateList(data = {}) {
    return {
        type: TODO_UPDATE_LIST,
        ...data,
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case TODO_UPDATE_LIST: {
            const mockList = action.mockList || state.mockList;
            const key = action.key;
            let newList = filterTodo(mockList, state.filterType, key);
            let pageIndex = 1;
            if (action.hasOwnProperty('filterType')) {
                pageIndex = state.pageIndex;
                newList = filterTodo(mockList, action.filterType, key);
            }
            let startIndex = 0;
            let endIndex = 10;
            if (action.hasOwnProperty('pageIndex')) {
                pageIndex = action.pageIndex;
                startIndex = (pageIndex - 1) * 10;
                endIndex = pageIndex * 10;
            }
            return {
                ...state,
                list: newList.slice(startIndex, endIndex),
                mockList: mockList,
                pageIndex: 1,
                totalSize: newList.length,
            };
        }
        default:
            return state;
    }
}
