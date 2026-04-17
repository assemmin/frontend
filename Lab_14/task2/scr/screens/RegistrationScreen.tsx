import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  KeyboardAvoidingView, Platform, ScrollView,
  Keyboard, TouchableWithoutFeedback
} from 'react-native';

export default function RegistrationScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({ email: '' });

  const validateEmail = (text: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setForm({ ...form, email: text });

    if (!regex.test(text) && text.length > 0) {
      setErrors({ email: 'Invalid email' });
    } else {
      setErrors({ email: '' });
    }
  };

  const handleRegister = () => {
    Keyboard.dismiss();

    if (!errors.email && form.email && form.password) {
      console.log('Registered:', form);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container}>

          <Text style={styles.title}>Register</Text>

          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={(t) => setForm({ ...form, name: t })}
          />

          <TextInput
            placeholder="Email"
            style={[styles.input, errors.email && styles.errorInput]}
            onChangeText={validateEmail}
          />

          {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            onChangeText={(t) => setForm({ ...form, password: t })}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}
          >
            <Text style={{ color: '#fff' }}>Register</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20
  },

  title: {
    fontSize: 28,
    marginBottom: 20
  },

  input: {
    height: 50,
    borderWidth: 1,
    marginBottom: 15,
    padding: 10
  },

  errorInput: {
    borderColor: 'red'
  },

  error: {
    color: 'red',
    marginBottom: 10
  },

  button: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center'
  }
});