import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers/index';

class App extends React.Component {
    componentWillMount() {
        const config = {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            databaseURL: process.env.DATABASE_URL,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID
        };

        firebase.initializeApp(config);
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