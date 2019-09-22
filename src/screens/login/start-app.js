import React from 'react';
import { Button, ToolbarAndroid, View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';

export default class StartApp extends React.Component {
	static navigationOptions = {
		header: null
	};
	state = {
		text: ''
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<SearchBar
					onChangeText={(text) => this.setState({ text })}
					value={this.state.text}
					lightTheme
					cancelIcon={
						<Icon
							name='assistive-listening-systems'
							type='font-awesome'
							onPress={() => console.log('hello')} />
					}
					onCancel={(text) => console.log(text)}
				/>
				<Icon
					name='arrowleft'
					type='antdesign'
					onPress={() => console.log('hello')} />
				<SearchBar
					placeholder="Type Here..."
					onChangeText={(text) => this.setState({ text })}
					value={this.state.text}
				/>
				<Button
					title="Go to Daniel's profile"
					onPress={() => navigate('Home', { name: 'Jane' })}
				/>
				<TextInput
					style={{
						// flex: 2,
						alignItems: 'stretch',
						borderColor: 'gray',
						borderWidth: 2,
						borderRadius: 10,
						height: 60
						// width: 20
					}}
					onChangeText={(text) => this.setState({ text })}
					value={this.state.text}
					inlineImageLeft='search_icon' />
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