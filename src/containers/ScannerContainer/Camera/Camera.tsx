import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './styles';

type PropsType = {
  cameraContainerStyle?: StyleProp<ViewStyle>;
};

const Camera: FC<PropsType> = ({cameraContainerStyle}) => {
  return (
    <View style={[styles.container, cameraContainerStyle]}>
      <QRCodeScanner
        onRead={event => console.log(event)}
        reactivate
        reactivateTimeout={3000}
        cameraStyle={styles.camera}
      />
    </View>
  );
};

export default Camera;
