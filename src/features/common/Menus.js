import debug from '-lib/debugLog';
import { connect } from 'react-redux';
import { selectMenu, openMenu } from './store/menus.action';
// import {MENUS_UPDATE} from './store/constants';
import View from './components/MenusView';

const NAME = 'Menu';

const mapStateToProps = (state) => {
    debug.update(NAME, state);
    return state.menus;
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectMenu(key) {
            dispatch(selectMenu(key));
            debug.dispatch(NAME, 'selectMenu', key);
        },
        openMenu(keys) {
            dispatch(openMenu(keys));
            debug.dispatch(NAME, 'openMenu', keys);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
