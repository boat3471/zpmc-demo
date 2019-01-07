import {
    TODO_FILTER_ALL,
    TODO_FILTER_ACTIVATED,
    TODO_FILTER_COMPLETED,
} from './constants';

export function filterTodo(list, filterType, key = '') {
    let newList = filterTodoByType(list, filterType);
    if (key) {
        newList = newList.filter(item => item.name.indexOf(key) >= 0);
    }
    return newList.sort(todoListSort);
}

export function filterTodoByType(list, filterType) {
    let newList;
    switch (filterType) {
        case TODO_FILTER_ALL:
            newList = list;
            break;
        case TODO_FILTER_ACTIVATED:
            newList = list.filter((item) => !item.completed);
            break;
        case TODO_FILTER_COMPLETED:
            newList = list.filter((item) => item.completed);
            break;
        default:
            throw new Error('Unknown filterType: ' + filterType);
    }
    return newList;
}

export function filterTodoByPage(list, pageIndex, pageSize = 10) {
    let newList = list.sort(todoListSort);

    const startIndex = pageIndex * pageSize;
    const endIndex = (pageIndex + 1) * pageSize;

    return newList.slice(startIndex, endIndex);
}

/**
 * 待办列表排序
 * @param a
 * @param b
 */
export function todoListSort(a, b) {
    if (a.completed > b.completed) {
        return 1;
    } else if (a.completed < b.completed) {
        return -1;
    } else {
        if (a.createTime < b.createTime) {
            return 1;
        } else if (a.createTime > b.createTime) {
            return -1;
        } else {
            return 0;
        }
    }
}
