import React, { Component } from 'react';
import { Text, View, StyleSheet, Button,Image } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {SafeAreProvider} from 'react-native-safe-area-context';

// You can import from local files
import ReadScreen from './screen/ReadStory';
import WriteScreen from './screen/WriteStory';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Appcontainer />
      </View>
    );
  }
}

const tabContainer = createBottomTabNavigator({
  Write: WriteScreen,
  Read: ReadScreen,
},
{
  defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
    const routeName = navigation.state.routeName
    if(routeName==='Write'){
      return(<Image style={styles.imge} 
      source={require('./assets/write.png')}/>)
    } else if(routeName==='Read'){
      return(<Image style={styles.imge}
      source={require('./assets/read.png')}/>)
    }
  }
})
})
const Appcontainer = createAppContainer(tabContainer);

const styles = StyleSheet.create({
  imge:{
    width:30,
    height:30
  }
})