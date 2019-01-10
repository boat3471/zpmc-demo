import React from 'react';
// import TodoItem from './TodoItem';

const TodoListView = ({ todoList, toggleState }) => (
    <ul>
        {
            todoList.map(item => (
                <li key={item.id}>
                    <span style={{display: 'inline-block', width: 200}}>{item.text}</span>
                    <a onClick={() => toggleState(item)}>
                        {item.completed ? '激活' : '结束'}
                    </a>
                </li>
            ))
        }
    </ul>
);
export default TodoListView;
