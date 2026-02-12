import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../contexts/ThemeContext';
import { useTodos } from '../contexts/TodoContext';

/**
 * Data Screen - Statistics and Analytics
 * Displays todo statistics and data insights
 */
export default function DataScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const { todos, clearCompleted, clearAll } = useTodos();

  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.filter((todo) => !todo.completed).length;
  const totalCount = todos.length;
  const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={[styles.backButtonText, { color: colors.primary }]}>← Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>Statistics</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Summary Cards */}
        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Total Tasks</Text>
          <Text style={[styles.cardValue, { color: colors.primary }]}>{totalCount}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Completed</Text>
          <Text style={[styles.cardValue, { color: colors.secondary }]}>{completedCount}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Pending</Text>
          <Text style={[styles.cardValue, { color: colors.error }]}>{pendingCount}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Completion Rate</Text>
          <Text style={[styles.cardValue, { color: colors.primary }]}>{completionRate}%</Text>
          <View style={[styles.progressBar, { backgroundColor: colors.surface }]}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${completionRate}%`,
                  backgroundColor: colors.secondary,
                },
              ]}
            />
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            onPress={clearCompleted}
            style={[styles.actionButton, { backgroundColor: colors.surface, borderColor: colors.border }]}
            disabled={completedCount === 0}
          >
            <Text style={[styles.actionButtonText, { color: colors.text }]}>
              Clear Completed ({completedCount})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={clearAll}
            style={[styles.actionButton, { backgroundColor: colors.error, borderColor: colors.error }]}
            disabled={totalCount === 0}
          >
            <Text style={[styles.actionButtonText, { color: '#FFFFFF' }]}>
              Clear All Tasks
            </Text>
          </TouchableOpacity>
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
    card: {
      padding: 24,
      borderRadius: 16,
      marginBottom: 16,
      borderWidth: 1,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    cardTitle: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      marginBottom: 8,
      opacity: 0.7,
    },
    cardValue: {
      fontSize: 48,
      fontWeight: 'bold',
      fontFamily: 'Inter-Bold',
    },
    progressBar: {
      height: 8,
      borderRadius: 4,
      marginTop: 12,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      borderRadius: 4,
    },
    actionsContainer: {
      gap: 12,
      marginTop: 8,
    },
    actionButton: {
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      alignItems: 'center',
    },
    actionButtonText: {
      fontSize: 16,
      fontFamily: 'Inter-Medium',
    },
  });

