
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartApp from './src/screens/login/start-app';
console.disableYellowBox = true;
import checkConnection from './src/api/checkConnection';


const AppNavigator = createStackNavigator({
  Home: {
    screen: StartApp,
  },
});

export default createAppContainer(AppNavigator);