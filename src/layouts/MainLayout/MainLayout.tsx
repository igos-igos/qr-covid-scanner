import React, {FC} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';

type PropsTypes = {
  header?: React.ReactNode;
};

const MainLayout: FC<PropsTypes> = ({children, header}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        {header}
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainLayout;
