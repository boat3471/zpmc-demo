import React from 'react';
import * as CONSTANTS from './../store/constants';

const TodoList = ({ type, filter }) => (
    <div>
        <span>过滤: </span>
        <button disabled={type === CONSTANTS.TODO_SHOW_ALL}
            onClick={() => filter(CONSTANTS.TODO_SHOW_ALL)}>
            全部
        </button>
        <button disabled={type === CONSTANTS.TODO_SHOW_COMPLETE}
            onClick={() => filter(CONSTANTS.TODO_SHOW_COMPLETE)}>
            未完成
        </button>
        <button disabled={type === CONSTANTS.TODO_SHOW_ACTIVE}
            onClick={() => filter(CONSTANTS.TODO_SHOW_ACTIVE)}>
            已完成
        </button>
    </div>
);
export default TodoList;
