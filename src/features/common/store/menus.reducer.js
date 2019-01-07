import debug from '-src/libs/debugLog';
import history from '-history';
import { MENUS_ENTER_HOME, MENUS_SELECT, MENUS_OPEN } from './constants';

import initialState from './initialState';

/**
 * 查找多级菜单 key
 * @param list
 * @param parent
 */
function findOpenKey(list, parent = {}) {
    list.forEach((item) => {
        item.keys = [...(parent.keys || [])];
        if (item.children) {
            item.keys.push(item.key);
            findOpenKey(item.children, item);
        }
        if (item.key === initialState.currentKey) {
            initialState.openKeys = item.keys;
        }
    });
}

/**
 * 根据路径初始化菜单
 */
function initDefaultMenu() {
    if (location.pathname === '/') {
        initialState.openKeys = ['m1'];
    } else {
        findOpenKey(initialState.list);
    }
}

/**
 * 获取父菜单 key
 * @param key
 * @returns {*}
 */
function getParentKeys(key) {
    const index = key.lastIndexOf('-');
    return index > 0 ? [key.substring(0, index)] : [];
}

(function() {
    initDefaultMenu();
})();

export function reducer(state = initialState, action) {
    debug.reducer('menus', state, action);
    switch (action.type) {
        case MENUS_ENTER_HOME:
            history.push('');
            return {
                ...initialState,
            };
        case MENUS_SELECT:
            history.push(action.key);
            return {
                ...state,
                currentKey: action.key,
            };
        case MENUS_OPEN: {
            const latestOpenKey = action.openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
            const latestCloseKey = state.openKeys.find(key => !(action.openKeys.indexOf(key) > -1));

            let nextOpenKeys = [];
            if (latestOpenKey) {
                nextOpenKeys = getParentKeys(latestOpenKey).concat(latestOpenKey);
            }
            if (latestCloseKey) {
                nextOpenKeys = getParentKeys(latestCloseKey);
            }
            return {
                ...state,
                openKeys: nextOpenKeys,
            };
        }
        default:
            return state;
    }
}
