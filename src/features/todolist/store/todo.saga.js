import { fork } from 'redux-saga/effects';

import { watchAddItem } from './fetchAddItem';
import { watchLoadList } from './fetchLoadList';
import { watchSearchList } from './fetchSearchList';

export default [
    fork(watchAddItem),
    fork(watchLoadList),
    fork(watchSearchList),
];
