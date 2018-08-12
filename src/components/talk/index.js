import React from 'react'
import { View, Text, TextInput, Image, TouchableHighlight, ListView } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import { modifyMessage, sendMessage, fetchUserTalk } from '../../actions/TalkActions'

class Talk extends React.Component {
    _sendMessage = () => {
        const data = { message, contactName, contactEmail } = this.props
        
        this.props.sendMessage(data)
    }

    _renderRow = data => (
        <View>
            <Text>{ data.message }</Text>
            <Text>{ data.type }</Text>
        </View>
    )

    _createDataSource = talk => {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.datasource = ds.cloneWithRows(talk)
    }

    componentWillMount() {
        this.props.fetchUserTalk(this.props.contactEmail)

        this._createDataSource(this.props.talk)
    }

    componentWillReceiveProps(nextProps) {
        this._createDataSource(nextProps.talk)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}>
                    <ListView
                        enableEmptySections
                        dataSource={ this.datasource }
                        renderRow={ this._renderRow } />
                </View>

                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput 
                        value={ this.props.message }
                        onChangeText={ text => this.props.modifyMessage(text) }
                        style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }} />

                    <TouchableHighlight onPress={ () => this._sendMessage() } underlayColor="transparent">
                        <Image source={ require('../../assets/images/send.png') } />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const talk = _.map(state.TalkReducer.talk, (val, uid) => {
        return {
            ...val,
            uid
        }
    })

    return {
        message: state.TalkReducer.message,
        talk
    }
}

const actionCreators = {
    modifyMessage,
    sendMessage,
    fetchUserTalk
}

export default connect(mapStateToProps, actionCreators)(Talk)