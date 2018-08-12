import React from 'react'
import { View, Text, TextInput, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import { modifyMessage } from '../../actions/TalkActions'

class Talk extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}></View>
                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput 
                        value={ this.props.message }
                        onChangeText={ text => this.props.modifyMessage(text) }
                        style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }} />

                    <TouchableHighlight onPress={ () => false } underlayColor="transparent">
                        <Image source={ require('../../assets/images/send.png') } />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        message: state.TalkReducer.message
    }
)

const actionCreators = {
    modifyMessage
}

export default connect(mapStateToProps, actionCreators)(Talk)