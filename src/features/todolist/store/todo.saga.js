import { fork } from 'redux-saga/effects';

import { watchAddItem } from './todoAddItemFetch';
import { watchLoadList } from './todoLoadListFetch';
import { watchSearchList } from './todoSearchListFetch';

export default [
    fork(watchAddItem),
    fork(watchLoadList),
    fork(watchSearchList),
];
