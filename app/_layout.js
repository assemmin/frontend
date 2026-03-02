import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from '../contexts/ThemeContext';
import { TodoProvider } from '../contexts/TodoContext';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

/**
 * Root Layout Component
 * Sets up Expo Router, fonts, themes, and providers
 */
export default function RootLayout() {
  // Load custom fonts - using try/catch for error handling
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide splash screen once fonts are loaded (or if there's an error)
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Show nothing while fonts are loading (splash screen will be visible)
  // If fonts fail to load, the app will still work with system fonts
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider>
      <TodoProvider>
        <Stack />
      </TodoProvider>
    </ThemeProvider>
  );
}

