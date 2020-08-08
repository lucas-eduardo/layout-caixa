import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from './pages/main/SignIn';
import { Initial } from './pages/physicalPerson/Initial';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Initial" component={Initial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Route };
