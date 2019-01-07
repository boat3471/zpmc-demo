import { MENUS_ENTER_HOME, MENUS_SELECT, MENUS_OPEN } from './constants';

/**
 * 进入首页
 */
export function enterHome() {
    return {
        type: MENUS_ENTER_HOME,
    };
}

/**
 * 选择菜单
 */
export function selectMenu(key) {
    return {
        type: MENUS_SELECT,
        key: key,
    };
}

/**
 * 打开菜单
 */
export function openMenu(keys) {
    return {
        type: MENUS_OPEN,
        openKeys: keys,
    };
}
