import React from "react";
import { TextInput ,StyleSheet} from "react-native";
const Search =()=>{
    return(
    <TextInput placeholder="Ara..." style={styles.searc_input}>
    
    </TextInput>
    )

}
const styles=StyleSheet.create({
    searc_input:{
        backgroundColor: '#dcdcdc',
        margin:5,
        padding:10,
        borderRadius:10,

    },
    container:{
        flex:1
    }
})
export default Search;