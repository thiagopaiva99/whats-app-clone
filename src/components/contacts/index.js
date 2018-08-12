import React from 'react'
import { View, Text, Button, ListView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import _ from 'lodash'

import { getContacts } from '../../actions/ContactActions'

class Contacts extends React.Component {
    constructor(props) {
        super(props)
    }

    _createDataSource = contacts => {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.datasource = ds.cloneWithRows(contacts)
    }

    _addContact = () => {
        Actions.addContact()
    }

    _renderRow = data => (
        <View>
            <Text>{ data.name }</Text>
            <Text>{ data.email }</Text>
        </View>
    )

    componentWillMount() {
        this.props.getContacts()
        this._createDataSource(this.props.contacts)
    }

    componentWillReceiveProps(nextProps) {
        this._createDataSource(nextProps.contacts)
    }

    render() {
        return (
            <View>
                <Button title='Adicionar Contato' onPress={ () => this._addContact() } />

                <ListView
                    enableEmptySections
                    dataSource={ this.datasource }
                    renderRow={ data => this._renderRow(data) } />
            </View>
        )
    }
}

const mapStateToProps = state => {
    const contacts = _.map(state.ContactReducer.contacts, (val, uid) => {
        return {
            ...val,
            uid
        }
    })

    return {
        contacts
    }
}

const actionCreators = {
    getContacts
}

export default connect(mapStateToProps, actionCreators)(Contacts)