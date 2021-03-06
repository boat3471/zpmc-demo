import { connect } from 'react-redux';
import View from './TodoPage';

const mapStateToProps = (state) => {
    const todo = state.todo;
    return {
        loading: todo.loading,
        loadingTip: todo.loadingTip
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
