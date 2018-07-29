import React from 'react';
import { Provider } from 'react-redux';

import Routes from './Routes';

export default props => (
    <Provider>
        <Routes />
    </Provider>
);