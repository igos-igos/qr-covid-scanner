import React from 'react';
import {Text} from 'react-native';
import FocusAwareStatusBar from '../components/CustomStatusBar/CustomStatusBar';
import MainLayout from '../layouts/MainLayout/MainLayout';

const VisitorsScreen = () => {
  return (
    <>
      <FocusAwareStatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="#fff"
      />
      <MainLayout>
        <Text>Visitors</Text>
      </MainLayout>
    </>
  );
};

export default VisitorsScreen;
