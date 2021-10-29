import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import TabNavigation from './navigations/TabNavigation/TabNavigation';

LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <>
      <StatusBar />
      <TabNavigation />
    </>
  );
};

export default App;
