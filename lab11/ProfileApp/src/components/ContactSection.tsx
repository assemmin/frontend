import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (email && phone && message) {
      setSent(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text>Phone</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} />

      <Text>Message</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        multiline={true}
      />

      <TouchableOpacity
        style={[styles.button, (!email || !phone || !message) && styles.disabled]}
        onPress={handleSend}
        disabled={!email || !phone || !message}
      >
        <Text>Send</Text>
      </TouchableOpacity>

      {sent && <Text>Message sent!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10 },
  button: { backgroundColor: 'blue', padding: 10 },
  disabled: { backgroundColor: 'gray' },
});