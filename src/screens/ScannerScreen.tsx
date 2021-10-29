import React from 'react';
import {StatusBar} from 'react-native';
import ScannerContainer from '../containers/ScannerContainer/ScannerContainer';

const ScannerScreen = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ScannerContainer />
    </>
  );
};

export default ScannerScreen;
