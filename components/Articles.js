//import libraries

// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

//create a component
//User is logged in

const Articles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SYK</Text>

      <TouchableOpacity style={styles.Button1} onPress={() => auth().signOut()}>
        <Text style={{color: 'black', backgroundColor: 'white'}}>
          매장별 검색
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Button2} onPress={() => auth().signOut()}>
        <Text style={{color: 'black', backgroundColor: 'white'}}>
          사원별 검색
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    backgroundColor: 'red',
    position: 'relative',
    top: -304,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    width: 411,
    color: 'white',
    padding: 5,
  },

  Button1: {
    flex: 1,
    width: 100,
    height: 100,
    textAlign: 'center',
    position: 'absolute',
    borderRadius: 20,
    borderWidth: 5,
    alignItems: 'stretch',
  },
  Button2: {
    flex: 1,
    width: 100,
    height: 200,
    textAlign: 'center',
    position: 'absolute',
    borderRadius: 20,
    borderWidth: 5,
    alignItems: 'stretch',
  },
});

export default Articles;
