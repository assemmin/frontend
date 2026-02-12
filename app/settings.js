import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Settings Screen - App Configuration
 * Allows users to change theme and view app information
 */
export default function SettingsScreen() {
  const router = useRouter();
  const { colors, isDark, toggleTheme } = useTheme();

  const styles = createStyles(colors);

  const getThemeLabel = () => {
    return isDark ? 'Dark' : 'Light';
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={[styles.backButtonText, { color: colors.primary }]}>← Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Theme Section */}
        <View style={[styles.section, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Appearance</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={[styles.settingLabel, { color: colors.text }]}>Theme</Text>
              <Text style={[styles.settingValue, { color: colors.textSecondary }]}>
                {getThemeLabel()}
              </Text>
            </View>
          </View>

          <View style={styles.themeOptions}>
            <TouchableOpacity
              onPress={() => {
                if (isDark) toggleTheme();
              }}
              style={[
                styles.themeOption,
                {
                  backgroundColor: !isDark ? colors.primary : colors.surface,
                  borderColor: colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.themeOptionText,
                  { color: !isDark ? '#FFFFFF' : colors.text },
                ]}
              >
                Light
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                if (!isDark) toggleTheme();
              }}
              style={[
                styles.themeOption,
                {
                  backgroundColor: isDark ? colors.primary : colors.surface,
                  borderColor: colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.themeOptionText,
                  { color: isDark ? '#FFFFFF' : colors.text },
                ]}
              >
                Dark
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* App Info Section */}
        <View style={[styles.section, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>About</Text>

          <View style={styles.settingItem}>
            <Text style={[styles.settingLabel, { color: colors.text }]}>App Name</Text>
            <Text style={[styles.settingValue, { color: colors.textSecondary }]}>
              To-Do Planner
            </Text>
          </View>

          <View style={styles.settingItem}>
            <Text style={[styles.settingLabel, { color: colors.text }]}>Version</Text>
            <Text style={[styles.settingValue, { color: colors.textSecondary }]}>1.0.0</Text>
          </View>

          <View style={styles.settingItem}>
            <Text style={[styles.settingLabel, { color: colors.text }]}>Storage</Text>
            <Text style={[styles.settingValue, { color: colors.textSecondary }]}>
              Local (AsyncStorage)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderBottomWidth: 1,
    },
    backButton: {
      padding: 8,
    },
    backButtonText: {
      fontSize: 16,
      fontFamily: 'Inter-Medium',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      fontFamily: 'Inter-Bold',
    },
    placeholder: {
      width: 60,
    },
    content: {
      padding: 16,
    },
    section: {
      padding: 20,
      borderRadius: 16,
      marginBottom: 16,
      borderWidth: 1,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Inter-Bold',
      marginBottom: 16,
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    settingInfo: {
      flex: 1,
    },
    settingLabel: {
      fontSize: 16,
      fontFamily: 'Inter-Medium',
      marginBottom: 4,
    },
    settingValue: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
    },
    themeOptions: {
      flexDirection: 'row',
      gap: 12,
      marginTop: 12,
    },
    themeOption: {
      flex: 1,
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      alignItems: 'center',
    },
    themeOptionText: {
      fontSize: 16,
      fontFamily: 'Inter-Medium',
    },
  });

