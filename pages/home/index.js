import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';

class LogoTitle extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Image
                    source={require('../../images/logo.png')}
                    style={{ width: 30, height: 30 }}
                />
                <Text style={{ color: '#fff', marginLeft: 10, fontSize: 20 }}>Home</Text>
            </View>

        );
    }
}

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => <LogoTitle />,
            headerRight: () => (
                <Button
                    onPress={navigation.getParam('increaseCount')}
                    title="+1"
                    color="#3bb5fc"
                />
            ),
        }
    };
    componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
    state = {
        count: 0,
    };
    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text>Count: {this.state.count}</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
            </View>
        );
    }
}
