
import { createStackNavigator } from 'react-navigation-stack';
import { MainStack } from "./main"
import ModalScreen from "../pages/modal"
import tabsScreen from "../pages/tabs"

export const RootStack = createStackNavigator(
    {
        Main: MainStack,
        MyModal: ModalScreen,
        Tabs: tabsScreen
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);
