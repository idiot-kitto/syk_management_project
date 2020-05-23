//import libraries

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';

//create a component

class EmailAndPassword extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onBottomPress = () => {
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess)
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  };

  onLoginSuccess = () => {
    this.setState({
      error: '',
      loading: false,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />

        <TextInput
          placeholder="password"
          style={styles.input}
          secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onBottomPress}
          disabled={!this.state.password || !this.state.email}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>{this.state.error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,.5)',
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 15,
  },
  errorText: {
    fontSize: 25,
    color: 'red',
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: '#383898',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
});

//make this component available to the app

export default EmailAndPassword;
