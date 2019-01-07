import React from 'react';
import { Button } from 'antd';

import './Header.less';

const HeaderView = ({ enterHome }) => {
    return (
        <div className="header-bar">
            <Button className="logo-btn"
                type="primary" icon="eye-o"
                onClick={() => enterHome()} />
            <span className="title">演示管理系统</span>
        </div>
    );
};

export default HeaderView;
