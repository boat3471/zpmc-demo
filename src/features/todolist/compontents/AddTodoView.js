import React from 'react';
import { Input, Button } from 'antd';

const AddTodo = ({ addItemSubmitAsync, search }) => {
    let input;
    return (
        <div>
            <Input placeholder="请输入待办名" style={{ width: 500, marginRight: 12 }}
                ref={node => input = node ? node.input : null} />
            {/*<Button type="primary" style={{ marginRight: 12 }}*/}
            {/*onClick={(e) => addItemSubmit(e, input)}>添加</Button>*/}
            <Button type="primary" style={{ marginRight: 12 }}
                onClick={(e) => addItemSubmitAsync(e, input)}>添加</Button>
            <Button type="primary" style={{ marginRight: 12 }}
                onClick={(e) => search(e, input)}>搜索</Button>
        </div>
    );
};

export default AddTodo;
