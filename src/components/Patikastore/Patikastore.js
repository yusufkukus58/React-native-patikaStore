import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PatikaStore_style';
const Patikastore = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container} >
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text style={styles.title} >{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>

        <Text style={styles.inStock}>{product.inStock=== true ? '' :'Stockta yok'}</Text>
      </View>
    </View>
  );
};
export default Patikastore
