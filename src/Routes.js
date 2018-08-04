import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/login/index';
import Register from './components/register/index';
import Welcome from './components/welcome/index';
import Principal from './components/principal/index';
import AddContact from './components/contacts/AddContact';

export default props => (
    <Router>
        <Scene key='root' hideNavBar={ true } navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }}>
            <Scene key='login' component={ Login } title='Login' />
            <Scene key='register' component={ Register } title='Register' hideNavBar={ false } />
            <Scene key='welcome' component={ Welcome } title='Welcome' initial={ true } />
            <Scene key='principal' component={ Principal } title='Principal' />
            <Scene key='addContact' component={ AddContact } title='Add Contact' hideNavBar={ false } />
        </Scene>
    </Router>
)