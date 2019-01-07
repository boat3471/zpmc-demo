import { connect } from 'react-redux';
import View from './TodoPaginationView';
import { todoPageChange, todoUpdateList } from '../store/todo.actions';

const mapStateToProps = (state) => {
    const todo = state.todo;
    return {
        pageIndex: todo.pageIndex,
        totalSize: todo.totalSize,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePageIndex(pageIndex, totalSize) {
            dispatch(todoPageChange(pageIndex, totalSize));
            dispatch(todoUpdateList({ pageIndex, totalSize }));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
