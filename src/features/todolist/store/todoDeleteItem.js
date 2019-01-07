import { TODO_DELETE_ITEM } from './constants';

/**
 * 删除待办
 * @param id
 * @returns {*}
 */
export function todoDeleteItem(id) {
    return {
        type: TODO_DELETE_ITEM,
        id,
    };
}


function caseDeleteItem(state, action) {
    let newList = state.list.filter((item) => {
        return item.id !== action.id;
    });
    let mockList = state.mockList.filter((item) => {
        return item.id !== action.id;
    });
    return {
        ...state,
        list: newList,
        mockList: mockList,
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case TODO_DELETE_ITEM:
            return caseDeleteItem(state, action);
        default:
            return state;
    }
}
