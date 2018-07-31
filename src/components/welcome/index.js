import React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <ImageBackground style={{ flex: 1, width: null }} source={ require('../../assets/images/bg.png') }>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 15 }}>
            <View style={{ flex: 1 }}>
                <Text>WhatsApp</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text>Seja bem vindo!</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Button onPress={ () => Actions.login() } title='Fazer Login' />
            </View>
        </View>
    </ImageBackground>
);