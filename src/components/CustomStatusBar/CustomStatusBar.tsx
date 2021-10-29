import React, {FC} from 'react';
import {ColorValue, StatusBar, StatusBarStyle} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

type PropsType = {
  backgroundColor?: ColorValue;
  translucent?: boolean;
  barStyle?: StatusBarStyle | null;
};

const FocusAwareStatusBar: FC<PropsType> = ({
  backgroundColor,
  translucent,
  barStyle,
}) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      backgroundColor={backgroundColor}
      translucent={translucent}
      barStyle={barStyle}
    />
  ) : null;
};

export default FocusAwareStatusBar;
