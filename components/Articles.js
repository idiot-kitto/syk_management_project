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
      <View style={styles.articleContainer}>
        <Text style={styles.heading}>Welcome to the Authorized screen</Text>
        <Text style={styles.content}>You are logged in from Firebase</Text>

        <TouchableOpacity
          style={{padding: 20}}
          onPress={() => auth().signOut()}>
          <Text style={{color: '#1B9CFC'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleContainer: {
    padding: 10,
    borderBottomColor: 'rgba(255,255,255,.7)',
    borderBottomWidth: 5,
  },
  heading: {
    fontSize: 22,
    color: 'black',
    padding: 10,
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
    fontSize: 19,
  },
});

export default Articles;
