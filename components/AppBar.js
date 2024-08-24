import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Box, HStack, Text } from 'native-base';

import constants from '../constants/constants';

const AppBar = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('state', () => {
      const pageName = constants.pageTitles[navigation.getCurrentRoute()?.name];
      props.setPageTitle(pageName || props.pageTitle);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack
        bg="violet.800"
        px="8"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center">
          <Text
            color="white"
            fontSize="20"
            fontWeight="bold"
            onPress={() => navigation.navigate('Home')}
          >
            Native Base Application
          </Text>
        </HStack>
        <HStack></HStack>
      </HStack>
    </>
  );
};

export default AppBar;
