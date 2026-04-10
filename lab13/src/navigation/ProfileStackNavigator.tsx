import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { ProfileStackParamList } from './types';
import { ProfileTabScreen } from '../screens/ProfileTabScreen';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileHome"
        component={ProfileTabScreen}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
  );
}

