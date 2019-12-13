
import { createStackNavigator } from 'react-navigation-stack';
import homePage from "../pages/home"
import detailPage from "../pages/detail"

export const AppNavigator = createStackNavigator(
    {
        Home: homePage,
        Details: detailPage,
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
