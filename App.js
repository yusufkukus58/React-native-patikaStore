import React from "react";
import { Text,View,FlatList, SafeAreaView ,StyleSheet} from "react-native";
import Header from './src/components/Header/Header';
import Patikastore from "./src/components/Patikastore/Patikastore";
import Search from "./src/components/Search/Search";

import patika_data from './src/patika_store_data.json';
const App=()=>{
  const renderProduct=({item})=><Patikastore product={item}></Patikastore>
  return(
    <SafeAreaView style={styles.container}>
    <Header></Header>
<Search></Search>
<FlatList data={patika_data} horizontal={false} numColumns={2} renderItem={renderProduct}></FlatList>
</SafeAreaView>

  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
export default App;
