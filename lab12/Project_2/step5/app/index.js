import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../contexts/ThemeContext';
import { useTodos } from '../contexts/TodoContext';
import { ResponsiveHeader, ResponsiveContainer } from '../src/components/ResponsiveHeader';
import { GridLayout } from '../src/components/GridLayout';
import { FeatureCard } from '../src/components/AdaptiveLayout';

/**
 * Home Screen - Main To-Do List
 * Displays todos with add, toggle, and delete functionality
 */
export default function HomeScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [inputText, setInputText] = useState('');

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const isTablet = width >= 768;
  const columns = isTablet || isLandscape ? 3 : 2;

  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.filter((todo) => !todo.completed).length;
  const totalCount = todos.length;

  const handleAddTodo = () => {
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText('');
    }
  };

  const styles = createStyles(colors);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ResponsiveHeader
        title="My To-Do List"
        leftAction={{ icon: '📊', onPress: () => router.push('/data') }}
        rightAction={{ icon: '⚙️', onPress: () => router.push('/settings') }}
      />

      <ResponsiveContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >

          <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            ListHeaderComponent={
              <View>
                <View style={styles.cardsWrapper}>
                  <GridLayout columns={columns} spacing={12}>
                    <FeatureCard
                      icon="📋"
                      title="Total Tasks"
                      description={`${totalCount}`}
                      variant="primary"
                    />
                    <FeatureCard
                      icon="✅"
                      title="Completed"
                      description={`${completedCount}`}
                      variant="secondary"
                    />
                    <FeatureCard
                      icon="⏳"
                      title="Pending"
                      description={`${pendingCount}`}
                      variant="accent"
                    />
                  </GridLayout>
                </View>

                {/* Add Todo Input */}
                <View style={[styles.inputContainer, { backgroundColor: colors.surface }]}>
                  <TextInput
                    style={[styles.input, { color: colors.text, borderColor: colors.border }]}
                    placeholder="Add a new task..."
                    placeholderTextColor={colors.textSecondary}
                    value={inputText}
                    onChangeText={setInputText}
                    onSubmitEditing={handleAddTodo}
                    returnKeyType="done"
                  />
                  <TouchableOpacity
                    onPress={handleAddTodo}
                    style={[styles.addButton, { backgroundColor: colors.primary }]}
                  >
                    <Text style={styles.addButtonText}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
            renderItem={({ item }) => (
              <View
                style={[styles.todoItem, { backgroundColor: colors.card, borderColor: colors.border }]}
              >
                <TouchableOpacity
                  style={styles.todoContent}
                  onPress={() => toggleTodo(item.id)}
                  activeOpacity={0.7}
                >
                  <View
                    style={[
                      styles.checkbox,
                      {
                        backgroundColor: item.completed ? colors.secondary : 'transparent',
                        borderColor: item.completed ? colors.secondary : colors.border,
                      },
                    ]}
                  >
                    {item.completed && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                  <Text
                    style={[
                      styles.todoText,
                      {
                        color: item.completed ? colors.textSecondary : colors.text,
                        textDecorationLine: item.completed ? 'line-through' : 'none',
                      },
                    ]}
                  >
                    {item.text}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => deleteTodo(item.id)}
                  style={styles.deleteButton}
                >
                  <Text style={[styles.deleteText, { color: colors.error }]}>
                    🗑️
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                  No tasks yet. Add one above! ✨
                </Text>
              </View>
            }
          />
        </KeyboardAvoidingView>
      </ResponsiveContainer>
    </View>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    keyboardView: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      fontFamily: 'Inter-Bold',
    },
    headerButtons: {
      flexDirection: 'row',
      gap: 12,
    },
    iconButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconButtonText: {
      fontSize: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      padding: 16,
      gap: 12,
      borderRadius: 12,
      margin: 16,
    },
    input: {
      flex: 1,
      height: 50,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 16,
      fontSize: 16,
      fontFamily: 'Inter-Regular',
    },
    addButton: {
      paddingHorizontal: 24,
      height: 50,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Inter-Medium',
    },
    listContainer: {
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    cardsWrapper: {
      marginTop: 16,
      marginBottom: 12,
    },
    todoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      marginBottom: 12,
      borderRadius: 12,
      borderWidth: 1,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    todoContent: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    checkbox: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkmark: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: 'bold',
    },
    todoText: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'Inter-Regular',
    },
    deleteButton: {
      padding: 8,
    },
    deleteText: {
      fontSize: 20,
    },
    emptyContainer: {
      paddingVertical: 60,
      alignItems: 'center',
    },
    emptyText: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
    },
  });

