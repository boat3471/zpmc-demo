import { all } from 'redux-saga/effects';
import todo from '-src/features/todolist/store/todo.saga';

export default function* rootSaga() {
    yield all([
        ...todo,
    ]);
}
