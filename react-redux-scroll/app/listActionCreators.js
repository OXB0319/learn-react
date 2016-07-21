const listActionCreators = {
    addMore() {
        return {
            type: 'addmore',
            count: 5
        };
    },
    startLoading() {
        return {
            type: 'startloading'
        };
    }
};

export default listActionCreators;