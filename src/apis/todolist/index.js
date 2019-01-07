import mock from '-mock/mock.js';

export const ajaxLoadTodoList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock.todoList);
        }, 2000);
    });
};

export const ajaxAddItem = (name) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: mock.nextTodoId++,
                name: name,
            });
        }, 2000);
    });
};

export const ajaxSearch = (key) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(key);
        }, 2000);
    });
};
