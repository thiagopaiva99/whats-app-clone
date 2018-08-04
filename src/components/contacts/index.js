import React from 'react'
import { View, Text, Button, ListView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import _ from 'lodash'

import { getContacts } from '../../actions/ContactActions'

class Contacts extends React.Component {
    constructor(props) {
        super(props)

        const datasource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.state = {
            data: datasource.cloneWithRows([
                'Registro 1',
                'Registro 2',
                'Registro 3',
                'Registro 4',
            ])
        }
    }

    _addContact = () => {
        Actions.addContact()
    }

    componentWillMount() {
        this.props.getContacts()
    }

    render() {
        return (
            <View>
                <Button title='Adicionar Contato' onPress={ () => this._addContact() } />

                <ListView
                    dataSource={ this.state.data }
                    renderRow={ data => <View><Text>{ data }</Text></View> } />
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