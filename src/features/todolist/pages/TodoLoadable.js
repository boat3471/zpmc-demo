import React from 'react';
import loadable from 'react-loadable';

const TodoLoadable = loadable({
    loader: () => import('./Todo'),
    loading() {
        return (
            <div>Loading...</div>
        );
    },
});

export default TodoLoadable;
