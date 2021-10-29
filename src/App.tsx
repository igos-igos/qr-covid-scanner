import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import RootNavigation from './navigations/RootNavigation';

LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <>
      <StatusBar />
      <RootNavigation />
    </>
  );
};

export default App;
