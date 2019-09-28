import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class StartApp extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        const { data, text } = this.state
        return (
            <View>
                <Text>{JSON.stringify(this.props)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 55,
        top: 0
    },

});