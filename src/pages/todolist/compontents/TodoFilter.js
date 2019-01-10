import { connect } from 'react-redux';
import { filter } from '../store/actions';
import debug from '-lib/debugLog';
import View from './TodoFilterView';

const NAME = 'TodoFilter';

const mapStateToProps = (state) => {
    debug.update(NAME, state);
    return {
        type: state.filterType,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filter(type) {
            dispatch(filter(type));
            debug.dispatch(NAME, 'filter', type);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
