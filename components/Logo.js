//import libraries

// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {View, Image} from 'react-native';

//create a component
const Logo = () => {
  return (
    <View>
      <Image
        source={require('../assets/syk.jpg')}
        Style={{width: 346, height: 164}}
      />
    </View>
  );
};

// define your styles

export default Logo;
