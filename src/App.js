import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } from './credentials';

import Routes from './Routes';
import reducers from './reducers/index';

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

        console.log(credentials);

        firebase.initializeApp(credentials);
    }

    render() {
        return (
            <Provider store={ createStore(reducers) }>
                <Routes />
            </Provider>
        );
    }
}

export default App;