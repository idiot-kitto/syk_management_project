//import libraries

// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import auth from '@react-native-firebase/auth';

//create a component
//User is logged in

const Articles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.TextFontSize}>SYK</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => auth().signOut()}>
        <Text style={styles.TextFontSize}>매장 별 검색</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => auth().signOut()}>
        <Text style={styles.TextFontSize}>사원 별 검색</Text>
      </TouchableOpacity>

      <View>
        <Image source={require('../assets/syk.jpg')} style={styles.Logo}/>
      </View>

    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  container : {
    width:'100%',
    height:'100%',
    backgroundColor: 'white'
  },
  header : {
    backgroundColor: '#ffe78f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn : {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd',
    width: '50%',
    height: '30%',
    marginTop: '15%',
    marginLeft: '25%',
    borderRadius: 30,
  },
  TextFontSize: {
    fontSize: 30
  },
  Logo: {
    resizeMode: 'contain',
    width:100
  }
});

export default Articles;