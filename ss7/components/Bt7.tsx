import React from 'react';
import { FlatList, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

type ItemType = {
  id: string;
  title: string;
};

const DATA: ItemType[] = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  title: `Item ${i + 1}`,
}));

export default function Bt7() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const renderItem = ({ item }: { item: ItemType }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Chế độ hiện tại: {isLandscape ? 'Ngang' : 'Dọc'}
      </Text>

      <FlatList
        data={DATA}``
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={isLandscape ? 2 : 1}
        key={isLandscape ? 'landscape' : 'portrait'}
        columnWrapperStyle={isLandscape ? styles.row : undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  item: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
