import React from 'react';
import { Menu, Icon } from 'antd';

import './Menus.less';

const drawMenu = (list) => {
    return list.map((item) => {
        let title = item.title;
        switch (item.type) {
            case 'menu':
                title = item.icon ? <span><Icon type={item.icon} /><span>{item.title}</span></span> : title;
                return (
                    <Menu.SubMenu key={item.key} title={title}>
                        {
                            item.children ? drawMenu(item.children) : null
                        }
                    </Menu.SubMenu>
                );
            case 'item':
                return <Menu.Item key={item.key}>{title}</Menu.Item>;
        }
    });
};

const MenusView = ({ currentKey, openKeys, list, selectMenu, openMenu }) => {
    return (
        <Menu className="menu-bar"
            mode="inline"
            theme="dark"
            defaultOpenKeys={openKeys}
            defaultSelectedKeys={[currentKey]}
            openKeys={openKeys}
            selectedKeys={[currentKey]}
            style={{ width: 200 }}
            onOpenChange={(openKeys) => openMenu(openKeys)}
            onClick={(e) => selectMenu(e.key, e)}>
            {drawMenu(list)}
        </Menu>
    );
};

export default MenusView;

