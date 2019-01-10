import React from 'react';
import TodoLoadable from './pages/TodoLoadable.js';

// 动态打包
export class Todo extends React.Component {
    render() {
        return (
            <TodoLoadable />
        );
    }
}

// 合并打包
// export { default as Todo } from './pages/Todo';
