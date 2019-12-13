import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class DetailsScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
          title: params ? params.otherParam : 'A Nested Details Screen',
          headerStyle: {
            backgroundColor: navigationOptions.headerTintColor,
          },
          headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
      };
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen1234</Text>
                <Text>itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}</Text>
                <Text>otherParam: {JSON.stringify(navigation.getParam('otherParam', 'default value'))}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details', {
                        itemId: 92,
                        otherParam: 'this is the Second Item',
                    })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
                />
            </View>
        );
    }
}