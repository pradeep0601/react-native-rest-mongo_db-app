import React, { Component } from 'react';
import {View, StyleSheet, FlatList } from 'react-native';

export default class Products extends Component {
  renderItem({ item, index }) {
    return <View style={{
    flex: 1,
    margin: 5,
    minWidth: 170,
    maxWidth: 223,
    height: 304,
    maxHeight:304,
    backgroundColor: '#CCC',
    }}/>
    }
    render () {
    return (<FlatList
    contentContainerStyle={styles.list}
    data={[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'}, {key: 'e'},{key: 'f'},{key: 'g'}, {key: 'h'},{key: 'i'},{key: 'j'}]}
    renderItem={this.renderItem}
    />);
    }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
