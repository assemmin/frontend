import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

// Color definitions for light and dark themes
const lightColors = {
  background: '#FFFFFF',
  surface: '#F5F5F5',
  text: '#000000',
  textSecondary: '#666666',
  primary: '#007AFF',
  primaryDark: '#0051D5',
  secondary: '#34C759',
  error: '#FF3B30',
  border: '#E0E0E0',
  card: '#FFFFFF',
  shadow: '#000000',
};

const darkColors = {
  background: '#000000',
  surface: '#1C1C1E',
  text: '#FFFFFF',
  textSecondary: '#AEAEB2',
  primary: '#0A84FF',
  primaryDark: '#0051D5',
  secondary: '#30D158',
  error: '#FF453A',
  border: '#38383A',
  card: '#1C1C1E',
  shadow: '#000000',
};

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false); // ✅ boolean

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem('theme');
        if (stored !== null) {
          let parsed;
          try {
            parsed = JSON.parse(stored); // ✅ parse
          } catch {
            // If parsing fails, treat as raw string
            parsed = stored;
          }
          
          // Convert to boolean if it's a string
          if (typeof parsed === 'string') {
            parsed = parsed === 'true' || parsed === '1';
          }
          
          // Ensure it's a boolean
          if (typeof parsed === 'boolean') {
            setIsDark(parsed);
          }
        }
      } catch (error) {
        console.error('Error loading theme:', error);
      }
    })();
  }, []);

  const toggleTheme = async () => {
    const newValue = !isDark;
    setIsDark(newValue);
    try {
      await AsyncStorage.setItem('theme', JSON.stringify(newValue)); // ✅ stringify
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  // Compute colors based on isDark boolean
  const colors = useMemo(() => {
    return isDark ? darkColors : lightColors;
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
