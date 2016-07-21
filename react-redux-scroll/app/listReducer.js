import update from 'react-addons-update';
import { combineReducers } from 'redux';

const initialState = {
    data: [
        { id: 1, key: 1, title: 'Hello' },
        { id: 2, key: 2, title: 'Hello' },
        { id: 3, key: 3, title: 'Hello' },
        { id: 4, key: 4, title: 'Hello' },
        { id: 5, key: 5, title: 'Hello' },
        { id: 6, key: 6, title: 'Hello' },
        { id: 7, key: 7, title: 'Hello' },
        { id: 8, key: 8, title: 'Hello' },
        { id: 9, key: 9, title: 'Hello' },
        { id: 10, key: 10, title: 'Hello' }
    ],
    loading: false
};

var maxid = 11;

const listReducer = (state = initialState, action) => {

    switch (action.type) {
    case 'addmore':
        var newData = [];
        for (var i = 0; i < action.count; ++i) {
            var id = maxid++;
            newData.push({ id: id, key: id, title: 'Hello' });
        }
        return update(state, {loading: {$set: false}, data: { $push: newData }});
    case 'startloading':
        return update(state, {loading: {$set: true}});
    default:
        return state;
    }
};

export default listReducer;