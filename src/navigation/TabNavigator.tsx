import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreenContainer } from '../screens/HomeScreen';
import { PaymentScreenContainer } from '../screens/PaymentScreen';
import { AccountScreenContainer } from '../screens/AccountScreen';
import { ActivityScreenContainer } from '../screens/ActivityScreen';
import { Colors } from '../constants';
import { TAB_ROUTES } from '../routes';
import { AccountIcon } from './TabIcon';
import { ActivityIcon } from './TabIcon';
import { HomeIcon } from './TabIcon';
import { PaymentIcon } from './TabIcon';
import { ServiceScreenContainer } from '../screens/ServiceScreen';

// Tab Navigator Component
const Tab = createBottomTabNavigator();

// Tab Navigator Container Component
export const TabNavigatorContainer = () => (
  <Tab.Navigator
    initialRouteName={TAB_ROUTES.Home}
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: Colors.lightBlack,
        borderTopWidth: 0,
      },
    }}
  >
    <Tab.Screen
      name={TAB_ROUTES.Home}
      component={HomeScreenContainer}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: HomeIcon,
        tabBarActiveTintColor: Colors.textgray,
        tabBarInactiveTintColor: Colors.textwhite,
      }}
    />
    <Tab.Screen
      name={TAB_ROUTES.Service}
      component={ServiceScreenContainer}
      options={{
        tabBarLabel: 'Service',
        tabBarIcon: PaymentIcon,
        tabBarActiveTintColor: Colors.textgray,
        tabBarInactiveTintColor: Colors.textwhite,
      }}
    />
    <Tab.Screen
      name={TAB_ROUTES.Activity}
      component={ActivityScreenContainer}
      options={{
        tabBarLabel: 'Activity',
        tabBarIcon: ActivityIcon,
        tabBarActiveTintColor: Colors.textgray,
        tabBarInactiveTintColor: Colors.textwhite,
      }}
    />
    <Tab.Screen
      name={TAB_ROUTES.Account}
      component={AccountScreenContainer}
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: AccountIcon,
        tabBarActiveTintColor: Colors.textgray,
        tabBarInactiveTintColor: Colors.textwhite,
      }}
    />
  </Tab.Navigator>
);
