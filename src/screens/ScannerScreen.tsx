import React from 'react';
import FocusAwareStatusBar from '../components/CustomStatusBar/CustomStatusBar';
import ScannerContainer from '../containers/ScannerContainer/ScannerContainer';

const ScannerScreen = () => {
  return (
    <>
      <FocusAwareStatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <ScannerContainer />
    </>
  );
};

export default ScannerScreen;
