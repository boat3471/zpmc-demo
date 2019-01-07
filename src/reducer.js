import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as menuReducer } from './features/common/store/menus.reducer';
import { reducer as todoListReducer, todoNotification } from './features/todolist/store/todo.reducer';

export const reducer = combineReducers({
    router: routerReducer,
    todo: todoListReducer,
    menus: menuReducer,
});

export const notification = (store) => {
    todoNotification(store);
};

