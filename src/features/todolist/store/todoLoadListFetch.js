import { put, call, takeEvery } from 'redux-saga/effects';
import { TODO_FETCH_LOAD_LIST } from './constants';
import { todoUpdateList, todoPageChange, todoShowLoading } from './todo.actions';
import { ajaxLoadTodoList } from '-apis/todolist';

/**
 * 查询待办
 */
export function todoLoadListFetch(pageSize, pageIndex, key) {
    return {
        type: TODO_FETCH_LOAD_LIST,
        pageSize,
        pageIndex,
        key,
    };
}

function* worker(action) {
    yield put(todoShowLoading(true));
    let mockList = yield call(ajaxLoadTodoList, action);
    yield put(todoUpdateList({ mockList }));
    yield put(todoPageChange(1, mockList.length));
    yield put(todoShowLoading(false));
}

export function* watchLoadList() {
    yield takeEvery(TODO_FETCH_LOAD_LIST, worker);
}
