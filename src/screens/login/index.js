import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { SearchBar, ListItem, Icon } from 'react-native-elements';
// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
import { searchPlace, getURLPhoto } from '../../api/GoogleMapsApi/index';

export default class StartApp extends React.Component {
	state = {
		text: '',
		data: []
	}
	keyExtractor = (item, index) => index.toString()

	navigateToDetails(place) {
		const { navigate } = this.props.navigation
		console.log(place)
		navigate('PlaceDetails', { name: 'Jane' })
	}

	renderItem = ({ item }) => (
		<ListItem
			title={item.name}
			subtitle={item.formatted_address}
			rightAvatar={{
				rounded: false,
				size: "large",
				source: {
					uri: item.photos && getURLPhoto(item.photos[0].photo_reference)
				}
			}}
			bottomDivider
			onPress={() => this.navigateToDetails(item)}
		// chevron
		/>
	)

	search() {
		const { text } = this.state
		return text.trim() && searchPlace(text.trim())
			.then(res => this.setState({ data: res.data.results }))
			.catch((err) => console.log(err))
	}

	render() {
		const { navigate } = this.props.navigation;
		const { data, text } = this.state
		return (
			<View>
				<SearchBar
					onChangeText={(text) => this.setState({ text })}
					value={text}
					onBlur={() => this.search()}
					lightTheme
				/>
				<ScrollView>
					<FlatList
						keyExtractor={this.keyExtractor}
						data={data}
						renderItem={this.renderItem}
					/>
				</ScrollView>
				{/* <Button
					title="Go to Daniel's profile"
					onPress={() => navigate('Home', { name: 'Jane' })}
				/> */}
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