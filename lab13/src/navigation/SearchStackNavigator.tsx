import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { SearchStackParamList } from './types';
import { SearchScreen } from '../screens/SearchScreen';

const Stack = createNativeStackNavigator<SearchStackParamList>();

export function SearchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Search' }} />
    </Stack.Navigator>
  );
}

