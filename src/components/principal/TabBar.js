import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default props => (
    <View style={{ height: 50, backgroundColor: '#qq5E54' }}>
        <StatusBar backgroundColor='#114D44' />

        <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: 'white', marginLeft: 20, fontSize: 20 }}>WhatsApp</Text>
        </View>
    </View>
)