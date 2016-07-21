import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import listStore from './listStore';
import listActionCreators from './listActionCreators';
import ReduxInfiniteScroll from 'redux-infinite-scroll';

class ListApp extends Component {
    _loadMore() {
        this.props.onAddMore();
    }

    _hasMore() {
        console.log(this.props.data.length);
        return this.props.data.length < 100;
    }

    _renderList() {
        return this.props.data.map(d => {
            return (
                <li key={d.id}><span>{d.id}</span>-<span>{d.title}</span></li>
            );
        });
    }

    render() {
        return (
            <ReduxInfiniteScroll
                items={this._renderList() }
                loadMore={this._loadMore.bind(this) }
                hasMore={this._hasMore() }
                elementIsScrollable={true}
                containerHeight={'100%'}
                style={{ overflowY: 'scroll' }}
                loader={"Loading............"}
                loadingMore={this.props.loading }
                />
        );
    }
}
ListApp.propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool,
    onAddMore: PropTypes.func
};


// Generate a container app by Mapping state and dispatch to props
const mapStateToProps = (state) => {
    return {
        data: state.data,
        loading: state.loading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddMore: () => {
            dispatch(listActionCreators.startLoading());
            setTimeout(function() {
                dispatch(listActionCreators.addMore());
            }, 1000);
        }
    };
};
const ListAppContainer = connect(mapStateToProps, mapDispatchToProps)(ListApp);


render(
    <Provider store={listStore}>
        <ListAppContainer />
    </Provider>,
    document.getElementById('root')
);