import React from 'react'
import { View, Text, ListView, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Action } from 'react-native-router-flux'

import { fetchUserTalks } from '../../actions/TalksActions'

class Talks extends React.Component {
    _startTalk = talk => {
        Actions.talk({
            title: talk.name,
            contactName: talk.name,
            contactEmail: talk.email
        })
    }

    _renderRow = talk => (
        <TouchableHighlight onPress={ () => this._startTalk(talk) }>
            <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text style={{ fontSize: 25 }}>{ talk.name }</Text>
            </View>
        </TouchableHighlight>
    )

    _createDataSource = talks => {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.datasource = ds.cloneWithRows(talks)
    }

    componentWillMount() {
        this.props.fetchUserTalks()
        this._createDataSource(this.props.talks)
    }

    componentWillReceiveProps(nextProps) {
        this._createDataSource(nextProps.talks)
    }

    render() {
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={ this.datasource }
                    renderRow={ this._renderRow } />
            </View>
        )
    }
}

const mapStateToProps = state => {
    const talks = _.map(state.TalksReducer.talks, (validateArgCount, uid) => {
        return {
            ...val,
            uid
        }
    })

    return {
        talks
    }
}

const actionCreators = {
    fetchUserTalks
}

export default connect(mapStateToProps, actionCreators)(Talks)