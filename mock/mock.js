import moment from 'moment';

const todoList = [];
const todoTotalSize = 98;
const time = moment() - 1000000;
let nextTodoId = 1;

for (let i = 0; i < todoTotalSize; i++) {
    todoList.push({
        id: nextTodoId++,
        name: `test todo ${Math.ceil(Math.random() * 10000)}`,
        createTime: time + i * 10000,
        createShowTime: moment(time + i * 10000).format('YYYY-MM-DD HH:mm:ss'),
        completed: i < 50,
    });
}

const mockData = {
    nextTodoId: nextTodoId,
    totalSize: todoTotalSize,
    totalPage: 10,
    pageSize: 10,
    pageIndex: 1,
    todoList: todoList.sort((a, b) => {
        if (a.completed > b.completed) {
            return 1;
        } else if (a.completed < b.completed) {
            return -1;
        } else {
            if (a.createTime < b.createTime) {
                return 1;
            } else if (a.createTime > b.createTime) {
                return -1;
            } else {
                return 0;
            }
        }
    }),
};

export default mockData;
