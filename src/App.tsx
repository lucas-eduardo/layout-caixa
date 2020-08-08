import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { Route } from './routes';

const App = () => (
  <>
    <StatusBar backgroundColor="transparent" translucent />
    <Route />
  </>
);

export { App };
