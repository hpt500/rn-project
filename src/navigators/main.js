
import { createStackNavigator } from 'react-navigation-stack';
import homeScreen from "../pages/home"
import detailScreen from "../pages/detail"

export const MainStack = createStackNavigator(
    {
        Home: homeScreen,
        Details: detailScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#4bb5fc',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },

    }
);
