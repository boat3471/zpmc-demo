import { connect } from 'react-redux';
import { todoToggleStatus, todoDeleteItem } from '../store/todo.actions';
import * as CONSTANTS from '../store/constants';
import View from './TodoItemView';

const filterTodo = ({ list, filterType }) => {
    switch (filterType) {
        case CONSTANTS.TODO_FILTER_ALL:
            return list;
        case CONSTANTS.TODO_FILTER_ACTIVATED:
            return list.filter((item) => item.completed);
        case CONSTANTS.TODO_FILTER_COMPLETED:
            return list.filter((item) => !item.completed);
        default:
            throw new Error('Unknown filterType: ' + filterType);
    }
};

const mapStateToProps = ({ todo }) => {
    return {
        list: filterTodo(todo),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleStatus(item) {
            dispatch(todoToggleStatus(item));
        },
        deleteItem(item) {
            dispatch(todoDeleteItem(item));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
