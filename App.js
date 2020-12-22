import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, YellowBox, Text} from 'react-native';

import SearchFeature from './src/components/molecules/SearchFeature';
import ImageSlide from './src/components/molecules/imageSlide';
import MenuGrid from './src/components/molecules/menuGrid';
import NavBar from './src/containers/organisme/navBar';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/*search bar and notif*/}
        <SearchFeature />

        <ScrollView style={{flex: 1}}>
          <ImageSlide />
          <MenuGrid />
        </ScrollView>
        {/*bottom navbar*/}
        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
