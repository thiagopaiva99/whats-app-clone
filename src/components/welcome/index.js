import React from 'react';
import { Text, View, Button } from 'react-native';

export default props => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 15 }}>
        <View style={{ flex: 1 }}>
            <Text>WhatsApp</Text>
        </View>
        <View style={{ flex: 1 }}>
            <Text>Seja bem vindo!</Text>
        </View>
        <View style={{ flex: 1 }}>
            <Button onPress={ () => false } title='Fazer Login' />
        </View>
    </View>
);