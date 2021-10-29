import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import ScannerScreen from './screens/ScannerScreen';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <ScrollView>
        <ScannerScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
