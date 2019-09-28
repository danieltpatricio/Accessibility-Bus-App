
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartApp from '../screens/login';
import PlaceDetails from '../screens/PlaceDetails';
// import checkConnection from './src/api/checkConnection';

const AppNavigator = createStackNavigator({
    Home: {
        screen: StartApp,
        navigationOptions: {
            header: null
        }
    },
    PlaceDetails: {
        screen: PlaceDetails,
        navigationOptions: {
            header: null,
        }
    }

});

export default createAppContainer(AppNavigator);