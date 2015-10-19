'use strict';

var React = require('react-native');
var {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicatorIOS,
	Image,
	Component
} = React;

var styles = StyleSheet.create({
	description: {
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		color: '#656565'
	},
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	}
});

class SearchPage extends Component {
	render() {
		return (
			<View style = {styles.container}>
				<Text style = {styles.description}>
					Search for alll tha housessss!
				</Text>
				<Text style = {styles.description}>
					Search by place-name, postal code or search near your location!
				</Text>
			</View>
		);
	}
}

module.exports = SearchPage;