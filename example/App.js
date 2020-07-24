import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SectionIndexer from 'react-native-section-indexer-kor';

export default class App extends Component {
  state = {
    arrNames: [
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "김김김" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "나나나" },
      { name: "다다다" },
      { name: "다다다" },
      { name: "다다다" },
      { name: "다다다" },
      { name: "다다다" },
      { name: "다다다" },
      { name: "다다다" },
      { name: "다다다" },
      { name: "다다다" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "아아아" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "타타타" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
      { name: "하하하" },
    ],
  };

  _renderItem = ({ item, idx }) => {
    return (
      <SafeAreaView>
        <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', height: 65, justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#d1d1d1' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>

            <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: '#ff00ff' }}></View>

            <View style={{ marginLeft: 5 }}>
              <Text style={{ fontSize: 13, color: '#000000' }}>{item.name}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }


  render() {
    return (
      <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
        <SectionIndexer
          arrNames={this.state.arrNames}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}