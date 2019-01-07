import debug from '-lib/debugLog';
import { connect } from 'react-redux';
import { enterHome } from './store/menus.action';
import View from './components/HeaderView';

const NAME = 'Header';

// const mapStateToProps = () => {
//     return '';
// };

const mapDispatchToProps = (dispatch) => {
    return {
        enterHome() {
            dispatch(enterHome());
            debug.dispatch(NAME, 'enterHome');
        },
    };
};

export default connect(null, mapDispatchToProps)(View);
