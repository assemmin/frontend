import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function ProductItem({ product, onPress }: any) {
  return (
    <TouchableOpacity onPress={() => onPress(product)}>
      <View>
        <Text>{product.name}</Text>
        <Text>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}