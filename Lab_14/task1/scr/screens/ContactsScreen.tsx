import React, { useState, useCallback } from 'react';
import {
  View, Text, FlatList, StyleSheet, SafeAreaView,
  TouchableOpacity, RefreshControl, Alert
} from 'react-native';

import { generateContacts } from '../utils/mockData';
import { Contact } from '../types';

const ITEM_HEIGHT = 80;

export default function ContactsScreen() {
  const [contacts, setContacts] = useState<Contact[]>(generateContacts(100));
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = useCallback(({ item }: { item: Contact }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => Alert.alert('Selected', item.email)}
    >
      <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
        <Text style={styles.avatarText}>
          {item.firstName[0]}{item.lastName[0]}
        </Text>
      </View>

      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.contactEmail}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  ), []);

  const keyExtractor = useCallback((item: Contact) => item.id, []);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  }), []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setContacts(generateContacts(100));
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>University Directory</Text>
            <Text>Total: {contacts.length}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        initialNumToRender={15}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 20, backgroundColor: '#fff' },

  contactItem: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },

  avatarText: { color: '#fff', fontWeight: 'bold' },

  contactDetails: { flex: 1 },

  contactName: { fontSize: 16, fontWeight: '600' },
  contactEmail: { fontSize: 13, color: '#777' },

  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 85
  }
});