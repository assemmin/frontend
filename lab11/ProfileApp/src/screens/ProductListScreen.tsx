import React from 'react';
import { View, FlatList } from 'react-native';
import { products } from '../data/products';
import { ProductItem } from '../components/ProductItem';

export function ProductListScreen({ navigation }: any) {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onPress={(product: any) =>
              navigation.navigate('ProductDetail', { product })
            }
          />
        )}
      />
    </View>
  );
}