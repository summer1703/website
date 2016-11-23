/**
 * Created by Excalibur on 16/10/24.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {
    createStore,
    applyMiddleware,
    bindActionCreators
} from 'redux'
import {connect, Provider}        from 'react-redux'
import middlewareThunk from 'redux-thunk'


export default (ReactComponent, reducer,  actions) => {
    const store = createStore(
        reducer,
        applyMiddleware(middlewareThunk)
    );

    var ReduxComponent = connect(state => {
        return {
            todo: state.data
        }
    }, dispatch => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    })(ReactComponent);

    ReactDOM.render(
        <Provider store={store}>
            <ReduxComponent />
        </Provider>,
        document.getElementById('app')
    )
}

