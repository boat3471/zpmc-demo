import { TODO_FILTER_ALL } from './constants';

const navList = [
    { key: 'all', name: '全部', icon: 'folder-open' },
    { key: 'activated', name: '未完成', icon: 'exclamation-circle-o' },
    { key: 'completed', name: '已完成', icon: 'check' },
];

const initialState = {
    navList: navList,
    navDefaultActiveKey: TODO_FILTER_ALL,
    pageIndex: 1,
    pageSize: 10,
    totalSize: 0,
    loading: false,
    loadingTip: '',
    list: [],
    mockList: [],
    filterType: TODO_FILTER_ALL,
};

export default initialState;
