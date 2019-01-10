import { connect } from 'react-redux';
import { addItem } from '../store/actions';
import debug from '-lib/debugLog';
import View from './AddTodoView';

const NAME = 'AddTodo';

const mapStateToProps = (state) => {
    debug.update(NAME, state);
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit(e, input) {
            dispatch(addItem(input.value));
            debug.dispatch(NAME, 'submit', input.value);
            input.value = ''
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
