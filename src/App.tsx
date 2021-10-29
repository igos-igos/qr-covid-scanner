import React from 'react';
import {LogBox} from 'react-native';
import TabNavigation from './navigations/TabNavigation/TabNavigation';

LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return <TabNavigation />;
};

export default App;
