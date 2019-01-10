import { connect } from 'react-redux';
import { todoAddItem, todoAddItemFetch, todoSearchListFetch } from '../store/todo.actions';
import View from './AddTodoView';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItemSubmit(e, input) {
            dispatch(todoAddItem(input.value));
            input.value = '';
        },
        addItemSubmitAsync(e, input) {
            dispatch(todoAddItemFetch(input.value));
            input.value = '';
        },
        search(e, input) {
            dispatch(todoSearchListFetch(input.value));
            input.value = '';
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
