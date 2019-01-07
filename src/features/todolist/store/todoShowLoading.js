import { TODO_SHOW_LOADING } from './constants';

/**
 * 显示loading
 */
export function todoShowLoading(loading, loadingTip = '加载中。。。') {
    return {
        type: TODO_SHOW_LOADING,
        loading,
        loadingTip,
    };
}


export function reducer(state, action) {
    switch (action.type) {
        case TODO_SHOW_LOADING:
            return {
                ...state,
                loading: action.loading,
                loadingTip: action.loadingTip,
            };
        default:
            return state;
    }
}
