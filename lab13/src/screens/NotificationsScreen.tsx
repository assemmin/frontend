import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.text}>Здесь могли бы быть уведомления.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, gap: 10 },
  title: { fontSize: 26, fontWeight: '700' },
  text: { fontSize: 16, opacity: 0.8, textAlign: 'center' },
});

