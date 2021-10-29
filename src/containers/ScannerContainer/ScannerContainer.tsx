import React from 'react';
import {View} from 'react-native';
import Camera from './Camera/Camera';
import styles from './styles';

const ScannerContainer = () => {
  return (
    <View style={styles.container}>
      <Camera />
    </View>
  );
};

export default ScannerContainer;
