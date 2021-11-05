import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>

      <Text style={styles.paragraph}>
      1.Angle
      </Text>

      <TouchableOpacity style={styles.p}>
      P
      </TouchableOpacity>

      <TouchableOpacity style={styles.A}>
      A
      </TouchableOpacity>

      <Text style={styles.paragraph}>
      2.Rupin
      </Text>

 <TouchableOpacity style={styles.p}>
      P
      </TouchableOpacity>

      <TouchableOpacity style={styles.A}>
      A
      </TouchableOpacity> 

      <Text style={styles.paragraph}>
      3.Ashish
      </Text>

      <TouchableOpacity style={styles.p}>
      P
      </TouchableOpacity>

      <TouchableOpacity style={styles.A}>
      A
      </TouchableOpacity>
        <TouchableOpacity style={styles.s}>
    Submit
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft:-200,
  },
 p:{
   textAlign:'center',
   backgroundColor:'green',
   borderColor:'black',
   padding:10
 },
 A:{
   textAlign:'center',
   backgroundColor:'red',
   borderColor:'black',
   padding:10
 },
 s:{
   margin:30,
   marginTop:30,
   backgroundColor:'yellow',
   paddingTop:20,
   paddingLeft:30,
   paddingBottom:20,
   paddingRight:30,
   
 }
});
