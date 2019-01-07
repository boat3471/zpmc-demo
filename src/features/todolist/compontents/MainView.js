import React from 'react';
import TodoNav from './TodoNav';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoPagination from './TodoPagination';
import { Spin } from 'antd';

import './MianView.less';

const MainView = ({ loading, loadingTip }) => {
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

export default MainView;
