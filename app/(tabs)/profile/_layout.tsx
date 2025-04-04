import React from 'react';
import { Stack } from 'expo-router';
import { useTheme } from 'react-native-paper';

export default function ProfileLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTintColor: theme.colors.surface,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: '',
        }}
      />
    </Stack>
  );
}
