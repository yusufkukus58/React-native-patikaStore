import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Header = () => {
  return <Text style={styles.container}>PATIKA STORE</Text>;
};

const styles = StyleSheet.create({
  container: {
    color: '#ba55d3',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    textAlign:"center"

  },
});

export default Header;