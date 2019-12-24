import React from 'react';
import { Dimensions, Text, View, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';

// badge -- 徽章小图标 
import IconWithBadge from '../../components/icon/homeBadge'

class MyHomeScreen extends React.Component {

    // openlicai() {
    //     this.props.navigation.navigate('Notifications', {
    //         jumpLicaiCallBack: (index) => {
    //             this.props.navigation.state.params.jumpHomeCallBack(index);
    //         }
    //     });
    //     this.props.navigation.state.params.jumpHomeCallBack(2);
    // }

    // openDrawers() {
    //     this.props.navigation.openDrawer();
    // }
 
    // closeDrawers() {
    //     this.props.navigation.closeDrawer();
    // }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30}}>首页</Text>
                {/* <TouchableOpacity onPress={this.openlicai.bind(this)}>
                    <Text style={{
                        borderColor: '#ccc',
                        borderWidth: 1,
                        borderRadius: 8,
                        padding: 10,
                        marginTop: 20
                    }}>跳转通知</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.openDrawers.bind(this)}>
                    <Text style={{
                        borderColor: '#ccc',
                        borderWidth: 1,
                        borderRadius: 8,
                        padding: 10,
                        marginTop: 20
                    }}>打开抽屉</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.closeDrawers.bind(this)}>
                    <Text style={{
                        borderColor: '#ccc',
                        borderWidth: 1,
                        borderRadius: 8,
                        padding: 10,
                        marginTop: 20
                    }}>关闭抽屉</Text>
                </TouchableOpacity> */}
            </View>
        );

    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/logo.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

let drawerWidth = Dimensions.get('window').width;


const CustomDrawerNavigation = (props) => (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 30, backgroundColor: '#e76482' }}>
            <View style={{ flex: 1, marginHorizontal: 15, justifyContent: 'center' }}>
                <Image style={{ width: 80, height: 80, borderRadius: 90 }}
                    source={{ uri: 'http://img5.duitang.com/uploads/item/201512/18/20151218165511_AQW4B.jpeg' }} />
            </View>
            <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: '#ffffff', marginBottom: 5 }}>稳重的西红柿</Text>
                <Text style={{
                    fontSize: 12,
                    color: '#d4d2d9',
                    fontStyle: 'italic',
                    paddingRight: 5
                }}>人生没有什么烦恼是一个西红解决不了的！如果有那就是两个...</Text>
            </View>
        </View>
        <View
            style={{
                flex: 3,
                flexDirection: 'column',
                backgroundColor: '#249aa3'
            }}>
            <TouchableOpacity
                style={{
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#fff',
                    backgroundColor: that.state.currentIndex === 1 ? '#a52a7c' : '#249aa3',
                }}
                onPress={() => {
                    that.setState({ currentIndex: 1 });
                    props.navigation.navigate('Home', {
                        title: '跳转首页',
                        jumpHomeCallBack: (index) => {
                            that.setState({ currentIndex: index });
                        }
                    })
                }}>
                <View><Text style={{ fontSize: 18, color: '#fff', paddingVertical: 15 }}>首页</Text></View>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#fff',
                    backgroundColor: that.state.currentIndex === 2 ? '#a52a7c' : '#249aa3',
                }}
                onPress={() => {
                    that.setState({ currentIndex: 2 });
                    props.navigation.navigate('Notifications',
                        {
                            title: '跳转通知',
                            jumpLicaiCallBack: (index) => {
                                that.setState({ currentIndex: index });
                            }
                        })
                }}>
                <View><Text style={{ fontSize: 18, color: '#fff', paddingVertical: 15 }}>通知</Text></View>
            </TouchableOpacity>


        </View>
        {/*row3*/}
        <View
            style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                paddingBottom: 20,
                paddingRight: 10,
                backgroundColor: '#3cb0f8'
            }}>
            <TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}>
                    <Text style={{ color: '#fff', fontSize: 18, marginLeft: 8 }}>注销</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
)

const MyDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: MyHomeScreen,
        },
        Notifications: {
            screen: MyNotificationsScreen,
        },
    },
    {
        order: ['Home', 'Notifications'],
        initialRouteName: 'Home',
        initialRouteParams: {
            jumpHomeCallBack: (index) => {
                that.setState({ currentIndex: index });
            }
        },
        drawerLockMode: 'unlocked',
        drawerWidth: drawerWidth * 0.7,           //设置抽屉策划页面宽度
        drawerPosition: 'left',                   //选项是left或right。默认是left位置。
        useNativeAnimations: true,                //启用原生动画。默认是true。
        // drawerBackgroundColor: '#c85e25',      //设置抽屉页面背景颜色（默认是white）
        contentComponent: CustomDrawerNavigation,
    }
);


const AppContainer = createAppContainer(MyDrawerNavigator);

let that;

export default class DrawerScreen extends Component {
    constructor(props) {
        super(props);
        that = this;
        this.state = {
            currentIndex: 1,
        };
    }

    render() {
        return <AppContainer/>
    }
}