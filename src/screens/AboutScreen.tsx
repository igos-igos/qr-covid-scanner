import React from 'react';
import {Text} from 'react-native';
import MainLayout from '../layouts/MainLayout/MainLayout';
import FocusAwareStatusBar from '../components/CustomStatusBar/CustomStatusBar';

const AboutScreen = () => {
  return (
    <>
      <FocusAwareStatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="#fff"
      />
      <MainLayout>
        <Text>About</Text>
      </MainLayout>
    </>
  );
};

export default AboutScreen;
