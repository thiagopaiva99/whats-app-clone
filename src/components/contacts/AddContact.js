import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';

import { modifyEmail, addContact } from '../../actions/ContactActions';

const AddContact = props => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput 
                placeholder='E-mail' 
                style={{ fontSize: 20, height: 45 }} 
                onChangeText={ text => props.modifyEmail(text) }
                value={ props.email } />
        </View>
        
        <View style={{ flex: 1 }}>
            <Button 
                title='Adicionar' 
                color='#115E54' 
                onPress={ () => props.addContact(props.email) } />

                <Text style={{ color: '#f00', fontSize: 20 }}>
                    { props.error }
                </Text>
        </View>
    </View>
);

const mapStateToProps = state => (
    {
        email: state.ContactReducer.email,
        error: state.ContactReducer.error
    }
);

const actionCreators = {
    modifyEmail,
    addContact
};

export default connect(mapStateToProps, actionCreators)(AddContact);