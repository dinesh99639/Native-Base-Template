import { useState } from 'react';
import { Platform } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppBar from './components/AppBar';
import Home from './components/Home/Home';

const Stack = createNativeStackNavigator();

const title = (text) =>
  Platform.select({ web: `Native Base - ${text}`, default: text });

const App = () => {
  const [pageTitle, setPageTitle] = useState('Loading...');

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppBar pageTitle={pageTitle} setPageTitle={setPageTitle} />

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ title: title(pageTitle), headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
