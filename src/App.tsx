import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import ScannerScreen from './screens/ScannerScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ScannerScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
