import React from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { getContacts } from '../../actions/ContactActions';

class Contacts extends React.Component {
    _addContact = () => {
        Actions.addContact();
    }

    render() {
        return (
            <View>
                <Text>Conatos</Text>
                <Button title='Adicionar Contato' onPress={ () => this._addContact() } />
            </View>
        )
    }
}

const mapStateToProps = state => (
    {

    }
)

const actionCreators = {
    getContacts
}

export default connect(mapStateToProps, actionCreators)(Contacts)