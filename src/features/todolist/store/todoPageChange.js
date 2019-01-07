import { TODO_PAGE_CHANGE } from './constants';

/**
 * 分页编号改变
 */
export function todoPageChange(page, total) {
    return {
        type: TODO_PAGE_CHANGE,
        pageIndex: page || 1,
        totalSize: total,
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case TODO_PAGE_CHANGE: {
            return {
                ...state,
                pageIndex: action.pageIndex,
                totalSize: action.totalSize,
            };
        }
        default:
            return state;
    }
}
