import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';

import { modifyEmail, addContact } from '../../actions/ContactActions';

class AddContact extends React.Component {
    _renderAddContact() {
        if (!this.props.saved) {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TextInput 
                            placeholder='E-mail' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={ text => this.props.modifyEmail(text) }
                            value={ this.props.email } />
                    </View>
                    
                    <View style={{ flex: 1 }}>
                        <Button 
                            title='Adicionar' 
                            color='#115E54' 
                            onPress={ () => this.props.addContact(this.props.email) } />

                            <Text style={{ color: '#f00', fontSize: 20 }}>
                                { this.props.error }
                            </Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20 }}>
                        Cadastro realizado com sucesso
                    </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                { this._renderAddContact() }
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        email: state.ContactReducer.email,
        error: state.ContactReducer.error,
        saved: state.ContactReducer.saved
    }
);

const actionCreators = {
    modifyEmail,
    addContact
};

export default connect(mapStateToProps, actionCreators)(AddContact);