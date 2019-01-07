import React from 'react';
import { Tabs, Icon } from 'antd';

const getTab = (item) => (
    <span>
        {item.icon ? <Icon type={item.icon} /> : null}
        {item.name}
    </span>
);

const TodoNavView = ({ list, defaultActiveKey, filter }) => {
    return (
        <div>
            <Tabs defaultActiveKey={defaultActiveKey} onChange={key => filter(key)}>
                {
                    list.map((item) => (
                        <Tabs.TabPane tab={getTab(item)} key={item.key}/>
                    ))
                }
            </Tabs>
        </div>
    );
};

export default TodoNavView;
