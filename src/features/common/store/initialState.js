const menuList = [
    {
        title: '演示功能',
        icon: 'star',
        type: 'menu',
        key: 'm1',
        children: [
            { title: '待办事项', type: 'item', key: '/todo' },
        ],
    },
    {
        title: '用户管理',
        icon: 'user',
        type: 'menu',
        key: 'm2',
        children: [
            { title: '账户列表', type: 'item', key: '/account' },
            {
                title: '权限管理',
                type: 'menu',
                key: 'm2-1',
                children: [
                    { title: '权限列表', type: 'item', key: '/permission' },
                    { title: '角色列表', type: 'item', key: '/role' },
                    { title: '授权', type: 'item', key: '/auth' },
                ],
            },
        ],
    },
    {
        title: '设置',
        icon: 'setting',
        type: 'menu',
        key: 'm3',
        children: [
            { title: '待办事项', type: 'item', key: '/security' },
            { title: '基本资料', type: 'item', key: '/base' },
            { title: '系统消息', type: 'item', key: '/message' },
        ],
    },
];

export default {
    currentKey: '/' + location.pathname.split('/').find((n) => !!n),
    openKeys: [],
    list: menuList,
};
