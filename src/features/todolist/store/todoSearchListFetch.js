import { put, call, takeEvery } from 'redux-saga/effects';
import { TODO_FETCH_SEARCH_LIST } from './constants';
import { todoShowLoading, todoUpdateList } from './todo.actions';
import { ajaxSearch } from '-apis/todolist';

/**
 * 查询
 */
export function todoSearchListFetch(key) {
    return {
        type: TODO_FETCH_SEARCH_LIST,
        key,
    };
}

function* worker(action) {
    yield put(todoShowLoading(true, '查询中。。。'));
    let key = yield call(ajaxSearch, action.key);
    yield put(todoUpdateList({ key }));
    yield put(todoShowLoading(false));
}

export function* watchSearchList() {
    yield takeEvery(TODO_FETCH_SEARCH_LIST, worker);
}
