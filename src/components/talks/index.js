import React from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchUserTalks } from '../../actions/TalksActions'
import { validateArgCount } from '@firebase/util';

class Talks extends React.Component {
    _renderRow = talk => (
        <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 25 }}>{ talk.name }</Text>
        </View>
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