import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]); // ✅ массив, не string

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem('todos');
        if (stored) {
          const parsed = JSON.parse(stored); // ✅ parse
          // Ensure all completed values are booleans, not strings
          if (Array.isArray(parsed)) {
            const fixedTodos = parsed.map((todo) => {
              let completed = todo.completed;
              // Convert string booleans to actual booleans
              if (typeof completed === 'string') {
                completed = completed === 'true' || completed === '1';
              }
              // Ensure it's always a boolean
              if (typeof completed !== 'boolean') {
                completed = Boolean(completed);
              }
              return {
                ...todo,
                completed,
              };
            });
            setTodos(fixedTodos);
          }
        }
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    })();
  }, []);

  useEffect(() => {
    try {
      AsyncStorage.setItem('todos', JSON.stringify(todos)); // ✅ stringify
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  }, [todos]);

  const addTodo = (text) => {
    if (!text || typeof text !== 'string') return;
    setTodos([...todos, { id: Date.now().toString(), text: text.trim(), completed: false }]); // ✅ boolean
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, clearCompleted, clearAll }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => useContext(TodoContext);
