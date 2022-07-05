import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from './App';
import NewPlace from './screens/NewPlace';

export type RootStackParamList = {
  Home: undefined;
  NewPlace: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="NewPlace" component={NewPlace} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
