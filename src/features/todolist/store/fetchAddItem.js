import { put, call, takeEvery } from 'redux-saga/effects';
import { TODO_ADD_ITEM_ASYNC } from './constants';
import { ajaxAddItem } from '-apis/todolist';
import { todoAddItem } from './todoAddItem';
import { todoUpdateList } from './todoUpdateList';
import { todoShowLoading } from '-src/features/todolist/store/todoShowLoading';

/**
 * 异步添加一个TODO
 * @param name
 * @returns {*}
 */
export function fetchAddItem(name) {
    return {
        type: TODO_ADD_ITEM_ASYNC,
        name: name,
    };
}

function* worker(action) {
    yield put(todoShowLoading(true, '添加中。。。'));
    let item = yield call(ajaxAddItem, action.name);
    yield put(todoAddItem(action.name, item));
    yield put(todoUpdateList());
    yield put(todoShowLoading(false));
}

export function* watchAddItem() {
    yield takeEvery(TODO_ADD_ITEM_ASYNC, worker);
}
