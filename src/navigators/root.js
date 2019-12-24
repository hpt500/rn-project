
import { createStackNavigator } from 'react-navigation-stack';
import { MainStack } from "./main"
import ModalScreen from "../pages/modal"
import tabsScreen from "../pages/tabs"
import DrawerScreen from "../pages/drawer"

export const RootStack = createStackNavigator(
    {
        Main: MainStack,
        MyModal: ModalScreen,
        Tabs: tabsScreen,
        Drawer: DrawerScreen
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);
