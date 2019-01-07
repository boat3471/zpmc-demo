import { put, take } from 'redux-saga/effects';
import { TODO_SEARCH, UPDATE_LIST } from './constants';
import { ajaxSearch } from '-apis/todolist';

/**
 * 查询待办
 * @param key 关键字
 * @returns {*}
 */
export function todoSearch(key) {
    return {
        type: TODO_SEARCH,
        key
    };
}

export function* watchTodoSearch() {
    const action = yield take(TODO_SEARCH);
    let res = yield ajaxSearch(action.name);
    yield put({
        type: UPDATE_LIST,
        ...res,
    });
}
