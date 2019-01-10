import { connect } from 'react-redux';
import { toggleItem } from '../store/actions';
import * as CONSTANTS from '../store/constants';
import debug from '-lib/debugLog';
import View from './TodoListView';

const NAME = 'TodoList';

const filterTodo = ({ todoList, filterType }) => {
    switch (filterType) {
        case CONSTANTS.TODO_SHOW_ALL:
            return todoList;
        case CONSTANTS.TODO_SHOW_ACTIVE:
            return todoList.filter((item) => item.completed);
        case CONSTANTS.TODO_SHOW_COMPLETE:
            return todoList.filter((item) => !item.completed);
        default:
            throw new Error('Unknown filterType: ' + filterType);
    }
};

const mapStateToProps = (state) => {
    debug.update(NAME, state);
    return {
        todoList: filterTodo(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleState(item) {
            dispatch(toggleItem(item.id));
            debug.dispatch(NAME, 'submit', item);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
