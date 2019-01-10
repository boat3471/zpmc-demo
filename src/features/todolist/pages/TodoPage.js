import React from 'react';
import TodoNav from './../compontents/TodoNav';
import AddTodo from './../compontents/AddTodo';
import TodoList from './../compontents/TodoList';
import TodoPagination from './../compontents/TodoPagination';
import { Spin } from 'antd';

import './TodoPage.less';

const TodoPage = ({ loading, loadingTip }) => {
    return (
        <Spin tip={loadingTip || '加载中。。。'} delay={100} spinning={loading}>
            <div className="todo-list-main">
                <AddTodo />
                <TodoNav />
                <TodoList />
                <TodoPagination />
            </div>
        </Spin>
    );
};

export default TodoPage;
