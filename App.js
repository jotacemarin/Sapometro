import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SapometroScreen from './src/screens/SapometroScreen';
import AboutScreen from './src/screens/AboutScreen';

const Stack = createNativeStackNavigator();

const initialRouteName = 'Sapometro';

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Sapometro" component={SapometroScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
