import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers/index';

import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } from './credentials';

class App extends React.Component {
    componentWillMount() {
        const credentials = {
            apiKey,
            authDomain,
            databaseURL,
            projectId,
            storageBucket,
            messagingSenderId
        };

        firebase.initializeApp(credentials);
    }

    render() {
        return (
            <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
                <Routes />
            </Provider>
        );
    }
}

export default App;