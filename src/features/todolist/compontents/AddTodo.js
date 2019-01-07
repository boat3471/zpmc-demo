import { connect } from 'react-redux';
import { todoAddItem, fetchAddItem, fetchSearchList } from '../store/todo.actions';
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
            dispatch(fetchAddItem(input.value));
            input.value = '';
        },
        search(e, input) {
            dispatch(fetchSearchList(input.value));
            input.value = '';
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
