//import libraries

// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Logo from './Logo';
import EmailAndPassword from './EmailAndPassword';

//create a component
//User is not Logged in

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.emailAndPassword}>
        <EmailAndPassword />
      </View>
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailAndPassword: {
    flex: 2,
  },
});

export default LoginForm;
