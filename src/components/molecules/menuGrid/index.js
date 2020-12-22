import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

const MenuGrid = () => {
  const items = [
    {nama: 'Ahmad', alamat: 'bogor'},
    {nama: 'janda', alamat: 'teu jelas'},
    {nama: 'dodong', alamat: 'diding'},
    {nama: 'dodi', alamat: 'dododng'},
    {nama: 'rereng', alamat: 'rurung'},
    {nama: 'kedot', alamat: 'ditalipak'},
  ];
  return (
    <FlatGrid
      itemDimension={120}
      items={items}
      style={styles.gridView}
      renderItem={({item, index}) => (
        <View
          style={[
            styles.itemContainer,
            {
              backgroundColor: 'pink',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2.5},
              shadowOpacity: 1,
              shadowRadius: 4,
              elevation: 6,
            },
          ]}>
          <Text style={item.Name}>{item.nama}</Text>
          <Text style={item.Code}>{item.alamat}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 5,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
export default MenuGrid;
