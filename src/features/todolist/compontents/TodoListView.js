import React from 'react';
import TodoItem from './TodoItemView';

const TodoListView = (state) => (
    <div className="todo-list">
        {
            state.list.map(item => (
                <TodoItem item={item} {...state} key={item.id} />
            ))
        }
    </div>
);
export default TodoListView;
