const enable = false;

export default {
    dispatch(name, dispatch, ...args) {
        enable && console.info(`[Dispatch -> ${name} -> ${dispatch}]`, ...args);
    },
    update(name, ...args) {
        enable && console.info(`[Update -> ${name}]`, ...args);
    },
    reducer(name, ...args) {
        enable && console.info(`[Reducer -> ${name}]`, ...args);
    },
    action(name, ...args) {
        enable && console.info(`[Action -> ${name}]`, ...args);
    },
};
