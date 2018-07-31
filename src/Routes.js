import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/login/index';
import Register from './components/register/index';
import Welcome from './components/welcome/index';
import Principal from './components/principal/index';

export default props => (
    <Router>
        <Scene key='root' hideNavBar={ true }>
            <Scene key='login' component={ Login } title='Login' />
            <Scene key='register' component={ Register } title='Register' />
            <Scene key='welcome' component={ Welcome } title='Welcome' initial={ true } />
            <Scene key='principal' component={ Principal } title='Principal' />
        </Scene>
    </Router>
)