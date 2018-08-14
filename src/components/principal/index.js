import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Talks from '../talks' 
import Status from '../status'
import Contacts from '../contacts'

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'one', title: 'Conversas' },
      { key: 'two', title: 'Status' },
      { key: 'three', title: 'Contatos' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          one: Talks,
          two: Status,
          three: Contacts,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}