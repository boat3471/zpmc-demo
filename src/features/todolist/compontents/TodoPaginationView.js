import React from 'react';
import { Pagination } from 'antd';


const TodoPaginationView = ({ totalSize, changePageIndex }) => {
    return (
        <div style={{ padding: '10px' }}>
            {
                <Pagination size="small" defaultCurrent={1} total={totalSize}
                    onChange={(page) => changePageIndex(page, totalSize)}
                    showQuickJumper={true} />
            }
        </div>
    );
};

export default TodoPaginationView;
