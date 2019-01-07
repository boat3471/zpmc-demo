import React from 'react';
import { Icon, Checkbox } from 'antd';
import { message } from 'antd';

const TodoItemView = ({ item, toggleStatus, deleteItem }) => {
    return (
        <div className={`todo-item ${item.completed ? 'completed' : ''}`}>
            <Icon type="bars" />
            <Checkbox defaultChecked={item.completed}
                onChange={(e) => toggleStatus(item, e.target.checked)} />
            <div className="content">
                <span className="name">{item.name}（{item.id}）</span>
                <span className="date">{item.createShowTime}</span>
            </div>
            <span className="btn-del" onClick={() => { deleteItem(item); message.success('asdas');}}>
                <Icon type="close" />
            </span>
        </div>
    );
};
export default TodoItemView;
