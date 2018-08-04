import React from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const _addContact = () => {
    Actions.addContact();
}

export default props => (
    <View>
        <Text>Conatos</Text>
        <Button title='Adicionar Contato' onPress={ () => _addContact() } />
    </View>
)