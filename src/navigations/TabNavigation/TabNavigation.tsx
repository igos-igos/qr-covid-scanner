import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScannerScreen from '../../screens/ScannerScreen';
import AboutScreen from '../../screens/AboutScreen';
import VisitorsScreen from '../../screens/VisitorsScreen';
import styles from './styles';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}>
        <Tab.Screen name="VisitorsScreen" component={VisitorsScreen} />
        <Tab.Screen name="ScannerScreen" component={ScannerScreen} />
        <Tab.Screen name="AboutScreen" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
