import { connect } from 'react-redux';
import View from './TodoNavView';
import { todoTabsChange, todoUpdateList } from '../store/todo.actions';

const mapStateToProps = ({ todo }) => {
    return {
        list: todo.navList,
        defaultActiveKey: todo.navDefaultActiveKey,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filter(filterType) {
            dispatch(todoTabsChange(filterType));
            dispatch(todoUpdateList({ filterType }));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
