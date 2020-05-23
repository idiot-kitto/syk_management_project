//import libraries

// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

//create a component
//Connecting To Firebase And Getting Data
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Loading;
