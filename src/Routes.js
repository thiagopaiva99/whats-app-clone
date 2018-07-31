import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/login/index';
import Register from './components/register/index';
import Welcome from './components/welcome/index';

export default props => (
    <Router>
        <Scene key='root'>
            <Scene key='login' component={ Login } title='Login' hideNavBar={ true } />
            <Scene key='register' component={ Register } title='Register' hideNavBar={ true } />
            <Scene key='welcome' component={ Welcome } title='Welcome' hideNavBar={ true } initial={ true } />
        </Scene>
    </Router>
)