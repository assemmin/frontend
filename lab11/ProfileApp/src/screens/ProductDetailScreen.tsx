import React from 'react';
import { View, Text } from 'react-native';

export function ProductDetailScreen({ route }: any) {
  const { product } = route.params;

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>
    </View>
  );
}