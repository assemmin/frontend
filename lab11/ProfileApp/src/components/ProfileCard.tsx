import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}

export function ProfileCard({ name, role, bio, avatar }: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: avatar || 'https://via.placeholder.com/100' }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text>{role}</Text>
        <Text>{bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 20,
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});