import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class ModalScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal123!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
                <Button
                    title="Go to Tabs"
                    onPress={() => this.props.navigation.navigate('Tabs')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}