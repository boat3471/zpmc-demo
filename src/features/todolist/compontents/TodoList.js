import { connect } from 'react-redux';
import { todoToggleStatus, todoDeleteItem } from '../store/todo.actions';
import View from './TodoListView';

const mapStateToProps = (state) => {
    return {
        list: state.todo.list,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleStatus(item, checked) {
            dispatch(todoToggleStatus(item.id, checked));
        },
        deleteItem(item) {
            dispatch(todoDeleteItem(item.id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
