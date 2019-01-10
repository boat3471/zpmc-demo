import React from 'react';

const AddTodo = ({ submit }) => {
    let input;
    return (
        <div>
            {/*<form onSubmit={(e) => submit(e)}>*/}
            {/*<input type="text" ref={node => input = node} />*/}
            {/*<button type="submit">添加</button>*/}
            {/*</form>*/}
            <div>
                <input type="text" ref={node => input = node} />
                <button onClick={(e) => submit(e, input)}>添加</button>
            </div>
        </div>
    );
};

export default AddTodo;
