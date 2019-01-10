import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';


import AddTodo from './compontents/AddTodo';
import TodoList from './compontents/TodoList';
import TodoFilter from './compontents/TodoFilter';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <AddTodo />
            <TodoList />
            <TodoFilter />
        </div>
    </Provider>,
    document.getElementById('app'),
);
