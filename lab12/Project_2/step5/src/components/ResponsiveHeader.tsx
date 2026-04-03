import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '../../contexts/ThemeContext';

interface ResponsiveHeaderProps {
  title: string;
  leftAction?: {
    icon: string;
    onPress: () => void;
  };
  rightAction?: {
    icon: string;
    onPress: () => void;
  };
}

export function ResponsiveHeader({ title, leftAction, rightAction }: ResponsiveHeaderProps) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  // Use values for future responsive tuning (e.g. typography).
  const isLandscape = width > height;
  const isTablet = width >= 768;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.primary }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
        translucent={Platform.OS === 'android'}
      />

      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.primary,
            paddingTop: Platform.OS === 'android' ? insets.top : 0,
            height: 56 + (Platform.OS === 'android' ? insets.top : 0),
          },
        ]}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            {leftAction && (
              <TouchableOpacity style={styles.headerButton} onPress={leftAction.onPress}>
                <Text style={[styles.headerIcon, { color: '#fff' }]}>{leftAction.icon}</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.headerCenter}>
            <Text
              style={[
                styles.headerTitle,
                isTablet && styles.headerTitleTablet,
                isLandscape && { fontSize: isTablet ? 22 : 18 },
              ]}
              numberOfLines={1}
            >
              {title}
            </Text>
          </View>

          <View style={styles.headerRight}>
            {rightAction && (
              <TouchableOpacity style={styles.headerButton} onPress={rightAction.onPress}>
                <Text style={[styles.headerIcon, { color: '#fff' }]}>{rightAction.icon}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

interface ResponsiveContainerProps {
  children: React.ReactNode;
}

export function ResponsiveContainer({ children }: ResponsiveContainerProps) {
  const { colors } = useTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      {isTablet ? (
        <View style={styles.tabletContainer}>
          <View style={[styles.tabletSidebar, { borderRightColor: colors.border }]}>
            <Text style={[styles.sidebarText, { color: colors.textSecondary }]}>Navigation</Text>

            <TouchableOpacity
              onPress={() => router.push('/')}
              style={[styles.navItem, { borderColor: colors.border, backgroundColor: colors.surface }]}
            >
              <Text style={[styles.navItemText, { color: colors.primary }]}>My Tasks</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/data')}
              style={[styles.navItem, { borderColor: colors.border, backgroundColor: colors.surface }]}
            >
              <Text style={[styles.navItemText, { color: colors.primary }]}>Statistics</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/settings')}
              style={[styles.navItem, { borderColor: colors.border, backgroundColor: colors.surface }]}
            >
              <Text style={[styles.navItemText, { color: colors.primary }]}>Settings</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.tabletContent, { backgroundColor: colors.background }]}>
            {children}
          </View>
        </View>
      ) : (
        <View style={{ flex: 1 }}>{children}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
  },
  header: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    height: 56,
  },
  headerLeft: {
    width: 48,
    alignItems: 'flex-start',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    width: 48,
    alignItems: 'flex-end',
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  headerTitleTablet: {
    fontSize: 22,
  },
  container: {
    flex: 1,
  },
  tabletContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  tabletSidebar: {
    width: 250,
    borderRightWidth: 1,
    paddingTop: 20,
    paddingHorizontal: 12,
  },
  sidebarText: {
    fontSize: 16,
    marginBottom: 14,
  },
  navItem: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  navItemText: {
    fontSize: 15,
    fontWeight: '600',
  },
  tabletContent: {
    flex: 1,
    padding: 20,
  },
});

