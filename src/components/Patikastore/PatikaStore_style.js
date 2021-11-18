import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#dcdcdc',
        margin:4,
        borderRadius:10,
        width: Dimensions.get('window').width/2


    },
    Image:{
            height: Dimensions.get('window').height / 4,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            resizeMode: 'contain',
            backgroundColor: 'white',
        },
title:{
    fontWeight: 'bold',
fontSize:20  
},
price:{
    color:"grey",
    fontWeight:"bold"
},
inner_container: {
    padding: 10,
    paddingBottom: 0,
  },
  inStock: {
    fontWeight: 'bold',
    color: 'red',
  },
})